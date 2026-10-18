import { o as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as SiteFrame } from "./router-Yx6Vyaiu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-CoEkrHLW.js
var import_jsx_runtime = require_jsx_runtime();
function MissingProject() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFrame, {
		current: "projects",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-[70dvh] max-w-xl flex-col justify-center px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-5xl text-fg",
					children: "That study isn't here."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "It may have been renamed or removed from the project list."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					hash: "projects",
					className: "mt-8 inline-flex min-h-11 items-center text-fg",
					children: "Back to projects"
				})
			]
		})
	});
}
//#endregion
export { MissingProject as notFoundComponent };
