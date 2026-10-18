import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { error: "Please enter your name." })
    .max(80, { error: "Name is too long." }),
  email: z.email({ error: "Enter a valid email address." }).max(120, { error: "Email is too long." }),
  subject: z
    .string()
    .trim()
    .min(2, { error: "Add a short subject." })
    .max(140, { error: "Subject is too long." }),
  message: z
    .string()
    .trim()
    .min(12, { error: "Tell me a little more — at least a sentence." })
    .max(1200, { error: "Message is too long for an email draft." }),
  company: z.string().max(0, { error: "Message was not sent." }),
  mountedAt: z.number(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactResult =
  | { status: "draft"; mailto: string }
  | { status: "unconfigured"; message: string }
  | { status: "invalid"; message: string; fieldErrors: Record<string, string> }
  | { status: "rejected"; message: string };

export function fieldErrorsFromZod(error: z.ZodError) {
  const fieldErrors: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!fieldErrors[key]) fieldErrors[key] = issue.message;
  }
  return fieldErrors;
}
