import { o as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as projects, s as isHttpUrl } from "./portfolio-BdUMqOt7.mjs";
import { y as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { n as Route, r as SiteFrame } from "./router-Yx6Vyaiu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-DGnGrLU9.js
var import_jsx_runtime = require_jsx_runtime();
function CaseStudy() {
	const project = Route.useLoaderData();
	const index = projects.findIndex((item) => item.slug === project.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFrame, {
		current: "projects",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mx-auto max-w-screen-xl px-5 pt-32 pb-24 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					hash: "projects",
					className: "font-mono text-xs tracking-widest text-muted uppercase hover:text-fg",
					children: "All projects"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 font-mono text-xs tracking-widest text-accent uppercase",
					children: [
						String(index + 1).padStart(2, "0"),
						" / ",
						project.category
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 max-w-4xl text-5xl text-fg sm:text-6xl",
					children: project.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-lg text-muted",
					children: project.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-line px-3 py-1 font-mono text-xs text-muted",
							children: project.status
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-muted",
							children: project.year
						}),
						isHttpUrl(project.demoUrl) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: project.demoUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex min-h-11 items-center gap-1 text-sm text-fg",
							children: ["Live demo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "size-4",
								"aria-hidden": "true"
							})]
						}) : null,
						isHttpUrl(project.sourceUrl) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: project.sourceUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex min-h-11 items-center gap-1 text-sm text-fg",
							children: ["Source ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "size-4",
								"aria-hidden": "true"
							})]
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "mt-12 overflow-hidden rounded-3xl border border-line",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: project.image,
						alt: project.imageAlt,
						width: 1792,
						height: 1008,
						className: "aspect-video w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "px-4 py-3 font-mono text-xs text-muted",
						children: "Concept visual — not a screenshot of a shipped product."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid gap-12 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-10 lg:col-span-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl text-fg",
								children: "Overview"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted",
								children: project.overview
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl text-fg",
								children: "Why this exists"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted",
								children: project.motivation
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl text-fg",
								children: "Approach"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-4 space-y-3",
								children: project.approach.map((step, stepIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3 text-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-xs text-accent",
										children: ["0", stepIndex + 1]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step })]
								}, step))
							})] })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "space-y-8 lg:col-span-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-3xl border border-line bg-surface p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl text-fg",
								children: "Stack"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 flex flex-wrap gap-2",
								children: project.stack.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "rounded-full border border-line px-3 py-1 font-mono text-xs text-muted",
									children: item
								}, item))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl text-fg",
							children: "What the study is for"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-3",
							children: project.learnings.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-muted",
								children: item
							}, item))
						})] })]
					})]
				})
			]
		})
	});
}
//#endregion
export { CaseStudy as component };
