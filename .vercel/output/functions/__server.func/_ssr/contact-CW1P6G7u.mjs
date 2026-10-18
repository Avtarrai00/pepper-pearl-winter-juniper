import { a as string, i as object, r as number, t as email } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CW1P6G7u.js
var contactSchema = object({
	name: string().trim().min(2, { error: "Please enter your name." }).max(80, { error: "Name is too long." }),
	email: email({ error: "Enter a valid email address." }).max(120, { error: "Email is too long." }),
	subject: string().trim().min(2, { error: "Add a short subject." }).max(140, { error: "Subject is too long." }),
	message: string().trim().min(12, { error: "Tell me a little more — at least a sentence." }).max(1200, { error: "Message is too long for an email draft." }),
	company: string().max(0, { error: "Message was not sent." }),
	mountedAt: number()
});
function fieldErrorsFromZod(error) {
	const fieldErrors = {};
	for (const issue of error.issues) {
		const key = String(issue.path[0] ?? "form");
		if (!fieldErrors[key]) fieldErrors[key] = issue.message;
	}
	return fieldErrors;
}
//#endregion
export { fieldErrorsFromZod as n, contactSchema as t };
