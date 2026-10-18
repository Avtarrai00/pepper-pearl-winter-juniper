import { a as __toESM, t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@react-three/fiber+[...].mjs";
import { U as isRedirect, b as useRouter, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as getServerFnById, n as createServerFn, r as TSS_SERVER_FUNCTION } from "./ssr.mjs";
import { a as explorations, c as isSafeHref, f as profile, i as contactCopy, l as journey, n as capabilityGroups, p as projects, r as configuredInbox, s as isHttpUrl, t as about, u as lab } from "./portfolio-BdUMqOt7.mjs";
import { n as fieldErrorsFromZod, t as contactSchema } from "./contact-CW1P6G7u.mjs";
import { _ as Boxes, a as MessagesSquare, c as GraduationCap, d as Database, f as Cpu, g as Braces, h as Cloud, i as Sparkles, l as Globe, m as Compass, n as Workflow, p as Container, s as Hammer, u as GitBranch, v as Bot, y as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { n as motion, r as AnimatePresence, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { a as Button, i as AnchorButton, o as buttonStyles, r as SiteFrame, s as cn } from "./router-Yx6Vyaiu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BQwNCMVb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var heroPointer = {
	x: 0,
	y: 0,
	scroll: 0
};
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
function Reveal({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("reveal", className),
		children
	});
}
function SectionHeading({ index, eyebrow, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-xs tracking-widest text-accent uppercase",
				children: [
					index,
					" / ",
					eyebrow
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-4xl text-fg sm:text-5xl",
				children: title
			}),
			lede ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-lg text-muted",
				children: lede
			}) : null
		]
	}) });
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "border-t border-line py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-screen-xl gap-14 px-5 md:px-8 lg:grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						index: "02",
						eyebrow: "About",
						title: about.heading
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 max-w-xl space-y-5 text-lg text-muted",
						children: about.paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }) }, paragraph))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "rounded-3xl border border-line bg-surface p-6",
						children: [
							profile.portraitSrc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: profile.portraitSrc,
								alt: "",
								className: "mb-6 aspect-[4/5] w-full rounded-2xl object-cover"
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs tracking-widest text-accent",
								children: "SIGNAL"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 font-display text-3xl text-fg",
								children: "A practice of making things legible."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted",
								children: "The same questions show up in every study: what is the system doing, and what should a person still decide?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-2",
								children: about.interests.map((interest) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3 text-sm text-fg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "size-1.5 rounded-full bg-accent",
										"aria-hidden": "true"
									}), interest]
								}, interest))
							})
						]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-3 lg:col-span-12",
					children: about.principles.map((principle) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "h-full rounded-3xl border border-line bg-bg-2 p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs tracking-widest text-accent",
								children: principle.index
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-2xl text-fg",
								children: principle.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted",
								children: principle.body
							})
						]
					}) }, principle.index))
				})
			]
		})
	});
}
function point(angle, radius) {
	const radians = angle * Math.PI / 180;
	return {
		x: 50 + Math.cos(radians) * radius,
		y: 50 + Math.sin(radians) * radius
	};
}
function AiLab() {
	const [selected, setSelected] = (0, import_react.useState)(lab.nodes[0]?.id ?? "");
	const reduce = useReducedMotion();
	const active = lab.nodes.find((node) => node.id === selected) ?? lab.nodes[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "lab",
		className: "border-t border-line py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-screen-xl px-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "05",
					eyebrow: "AI Lab",
					title: lab.kicker,
					lede: lab.lede
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "inline-flex items-center gap-2 font-mono text-xs tracking-widest text-muted uppercase",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "status-pip",
						"aria-hidden": "true"
					}), lab.modeLabel]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid items-start gap-8 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-square w-full overflow-hidden rounded-3xl border border-line bg-bg-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								viewBox: "0 0 100 100",
								className: "absolute inset-0 h-full w-full",
								"aria-hidden": "true",
								children: [
									lab.nodes.map((node) => {
										const spot = point(node.angle, 32);
										const on = node.id === active?.id;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
											x1: "50",
											y1: "50",
											x2: spot.x,
											y2: spot.y,
											stroke: "currentColor",
											strokeWidth: on ? .45 : .28,
											className: cn(on ? "text-accent" : "text-muted", reduce ? void 0 : "lab-flow")
										}, node.id);
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "50",
										cy: "50",
										r: "3.4",
										className: "fill-accent"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "50",
										cy: "50",
										r: "6.5",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "0.3",
										className: "text-accent"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-xs tracking-widest text-fg",
								children: "LAB"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 hidden lg:block",
								children: lab.nodes.map((node) => {
									const spot = point(node.angle, 32);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-pressed": node.id === active?.id,
										onClick: () => setSelected(node.id),
										className: cn("absolute max-w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border px-3 py-2 text-left text-xs", node.id === active?.id ? "border-accent bg-surface text-fg" : "border-line bg-bg/80 text-muted hover:text-fg"),
										style: {
											left: `${spot.x}%`,
											top: `${spot.y}%`
										},
										children: node.label
									}, node.id);
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2 lg:hidden",
						role: "group",
						"aria-label": "Lab topics",
						children: lab.nodes.map((node) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": node.id === active?.id,
							onClick: () => setSelected(node.id),
							className: cn("min-h-11 rounded-full border px-4 text-sm", node.id === active?.id ? "border-accent bg-surface text-fg" : "border-line text-muted"),
							children: node.label
						}, node.id))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						initial: false,
						children: active ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
							"aria-live": "polite",
							className: "rounded-3xl border border-line bg-surface p-6 md:p-8",
							initial: reduce ? false : {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: reduce ? void 0 : {
								opacity: 0,
								y: -8
							},
							transition: {
								duration: .22,
								ease: "easeOut"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs tracking-widest text-accent uppercase",
									children: "Selected node"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-3xl text-fg",
									children: active.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-muted",
									children: active.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "mt-6 space-y-3",
									children: active.workflow.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3 text-sm text-fg",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono text-xs text-accent",
											children: ["0", index + 1]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step })]
									}, step))
								})
							]
						}, active.id) : null
					})
				})]
			})]
		})
	});
}
var icons$1 = {
	llm: Sparkles,
	assistants: MessagesSquare,
	agents: Bot,
	prompts: Workflow,
	models: Cpu,
	python: Braces,
	js: Braces,
	react: Boxes,
	next: Globe,
	api: Workflow,
	git: GitBranch,
	docker: Container,
	local: Cpu,
	cloud: Cloud,
	data: Database
};
function Capabilities() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "capabilities",
		className: "border-t border-line py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-screen-xl px-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				index: "04",
				eyebrow: "Capabilities",
				title: "Tools are evolving. Curiosity stays constant.",
				lede: "A map of what is being used, explored, or learned. These are interests, not scores."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-10 lg:grid-cols-3",
				children: capabilityGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					"aria-labelledby": `cap-${group.id}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						id: `cap-${group.id}`,
						className: "text-2xl text-fg",
						children: group.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-2",
						children: group.items.map((item) => {
							const Icon = icons$1[item.id] ?? Sparkles;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group flex min-h-11 items-center justify-between gap-3 rounded-2xl border border-transparent px-3 py-2 transition-colors hover:border-line hover:bg-surface focus-within:border-line",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-3 text-sm text-fg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-4 text-muted transition-colors group-hover:text-accent",
										"aria-hidden": "true"
									}), item.name]
								}), item.focus ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs tracking-wide text-muted",
									children: item.focus
								}) : null]
							}) }, item.id);
						})
					})]
				}) }, group.id))
			})]
		})
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var prepareContact = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("9d26ec35668537ccd89bf1f6865663f39ff06b7690182c583a9a07929109083a"));
var fields = [
	{
		name: "name",
		label: "Name",
		type: "text",
		autoComplete: "name"
	},
	{
		name: "email",
		label: "Email",
		type: "email",
		autoComplete: "email"
	},
	{
		name: "subject",
		label: "Subject",
		type: "text",
		autoComplete: "off"
	}
];
function Contact() {
	const submit = useServerFn(prepareContact);
	const mountedAt = (0, import_react.useMemo)(() => Date.now(), []);
	const inbox = configuredInbox();
	const [values, setValues] = (0, import_react.useState)({
		name: "",
		email: "",
		subject: "",
		message: "",
		company: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [notice, setNotice] = (0, import_react.useState)("");
	const [mailto, setMailto] = (0, import_react.useState)("");
	const socials = [
		profile.socials.github ? {
			label: "GitHub",
			href: profile.socials.github
		} : null,
		profile.socials.linkedin ? {
			label: "LinkedIn",
			href: profile.socials.linkedin
		} : null,
		profile.socials.instagram ? {
			label: "Instagram",
			href: profile.socials.instagram
		} : null
	].filter((item) => Boolean(item && isHttpUrl(item.href)));
	async function onSubmit(event) {
		event.preventDefault();
		setNotice("");
		setMailto("");
		const payload = {
			...values,
			mountedAt
		};
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "contact-glow relative border-t border-line py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-screen-xl gap-14 px-5 md:px-8 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						index: "08",
						eyebrow: "Contact",
						title: contactCopy.heading,
						lede: contactCopy.lede
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-sm text-muted",
						children: contactCopy.note
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-8 space-y-3",
						children: [
							inbox ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "inline-flex min-h-11 items-center gap-2 text-fg hover:text-accent",
								href: `mailto:${inbox}`,
								children: [inbox, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "size-4",
									"aria-hidden": "true"
								})]
							}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "font-mono text-xs tracking-wide text-muted",
								children: "Email address not added yet."
							}),
							socials.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "inline-flex min-h-11 items-center gap-2 text-fg hover:text-accent",
								href: item.href,
								target: "_blank",
								rel: "noreferrer",
								children: [
									item.label,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
										className: "size-4",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: " (opens in a new tab)"
									})
								]
							}) }, item.label)),
							isSafeHref(profile.resumeUrl) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "inline-flex min-h-11 items-center text-fg hover:text-accent",
								href: profile.resumeUrl,
								children: "Résumé"
							}) }) : null
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "relative space-y-5 lg:col-span-7",
				onSubmit,
				noValidate: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hp-field",
						"aria-hidden": "true",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "company",
							children: "Company"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "company",
							name: "company",
							tabIndex: -1,
							autoComplete: "off",
							value: values.company,
							onChange: (event) => setValues((current) => ({
								...current,
								company: event.target.value
							}))
						})]
					}),
					fields.map((field) => {
						const error = errors[field.name];
						const id = `contact-${field.name}`;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: id,
								className: "mb-2 block text-sm text-fg",
								children: field.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id,
								name: field.name,
								type: field.type,
								autoComplete: field.autoComplete,
								value: values[field.name],
								"aria-invalid": error ? true : void 0,
								"aria-describedby": error ? `${id}-error` : void 0,
								onChange: (event) => setValues((current) => ({
									...current,
									[field.name]: event.target.value
								})),
								className: "min-h-12 w-full rounded-2xl border border-line bg-surface px-4 text-fg outline-none focus-visible:border-accent"
							}),
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								id: `${id}-error`,
								className: "mt-2 text-sm text-fg",
								role: "alert",
								children: error
							}) : null
						] }, field.name);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "contact-message",
							className: "mb-2 block text-sm text-fg",
							children: "Message"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "contact-message",
							name: "message",
							rows: 6,
							value: values.message,
							"aria-invalid": errors.message ? true : void 0,
							"aria-describedby": errors.message ? "contact-message-error" : void 0,
							onChange: (event) => setValues((current) => ({
								...current,
								message: event.target.value
							})),
							className: "w-full rounded-2xl border border-line bg-surface px-4 py-3 text-fg outline-none focus-visible:border-accent"
						}),
						errors.message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							id: "contact-message-error",
							className: "mt-2 text-sm text-fg",
							role: "alert",
							children: errors.message
						}) : null
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: status === "submitting",
						children: status === "submitting" ? "Preparing draft…" : "Prepare email draft"
					}),
					notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						role: "status",
						className: "text-sm text-fg",
						children: notice
					}) : null,
					mailto ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "text-sm text-accent underline-offset-4 hover:underline",
						href: mailto,
						children: "Open the draft again"
					}) }) : null
				]
			})]
		})
	});
}
var icons = {
	building: Hammer,
	exploring: Compass,
	learning: GraduationCap
};
function Explorations() {
	const cards = explorations.filter((card) => card.title && card.body);
	if (cards.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "now",
		className: "border-t border-line py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-screen-xl px-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				index: "07",
				eyebrow: "Now",
				title: "Current explorations.",
				lede: "What is being built, studied, and turned over. These notes are edited by hand — they are not a live status feed."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 md:grid-cols-3",
				children: cards.map((card) => {
					const Icon = icons[card.id] ?? Compass;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "relative h-full overflow-hidden rounded-3xl border border-line bg-surface p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute inset-x-0 top-0 h-px bg-accent",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-5 text-accent",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs tracking-widest text-muted uppercase",
									children: card.status
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 font-mono text-xs tracking-widest text-accent uppercase",
								children: card.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-2xl text-fg",
								children: card.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted",
								children: card.body
							})
						]
					}) }, card.id);
				})
			})]
		})
	});
}
var VisualBoundary = class extends import_react.Component {
	state = { failed: false };
	static getDerivedStateFromError() {
		return { failed: true };
	}
	render() {
		if (this.state.failed) return this.props.fallback;
		return this.props.children;
	}
};
function CssCore() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "css-core",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "css-ring css-ring-b" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "css-ring" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "css-gem" })
		]
	});
}
function Portrait() {
	const frame = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const node = frame.current;
		if (!node) return;
		let frameId = 0;
		const paint = () => {
			const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			const x = reduce ? 0 : heroPointer.x * 12;
			const y = reduce ? 0 : heroPointer.y * 10 - heroPointer.scroll * 16;
			node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
			frameId = requestAnimationFrame(paint);
		};
		frameId = requestAnimationFrame(paint);
		return () => cancelAnimationFrame(frameId);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: frame,
		"data-portrait": true,
		className: "will-change-transform",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
			className: "portrait-frame relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-surface",
			children: profile.portraitSrc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: profile.portraitSrc,
				alt: profile.portraitAlt,
				className: "h-full w-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-full flex-col justify-between p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-widest text-muted",
						children: "PORTRAIT"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-7xl text-fg",
						"aria-hidden": "true",
						children: "A"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "max-w-xs text-sm text-muted",
						children: "Photo not added yet. The frame is ready for a portrait."
					})
				]
			})
		})
	});
}
function HeroStage() {
	const [CanvasView, setCanvasView] = (0, import_react.useState)(null);
	const [reduced, setReduced] = (0, import_react.useState)(false);
	const [failed, setFailed] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
		const apply = () => setReduced(motion.matches);
		apply();
		motion.addEventListener("change", apply);
		const saveData = navigator.connection?.saveData;
		const memory = navigator.deviceMemory;
		const lowPower = Boolean(saveData || memory !== void 0 && memory > 0 && memory <= 2);
		let cancelled = false;
		if (!lowPower) import("./hero-canvas-BHsmeJHV.mjs").then((mod) => {
			if (cancelled) return;
			if (!mod.canUseWebgl()) {
				setFailed(true);
				return;
			}
			setCanvasView(() => mod.HeroCanvas);
		}).catch(() => {
			if (!cancelled) setFailed(true);
		});
		else setFailed(true);
		const onScroll = () => {
			heroPointer.scroll = Math.min(window.scrollY / 700, 1);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			cancelled = true;
			motion.removeEventListener("change", apply);
			window.removeEventListener("scroll", onScroll);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-[26rem] sm:h-[30rem] lg:h-[40rem]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [failed || !CanvasView ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CssCore, {}) : null, CanvasView && !failed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualBoundary, {
					fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CssCore, {}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CanvasView, { reduced })
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "absolute top-2 left-0 font-mono text-xs tracking-widest text-muted",
				children: ["CORE · 01", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 block text-fg/80",
					children: "Computational object"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 bottom-0 mx-auto w-[15.5rem] sm:w-[17.5rem] lg:inset-x-auto lg:right-0 lg:bottom-6 lg:w-72",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portrait, {})
			})
		]
	});
}
var meta = [
	profile.location ? `Based in ${profile.location}.` : "",
	profile.interestsLine,
	profile.statusLine,
	profile.availability
].filter(Boolean);
function Hero() {
	const sectionRef = (0, import_react.useRef)(null);
	const onPointerMove = (event) => {
		const bounds = event.currentTarget.getBoundingClientRect();
		heroPointer.x = ((event.clientX - bounds.left) / bounds.width - .5) * 2;
		heroPointer.y = ((event.clientY - bounds.top) / bounds.height - .5) * 2;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		ref: sectionRef,
		className: "relative overflow-hidden pt-28 pb-16",
		onPointerMove,
		onPointerLeave: () => {
			heroPointer.x = 0;
			heroPointer.y = 0;
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hero-grid pointer-events-none absolute inset-0",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid max-w-screen-xl gap-8 px-5 md:px-8 lg:grid-cols-12 lg:items-center lg:gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 lg:col-start-1 lg:row-start-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise font-mono text-xs tracking-widest text-muted uppercase",
						children: profile.eyebrow
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "rise rise-late mt-5 max-w-3xl text-4xl text-fg sm:text-5xl xl:text-6xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block",
							children: profile.headlineLead
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "headline-accent mt-1 block",
							children: profile.headlineAccent
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroStage, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 lg:col-start-1 lg:row-start-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rise rise-later max-w-xl text-lg text-muted",
							children: profile.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rise rise-last mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#projects",
								className: buttonStyles(),
								children: "Explore My Projects"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: buttonStyles({ tone: "quiet" }),
								children: "Let's Connect"
							})]
						}),
						meta.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 space-y-2",
							children: meta.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "font-mono text-xs tracking-wide text-muted",
								children: line
							}, line))
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#about",
							className: "mt-10 inline-flex items-center gap-3 text-xs tracking-widest text-muted uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "scroll-line",
								"aria-hidden": "true"
							}), "Scroll"]
						})
					]
				})
			]
		})]
	});
}
function Journey() {
	const entries = journey.filter((entry) => entry.title && entry.body);
	if (entries.length === 0 && !isSafeHref(profile.resumeUrl)) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "journey",
		className: "border-t border-line py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-screen-xl px-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "06",
					eyebrow: "Journey",
					title: "Always building. Always learning.",
					lede: "A short record of the work in motion. Empty chapters stay hidden."
				}), isSafeHref(profile.resumeUrl) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnchorButton, {
					href: profile.resumeUrl,
					tone: "quiet",
					children: "Résumé"
				}) : null]
			}), entries.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-14 max-w-3xl border-l border-line",
				children: entries.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "reveal relative pb-12 pl-8 last:pb-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-1.5 -left-1 size-2 rounded-full bg-accent",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-xs tracking-widest text-accent uppercase",
							children: [
								entry.date,
								" · ",
								entry.kind
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-2xl text-fg",
							children: entry.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted",
							children: entry.body
						})
					]
				}, entry.id))
			}) : null]
		})
	});
}
function External({ href, children }) {
	if (!isHttpUrl(href)) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		className: "inline-flex min-h-11 items-center gap-1 text-sm text-muted hover:text-fg",
		children: [
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
				className: "size-4",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: " (opens in a new tab)"
			})
		]
	});
}
function ProjectBody({ project }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-xs tracking-widest text-accent uppercase",
			children: project.category
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mt-3 text-3xl text-fg sm:text-4xl",
			children: project.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-muted",
			children: project.summary
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-5 flex flex-wrap gap-2",
			children: project.stack.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "rounded-full border border-line px-3 py-1 font-mono text-xs text-muted",
				children: item
			}, item))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-6 inline-flex items-center gap-2 text-sm text-fg",
			children: ["View case study", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
				className: "arrow-nudge size-4",
				"aria-hidden": "true"
			})]
		})
	] });
}
function Media({ project }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "project-frame overflow-hidden rounded-3xl border border-line bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "project-media aspect-video",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: project.image,
				alt: project.imageAlt,
				width: 1792,
				height: 1008,
				loading: "lazy",
				className: "h-full w-full object-cover"
			})
		})
	});
}
function Featured({ project, flip }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "grid items-center gap-8 lg:grid-cols-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/work/$slug",
			params: { slug: project.slug },
			className: cn("group block lg:col-span-7", flip && "lg:col-start-6"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, { project })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("lg:col-span-5", flip && "lg:col-start-1 lg:row-start-1"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs text-muted",
					children: project.status
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/work/$slug",
					params: { slug: project.slug },
					className: "group mt-3 block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectBody, { project })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(External, {
						href: project.demoUrl,
						children: "Live demo"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(External, {
						href: project.sourceUrl,
						children: "Source"
					})]
				})
			]
		})]
	}) });
}
function Supporting({ project }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex h-full flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/work/$slug",
			params: { slug: project.slug },
			className: "group block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, { project }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs text-muted",
					children: project.status
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectBody, { project })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex flex-wrap gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(External, {
				href: project.demoUrl,
				children: "Live demo"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(External, {
				href: project.sourceUrl,
				children: "Source"
			})]
		})]
	}) });
}
function Projects() {
	const featured = projects.filter((project) => project.featured);
	const supporting = projects.filter((project) => !project.featured);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "border-t border-line py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-screen-xl px-5 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "03",
					eyebrow: "Selected projects",
					title: "Studies in intelligence, software, and interface.",
					lede: "These are editable concept studies. A case study opens only when there is something to read. Live and source links appear only when a real URL is set."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 space-y-20",
					children: featured.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Featured, {
						project,
						flip: index % 2 === 1
					}, project.slug))
				}),
				supporting.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 grid gap-12 lg:grid-cols-2",
					children: supporting.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Supporting, { project }, project.slug))
				}) : null
			]
		})
	});
}
var routes_exports = /* @__PURE__ */ __exportAll({ component: () => Home });
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Capabilities, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiLab, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Journey, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Explorations, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
	] });
}
//#endregion
export { heroPointer as n, routes_exports as t };
