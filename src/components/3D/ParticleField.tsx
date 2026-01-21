import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    
    for (let i = 0; i < 5000; i++) {
      // Create formula-like patterns
      const t = i / 5000;
      const radius = 15;
      
      if (i % 3 === 0) {
        // Spiral pattern (like DNA or wave functions)
        positions[i * 3] = radius * Math.cos(t * Math.PI * 8) * (0.5 + Math.random() * 0.5);
        positions[i * 3 + 1] = (t - 0.5) * 20 + (Math.random() - 0.5) * 2;
        positions[i * 3 + 2] = radius * Math.sin(t * Math.PI * 8) * (0.5 + Math.random() * 0.5);
      } else if (i % 3 === 1) {
        // Grid pattern (like mathematical coordinates)
        positions[i * 3] = (Math.random() - 0.5) * 25;
        positions[i * 3 + 1] = Math.floor((Math.random() - 0.5) * 10) * 2;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
      } else {
        // Random scatter (like particle physics)
        positions[i * 3] = (Math.random() - 0.5) * 30;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
      }
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      
      // Animate individual particles for physics-like motion
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(state.clock.elapsedTime + i) * 0.001;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

export default function ParticleField() {
  return (
    <div className="particle-container">
      <Canvas
        camera={{ position: [0, 0, 5] }}
        style={{ background: 'transparent' }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}