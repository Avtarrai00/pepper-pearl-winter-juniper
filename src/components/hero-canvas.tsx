import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { heroPointer } from "@/components/hero-pointer";

const shellVertex = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vWorld;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    vNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const shellFragment = /* glsl */ `
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

function pointsFor(count: number) {
  const array = new Float32Array(count * 3);
  let seed = 19;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
  for (let index = 0; index < count; index += 1) {
    const radius = 1.85 + random() * 1.05;
    const theta = random() * Math.PI * 2;
    const phi = Math.acos(2 * random() - 1);
    array[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
    array[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.62;
    array[index * 3 + 2] = radius * Math.cos(phi);
  }
  return array;
}

function Core({ reduced }: { reduced: boolean }) {
  const tilt = useRef<THREE.Group>(null);
  const spin = useRef<THREE.Group>(null);
  const shell = useRef<THREE.ShaderMaterial>(null);
  const positions = useMemo(() => pointsFor(reduced ? 48 : 110), [reduced]);
  const uniforms = useMemo(
    () => ({
      uColor: { value: new THREE.Color("#c4b5fd") },
      uCam: { value: new THREE.Vector3() },
    }),
    [],
  );

  useFrame((state, delta) => {
    const step = Math.min(delta, 0.05);
    if (shell.current) shell.current.uniforms.uCam.value.copy(state.camera.position);
    if (tilt.current) {
      const targetX = heroPointer.y * 0.22 - heroPointer.scroll * 0.18;
      const targetY = heroPointer.x * 0.32;
      tilt.current.rotation.x += (targetX - tilt.current.rotation.x) * 0.05;
      tilt.current.rotation.y += (targetY - tilt.current.rotation.y) * 0.05;
    }
    if (spin.current && !reduced) {
      spin.current.rotation.y += step * 0.16;
      spin.current.position.y = Math.sin(state.clock.elapsedTime * 0.65) * 0.08;
    }
  });

  const body = (
    <group ref={spin}>
      <mesh>
        <icosahedronGeometry args={[1.18, 1]} />
        <shaderMaterial
          ref={shell}
          transparent
          depthWrite={false}
          side={THREE.DoubleSide}
          toneMapped={false}
          uniforms={uniforms}
          vertexShader={shellVertex}
          fragmentShader={shellFragment}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.72, 1]} />
        <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.28} />
      </mesh>
      <mesh>
        <octahedronGeometry args={[0.38, 0]} />
        <meshStandardMaterial
          color="#1a1028"
          emissive="#8b5cf6"
          emissiveIntensity={0.9}
          metalness={0.4}
          roughness={0.22}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2.35, 0.2, 0]}>
        <torusGeometry args={[1.62, 0.012, 16, 160]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.7} />
      </mesh>
      <mesh rotation={[1.05, 0.5, 0.35]}>
        <torusGeometry args={[1.95, 0.008, 12, 160]} />
        <meshBasicMaterial color="#60a5fa" transparent opacity={0.45} />
      </mesh>
      <mesh rotation={[0.4, 0.8, 1.1]}>
        <torusGeometry args={[2.22, 0.005, 12, 140]} />
        <meshBasicMaterial color="#f5f5fa" transparent opacity={0.18} />
      </mesh>
      {Array.from({ length: 5 }, (_, index) => {
        const angle = (index / 5) * Math.PI * 2;
        return (
          <mesh key={index} position={[Math.cos(angle) * 1.95, Math.sin(angle) * 0.45, Math.sin(angle) * 1.15]}>
            <sphereGeometry args={[0.035, 16, 16]} />
            <meshBasicMaterial color={index % 2 === 0 ? "#c4b5fd" : "#93c5fd"} toneMapped={false} />
          </mesh>
        );
      })}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#ddd6fe"
          size={0.028}
          sizeAttenuation
          transparent
          opacity={0.75}
          depthWrite={false}
          toneMapped={false}
        />
      </points>
    </group>
  );

  return (
    <group ref={tilt} position={[-0.15, 0, 0]}>
      {body}
    </group>
  );
}

export function HeroCanvas({ reduced }: { reduced: boolean }) {
  return (
    <Canvas
      className="h-full w-full"
      dpr={[1, 1.4]}
      frameloop={reduced ? "demand" : "always"}
      camera={{ position: [0, 0.15, 5.5], fov: 34 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      <ambientLight intensity={0.35} />
      <pointLight position={[3.2, 1.8, 3.4]} intensity={18} color="#8b5cf6" />
      <pointLight position={[-3.2, -1.2, 2.2]} intensity={8} color="#60a5fa" />
      <Core reduced={reduced} />
    </Canvas>
  );
}

export function canUseWebgl() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}
