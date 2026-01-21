import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function FloatingCube({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial 
          color="#ffffff" 
          transparent 
          opacity={0.3}
          emissive="#ffffff"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

function FloatingFormula({ position, type }: { position: [number, number, number], type: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  const getGeometry = () => {
    switch (type) {
      case 'energy':
        return <octahedronGeometry args={[0.4, 0]} />;
      case 'wave':
        return <cylinderGeometry args={[0.2, 0.2, 0.8, 8]} />;
      case 'momentum':
        return <coneGeometry args={[0.3, 0.8, 6]} />;
      case 'force':
        return <tetrahedronGeometry args={[0.5, 0]} />;
      default:
        return <octahedronGeometry args={[0.4, 0]} />;
    }
  };

  const getColor = () => {
    switch (type) {
      case 'energy':
        return "#ffffff";
      case 'wave':
        return "#dddddd";
      case 'momentum':
        return "#eeeeee";
      case 'force':
        return "#cccccc";
      default:
        return "#ffffff";
    }
  };

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        {getGeometry()}
        <meshStandardMaterial 
          color={getColor()}
          transparent 
          opacity={0.3}
          emissive={getColor()}
          emissiveIntensity={0.1}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function PhysicsSymbol({ position, symbol }: { position: [number, number, number], symbol: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  const getSymbolGeometry = () => {
    switch (symbol) {
      case 'pi':
        return <torusGeometry args={[0.3, 0.1, 8, 16]} />;
      case 'sigma':
        return <dodecahedronGeometry args={[0.3, 0]} />;
      case 'lambda':
        return <icosahedronGeometry args={[0.3, 0]} />;
      case 'omega':
        return <sphereGeometry args={[0.3, 8, 6]} />;
      default:
        return <boxGeometry args={[0.3, 0.3, 0.3]} />;
    }
  };

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position}>
        {getSymbolGeometry()}
        <meshStandardMaterial 
          color="#ffffff" 
          transparent 
          opacity={0.3}
          emissive="#ffffff"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

function FloatingTorus({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.8} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[0.4, 0.1, 16, 32]} />
        <meshStandardMaterial 
          color="#dddddd" 
          transparent 
          opacity={0.3}
          emissive="#ffffff"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#cccccc" />
        
        <FloatingCube position={[-4, 3, -2]} />
        <FloatingCube position={[5, -1, -4]} />
        <FloatingCube position={[-3, -4, -3]} />
        
        <FloatingTorus position={[4, 2, -3]} />
        <FloatingTorus position={[-5, -2, -2]} />
        <FloatingTorus position={[2, -3, -5]} />
        
        <FloatingFormula position={[-2, 4, -4]} type="energy" />
        <FloatingFormula position={[3, -4, -2]} type="wave" />
        <FloatingFormula position={[-4, 1, -5]} type="momentum" />
        <FloatingFormula position={[1, 3, -3]} type="force" />
        <FloatingFormula position={[-1, -2, -4]} type="energy" />
        
        <PhysicsSymbol position={[6, 0, -3]} symbol="pi" />
        <PhysicsSymbol position={[-6, 2, -4]} symbol="sigma" />
        <PhysicsSymbol position={[0, 5, -5]} symbol="lambda" />
        <PhysicsSymbol position={[-2, -5, -3]} symbol="omega" />
        <PhysicsSymbol position={[4, -1, -5]} symbol="pi" />
        <PhysicsSymbol position={[-5, 0, -2]} symbol="sigma" />
      </Canvas>
    </div>
  );
}