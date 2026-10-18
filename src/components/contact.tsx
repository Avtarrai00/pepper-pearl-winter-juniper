import { useServerFn } from "@tanstack/react-start";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";
import { configuredInbox, contactCopy, isHttpUrl, isSafeHref, profile } from "@/config/portfolio";
import { contactSchema, fieldErrorsFromZod } from "@/lib/contact";
import { prepareContact } from "@/lib/contact.functions";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

const fields = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "subject", label: "Subject", type: "text", autoComplete: "off" },
] as const;

export function Contact() {
  const submit = useServerFn(prepareContact);
  const mountedAt = useMemo(() => Date.now(), []);
  const inbox = configuredInbox();
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "", company: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "draft" | "error">("idle");
  const [notice, setNotice] = useState("");
  const [mailto, setMailto] = useState("");

  const socials = [
    profile.socials.github ? { label: "GitHub", href: profile.socials.github } : null,
    profile.socials.linkedin ? { label: "LinkedIn", href: profile.socials.linkedin } : null,
    profile.socials.instagram ? { label: "Instagram", href: profile.socials.instagram } : null,
  ].filter((item): item is { label: string; href: string } => Boolean(item && isHttpUrl(item.href)));

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("");
    setMailto("");
    const payload = { ...values, mountedAt };
    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors = fieldErrorsFromZod(parsed.error);
      if (fieldErrors.company) {
        setStatus("error");
        setNotice("Message was not sent.");
        return;
      }
      setErrors(fieldErrors);
      setStatus("error");
      setNotice("Check the highlighted fields. Nothing was sent.");
      return;
    }
    setErrors({});
    setStatus("submitting");
    try {
      const result = await submit({ data: payload });
      if (result.status === "draft") {
        setMailto(result.mailto);
        setStatus("draft");
        setNotice("A draft opened in your email app. It is not sent until you send that email.");
        window.location.href = result.mailto;
        return;
      }
      setStatus("error");
      setNotice(result.message);
      if (result.status === "invalid") setErrors(result.fieldErrors);
    } catch {
      setStatus("error");
      setNotice("The draft could not be prepared. Nothing was sent.");
    }
  }

  return (
    <section id="contact" className="contact-glow relative border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-screen-xl gap-14 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading index="08" eyebrow="Contact" title={contactCopy.heading} lede={contactCopy.lede} />
          <p className="mt-6 max-w-md text-sm text-muted">{contactCopy.note}</p>
          <ul className="mt-8 space-y-3">
            {inbox ? (
              <li>
                <a className="inline-flex min-h-11 items-center gap-2 text-fg hover:text-accent" href={`mailto:${inbox}`}>
                  {inbox}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </li>
            ) : (
              <li className="font-mono text-xs tracking-wide text-muted">Email address not added yet.</li>
            )}
            {socials.map((item) => (
              <li key={item.label}>
                <a
                  className="inline-flex min-h-11 items-center gap-2 text-fg hover:text-accent"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.label}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
            {isSafeHref(profile.resumeUrl) ? (
              <li>
                <a className="inline-flex min-h-11 items-center text-fg hover:text-accent" href={profile.resumeUrl}>
                  Résumé
                </a>
              </li>
            ) : null}
          </ul>
        </div>

        <form className="relative space-y-5 lg:col-span-7" onSubmit={onSubmit} noValidate>
          <div className="hp-field" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              value={values.company}
              onChange={(event) => setValues((current) => ({ ...current, company: event.target.value }))}
            />
          </div>
          {fields.map((field) => {
            const error = errors[field.name];
            const id = `contact-${field.name}`;
            return (
              <div key={field.name}>
                <label htmlFor={id} className="mb-2 block text-sm text-fg">
                  {field.label}
                </label>
                <input
                  id={id}
                  name={field.name}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  value={values[field.name]}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? `${id}-error` : undefined}
                  onChange={(event) =>
                    setValues((current) => ({ ...current, [field.name]: event.target.value }))
                  }
                  className="min-h-12 w-full rounded-2xl border border-line bg-surface px-4 text-fg outline-none focus-visible:border-accent"
                />
                {error ? (
                  <p id={`${id}-error`} className="mt-2 text-sm text-fg" role="alert">
                    {error}
                  </p>
                ) : null}
              </div>
            );
          })}
          <div>
            <label htmlFor="contact-message" className="mb-2 block text-sm text-fg">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={6}
              value={values.message}
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
              onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
              className="w-full rounded-2xl border border-line bg-surface px-4 py-3 text-fg outline-none focus-visible:border-accent"
            />
            {errors.message ? (
              <p id="contact-message-error" className="mt-2 text-sm text-fg" role="alert">
                {errors.message}
              </p>
            ) : null}
          </div>
          <Button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Preparing draft…" : "Prepare email draft"}
          </Button>
          {notice ? (
            <p role="status" className="text-sm text-fg">
              {notice}
            </p>
          ) : null}
          {mailto ? (
            <p>
              <a className="text-sm text-accent underline-offset-4 hover:underline" href={mailto}>
                Open the draft again
              </a>
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
