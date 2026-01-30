
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function AntigravityInner({
  count = 320,
  magnetRadius = 12,
  ringRadius = 7,
  waveSpeed = 0.4,
  waveAmplitude = 1,
  particleSize = 1.6,
  lerpSpeed = 0.1,
  pulseSpeed = 4,
  color = "#22d3ee",
}) {
  const meshRef = useRef();
  const { viewport } = useThree();
  const dummy = useRef(new THREE.Object3D());

  const mouse = useRef({ x: 0, y: 0 });
  const particles = useRef([]);

  /* ✅ Create particles ONCE (no Math.random warning) */
  useEffect(() => {
    const w = viewport.width || 100;
    const h = viewport.height || 100;

    particles.current = Array.from({ length: count }, () => ({
      t: Math.random() * 100,
      speed: 0.01 + Math.random() * 0.02,
      ox: (Math.random() - 0.5) * w,
      oy: (Math.random() - 0.5) * h,
      oz: (Math.random() - 0.5) * 20,
      x: 0,
      y: 0,
      z: 0,
      offset: (Math.random() - 0.5) * 2,
    }));
  }, [count, viewport.width, viewport.height]);

  useFrame(({ pointer, clock }) => {
    if (!meshRef.current) return;

    mouse.current.x +=
      (pointer.x * viewport.width * 0.5 - mouse.current.x) * 0.08;
    mouse.current.y +=
      (pointer.y * viewport.height * 0.5 - mouse.current.y) * 0.08;

    particles.current.forEach((p, i) => {
      p.t += p.speed;

      let x = p.ox;
      let y = p.oy;
      let z = p.oz;

      const dx = x - mouse.current.x;
      const dy = y - mouse.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy) + 0.001;
      const force = Math.max(0, 1 - dist / magnetRadius);

      if (force > 0) {
        const angle = Math.atan2(dy, dx);
        const r = ringRadius + Math.sin(p.t * waveSpeed) * waveAmplitude;

        x = mouse.current.x + Math.cos(angle) * r;
        y = mouse.current.y + Math.sin(angle) * r;
        z += Math.sin(p.t * pulseSpeed) * 2;
      }

      p.x += (x - p.x) * lerpSpeed;
      p.y += (y - p.y) * lerpSpeed;
      p.z += (z - p.z) * lerpSpeed;

      dummy.current.position.set(p.x, p.y, p.z);
      dummy.current.lookAt(mouse.current.x, mouse.current.y, p.z);
      dummy.current.scale.setScalar(
        particleSize * (0.8 + Math.sin(p.t * pulseSpeed) * 0.2)
      );
      dummy.current.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.current.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <capsuleGeometry args={[0.1, 0.4, 4, 8]} />
      <meshBasicMaterial color={color} />
    </instancedMesh>
  );
}

export default function Antigravity(props) {
  return (
    <Canvas camera={{ position: [0, 0, 50], fov: 35 }}>
      <AntigravityInner {...props} />
    </Canvas>
  );
}