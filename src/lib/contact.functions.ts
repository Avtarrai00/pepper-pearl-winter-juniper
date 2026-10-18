import { createServerFn } from "@tanstack/react-start";
import { configuredInbox } from "@/config/portfolio";
import { contactSchema, fieldErrorsFromZod, type ContactResult } from "@/lib/contact";

const hits = new Map<string, number[]>();

function allow(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((stamp) => now - stamp < 10 * 60 * 1000);
  if (recent.length >= 5) {
    hits.set(ip, recent);
    return false;
  }
  recent.push(now);
  hits.set(ip, recent);
  return true;
}

export const prepareContact = createServerFn({ method: "POST" })
  .validator((input: unknown) => input)
  .handler(async ({ data }): Promise<ContactResult> => {
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors = fieldErrorsFromZod(parsed.error);
      if (fieldErrors.company) {
        return { status: "rejected", message: "Message was not sent." };
      }
      return {
        status: "invalid",
        message: "Check the highlighted fields. Nothing was sent.",
        fieldErrors,
      };
    }

    const age = Date.now() - parsed.data.mountedAt;
    if (age < 1200 || age > 1000 * 60 * 60 * 12) {
      return {
        status: "rejected",
        message: "Please wait a moment and try again. Nothing was sent.",
      };
    }

    const { getRequestIP } = await import("@tanstack/react-start/server");
    const ip = getRequestIP({ xForwardedFor: true }) ?? "local";
    if (!allow(ip)) {
      return {
        status: "rejected",
        message: "Too many attempts from this network. Wait a few minutes. Nothing was sent.",
      };
    }

    const inbox = configuredInbox();
    if (!inbox) {
      return {
        status: "unconfigured",
        message:
          "No inbox is connected yet, so this message was not sent. Add an email address in the portfolio config.",
      };
    }

    const body = [
      parsed.data.message,
      "",
      `From: ${parsed.data.name}`,
      `Reply to: ${parsed.data.email}`,
    ].join("\n");
    const mailto = `mailto:${inbox}?subject=${encodeURIComponent(parsed.data.subject)}&body=${encodeURIComponent(body)}`;
    if (mailto.length > 1900) {
      return {
        status: "invalid",
        message: "That note is too long to open as a draft. Shorten it and try again.",
        fieldErrors: { message: "Shorten the message so it fits in an email draft." },
      };
    }

    return { status: "draft", mailto };
  });
