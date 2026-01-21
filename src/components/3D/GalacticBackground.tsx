import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function BlackHole({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  const ringRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
    
    // Animate accretion disk rings
    ringRefs.current.forEach((ring, i) => {
      if (ring) {
        ring.rotation.z = state.clock.elapsedTime * (0.5 + i * 0.2);
        ring.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.1);
      }
    });
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Black hole core */}
      <Sphere args={[0.8, 32, 32]}>
        <meshBasicMaterial color="#000000" />
      </Sphere>
      
      {/* Event horizon glow */}
      <Sphere args={[1.2, 32, 32]}>
        <meshBasicMaterial 
          color="#ffffff" 
          transparent 
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>
      
      {/* Accretion disk rings */}
      {[1.5, 2, 2.5, 3].map((radius, i) => (
        <mesh 
          key={i}
          ref={(el) => {
            if (el) ringRefs.current[i] = el;
          }}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <torusGeometry args={[radius, 0.05, 8, 32]} />
          <meshBasicMaterial 
            color="#ffffff"
            transparent
            opacity={0.3 - i * 0.05}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
      
      {/* Gravitational lensing effect */}
      <Sphere args={[3.5, 32, 32]}>
        <meshBasicMaterial 
          color="#ffffff" 
          transparent 
          opacity={0.02}
          wireframe
        />
      </Sphere>
    </group>
  );
}

function Stars() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    
    for (let i = 0; i < 3000; i++) {
      // Create star field
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.01;
      
      // Twinkling effect
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += Math.sin(state.clock.elapsedTime * 2 + i) * 0.002;
        positions[i + 1] += Math.cos(state.clock.elapsedTime * 2 + i) * 0.002;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

function Nebula() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(5)].map((_, i) => (
        <Sphere 
          key={i} 
          args={[6 + i * 2, 16, 16]} 
          position={[
            Math.sin(i * 2) * 3,
            Math.cos(i * 3) * 2,
            -15 - i * 2
          ]}
        >
          <meshBasicMaterial 
            color="#ffffff"
            transparent
            opacity={0.02 - i * 0.002}
            wireframe
          />
        </Sphere>
      ))}
    </group>
  );
}

export default function GalacticBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" style={{ background: '#000000' }}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Stars />
        <Nebula />
        <BlackHole position={[0, 0, -8]} />
        <BlackHole position={[15, 8, -20]} />
        <BlackHole position={[-15, -8, -25]} />
      </Canvas>
    </div>
  );
}
