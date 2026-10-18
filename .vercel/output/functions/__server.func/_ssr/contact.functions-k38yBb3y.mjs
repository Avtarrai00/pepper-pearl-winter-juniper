import { n as createServerFn, r as TSS_SERVER_FUNCTION } from "./ssr.mjs";
import { r as configuredInbox } from "./portfolio-BdUMqOt7.mjs";
import { n as fieldErrorsFromZod, t as contactSchema } from "./contact-CW1P6G7u.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact.functions-k38yBb3y.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var hits = /* @__PURE__ */ new Map();
function allow(ip) {
	const now = Date.now();
	const recent = (hits.get(ip) ?? []).filter((stamp) => now - stamp < 6e5);
	if (recent.length >= 5) {
		hits.set(ip, recent);
		return false;
	}
	recent.push(now);
	hits.set(ip, recent);
	return true;
}
var prepareContact_createServerFn_handler = createServerRpc({
	id: "9d26ec35668537ccd89bf1f6865663f39ff06b7690182c583a9a07929109083a",
	name: "prepareContact",
	filename: "src/lib/contact.functions.ts"
}, (opts) => prepareContact.__executeServer(opts));
var prepareContact = createServerFn({ method: "POST" }).validator((input) => input).handler(prepareContact_createServerFn_handler, async ({ data }) => {
	const parsed = contactSchema.safeParse(data);
	if (!parsed.success) {
		const fieldErrors = fieldErrorsFromZod(parsed.error);
		if (fieldErrors.company) return {
			status: "rejected",
			message: "Message was not sent."
		};
		return {
			status: "invalid",
			message: "Check the highlighted fields. Nothing was sent.",
			fieldErrors
		};
	}
	const age = Date.now() - parsed.data.mountedAt;
	if (age < 1200 || age > 432e5) return {
		status: "rejected",
		message: "Please wait a moment and try again. Nothing was sent."
	};
	const { getRequestIP } = await import("./ssr.mjs").then((n) => n.a).then((n) => n.t);
	if (!allow(getRequestIP({ xForwardedFor: true }) ?? "local")) return {
		status: "rejected",
		message: "Too many attempts from this network. Wait a few minutes. Nothing was sent."
	};
	const inbox = configuredInbox();
	if (!inbox) return {
		status: "unconfigured",
		message: "No inbox is connected yet, so this message was not sent. Add an email address in the portfolio config."
	};
	const body = [
		parsed.data.message,
		"",
		`From: ${parsed.data.name}`,
		`Reply to: ${parsed.data.email}`
	].join("\n");
	const mailto = `mailto:${inbox}?subject=${encodeURIComponent(parsed.data.subject)}&body=${encodeURIComponent(body)}`;
	if (mailto.length > 1900) return {
		status: "invalid",
		message: "That note is too long to open as a draft. Shorten it and try again.",
		fieldErrors: { message: "Shorten the message so it fits in an email draft." }
	};
	return {
		status: "draft",
		mailto
	};
});
//#endregion
export { prepareContact_createServerFn_handler };
