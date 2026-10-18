import { a as __toESM } from "./rolldown-runtime-D7D4PA-g.mjs";
import { i as Vector3, n as useFrame, o as require_jsx_runtime, r as Color, s as require_react, t as Canvas } from "../_libs/@react-three/fiber+[...].mjs";
import { n as heroPointer } from "./routes-BQwNCMVb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hero-canvas-BHsmeJHV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var shellVertex = `
  varying vec3 vNormal;
  varying vec3 vWorld;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    vNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;
var shellFragment = `
  uniform vec3 uColor;
  uniform vec3 uCam;
  varying vec3 vNormal;
  varying vec3 vWorld;
  void main() {
    vec3 viewDir = normalize(uCam - vWorld);
    float fresnel = pow(1.0 - clamp(abs(dot(normalize(vNormal), viewDir)), 0.0, 1.0), 2.15);
    gl_FragColor = vec4(uColor, 0.05 + fresnel * 0.78);
  }
`;
function pointsFor(count) {
	const array = new Float32Array(count * 3);
	let seed = 19;
	const random = () => {
		seed = seed * 16807 % 2147483647;
		return (seed - 1) / 2147483646;
	};
	for (let index = 0; index < count; index += 1) {
		const radius = 1.85 + random() * 1.05;
		const theta = random() * Math.PI * 2;
		const phi = Math.acos(2 * random() - 1);
		array[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
		array[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * .62;
		array[index * 3 + 2] = radius * Math.cos(phi);
	}
	return array;
}
function Core({ reduced }) {
	const tilt = (0, import_react.useRef)(null);
	const spin = (0, import_react.useRef)(null);
	const shell = (0, import_react.useRef)(null);
	const positions = (0, import_react.useMemo)(() => pointsFor(reduced ? 48 : 110), [reduced]);
	const uniforms = (0, import_react.useMemo)(() => ({
		uColor: { value: new Color("#c4b5fd") },
		uCam: { value: new Vector3() }
	}), []);
	useFrame((state, delta) => {
		const step = Math.min(delta, .05);
		if (shell.current) shell.current.uniforms.uCam.value.copy(state.camera.position);
		if (tilt.current) {
			const targetX = heroPointer.y * .22 - heroPointer.scroll * .18;
			const targetY = heroPointer.x * .32;
			tilt.current.rotation.x += (targetX - tilt.current.rotation.x) * .05;
			tilt.current.rotation.y += (targetY - tilt.current.rotation.y) * .05;
		}
		if (spin.current && !reduced) {
			spin.current.rotation.y += step * .16;
			spin.current.position.y = Math.sin(state.clock.elapsedTime * .65) * .08;
		}
	});
	const body = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: spin,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("icosahedronGeometry", { args: [1.18, 1] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("shaderMaterial", {
				ref: shell,
				transparent: true,
				depthWrite: false,
				side: 2,
				toneMapped: false,
				uniforms,
				vertexShader: shellVertex,
				fragmentShader: shellFragment
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("icosahedronGeometry", { args: [.72, 1] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: "#8b5cf6",
				wireframe: true,
				transparent: true,
				opacity: .28
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("octahedronGeometry", { args: [.38, 0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#1a1028",
				emissive: "#8b5cf6",
				emissiveIntensity: .9,
				metalness: .4,
				roughness: .22
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					Math.PI / 2.35,
					.2,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					1.62,
					.012,
					16,
					160
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: "#8b5cf6",
					transparent: true,
					opacity: .7
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					1.05,
					.5,
					.35
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					1.95,
					.008,
					12,
					160
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: "#60a5fa",
					transparent: true,
					opacity: .45
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					.4,
					.8,
					1.1
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					2.22,
					.005,
					12,
					140
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: "#f5f5fa",
					transparent: true,
					opacity: .18
				})]
			}),
			Array.from({ length: 5 }, (_, index) => {
				const angle = index / 5 * Math.PI * 2;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						Math.cos(angle) * 1.95,
						Math.sin(angle) * .45,
						Math.sin(angle) * 1.15
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						.035,
						16,
						16
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
						color: index % 2 === 0 ? "#c4b5fd" : "#93c5fd",
						toneMapped: false
					})]
				}, index);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("points", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("bufferGeometry", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("bufferAttribute", {
				attach: "attributes-position",
				args: [positions, 3]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointsMaterial", {
				color: "#ddd6fe",
				size: .028,
				sizeAttenuation: true,
				transparent: true,
				opacity: .75,
				depthWrite: false,
				toneMapped: false
			})] })
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		ref: tilt,
		position: [
			-.15,
			0,
			0
		],
		children: body
	});
}
function HeroCanvas({ reduced }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
		className: "h-full w-full",
		dpr: [1, 1.4],
		frameloop: reduced ? "demand" : "always",
		camera: {
			position: [
				0,
				.15,
				5.5
			],
			fov: 34
		},
		gl: {
			alpha: true,
			antialias: true,
			powerPreference: "high-performance"
		},
		onCreated: ({ gl }) => {
			gl.setClearColor(0, 0);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .35 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
				position: [
					3.2,
					1.8,
					3.4
				],
				intensity: 18,
				color: "#8b5cf6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
				position: [
					-3.2,
					-1.2,
					2.2
				],
				intensity: 8,
				color: "#60a5fa"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Core, { reduced })
		]
	});
}
function canUseWebgl() {
	try {
		const canvas = document.createElement("canvas");
		return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
	} catch {
		return false;
	}
}
//#endregion
export { HeroCanvas, canUseWebgl };
