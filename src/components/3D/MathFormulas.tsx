import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';

const physicsFormulas = [
  { formula: 'E = mc²', description: 'Energy-Mass Equivalence', color: '#ffffff' },
  { formula: 'F = ma', description: 'Newton\'s Second Law', color: '#cccccc' },
  { formula: 'v = fλ', description: 'Wave Equation', color: '#ffffff' },
  { formula: 'P = mv', description: 'Momentum', color: '#dddddd' },
  { formula: 'W = F·d', description: 'Work', color: '#ffffff' },
  { formula: 'τ = r × F', description: 'Torque', color: '#cccccc' },
  { formula: 'ω = 2πf', description: 'Angular Frequency', color: '#ffffff' },
  { formula: 'a = v²/r', description: 'Centripetal Acceleration', color: '#dddddd' },
  { formula: 'I = ∫ ρr²dV', description: 'Moment of Inertia', color: '#ffffff' },
  { formula: 'H = -∑ pᵢ log pᵢ', description: 'Shannon Entropy', color: '#cccccc' },
  { formula: '∇²φ = 0', description: 'Laplace Equation', color: '#ffffff' },
  { formula: '∂u/∂t = α∇²u', description: 'Heat Equation', color: '#dddddd' },
  { formula: '∮ E⃗·dA⃗ = Q/ε₀', description: 'Gauss\'s Law', color: '#ffffff' },
  { formula: '∇ × B⃗ = μ₀J⃗', description: 'Ampère\'s Law', color: '#cccccc' },
  { formula: 'L = T - V', description: 'Lagrangian', color: '#ffffff' },
  { formula: 'Ψ = Ae^(ikx)', description: 'Wave Function', color: '#dddddd' },
  { formula: 'σ = √⟨x²⟩ - ⟨x⟩²', description: 'Standard Deviation', color: '#ffffff' },
  { formula: 'η = W/Q_h', description: 'Efficiency', color: '#cccccc' },
  { formula: 'K = ½mv²', description: 'Kinetic Energy', color: '#ffffff' },
  { formula: 'U = mgh', description: 'Potential Energy', color: '#dddddd' },
];

function FloatingFormula({ 
  formula, 
  description, 
  color, 
  position 
}: { 
  formula: string;
  description: string;
  color: string;
  position: [number, number, number];
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={position}>
        <Html
          center
          sprite
          distanceFactor={15}
          transform
          style={{
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          <div 
            className="formula-container"
            style={{
              color: color,
              textShadow: `0 0 10px ${color}`,
              fontFamily: 'Orbitron, monospace',
              fontSize: '18px',
              fontWeight: 'bold',
              background: `linear-gradient(135deg, ${color}15, ${color}05)`,
              border: `1px solid ${color}40`,
              borderRadius: '8px',
              padding: '8px 12px',
              backdropFilter: 'blur(10px)',
              whiteSpace: 'nowrap',
              transform: 'scale(0.8)',
            }}
          >
            <div style={{ fontSize: '16px', marginBottom: '2px' }}>
              {formula}
            </div>
            <div style={{ 
              fontSize: '10px', 
              opacity: 0.7,
              color: '#ffffff80',
              textShadow: 'none'
            }}>
              {description}
            </div>
          </div>
        </Html>
      </group>
    </Float>
  );
}

function MathSymbol({ 
  symbol, 
  position, 
  color 
}: { 
  symbol: string;
  position: [number, number, number];
  color: string;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.2;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={groupRef} position={position}>
        <Html
          center
          sprite
          distanceFactor={20}
          transform
          style={{
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          <div 
            style={{
              color: color,
              textShadow: `0 0 15px ${color}`,
              fontFamily: 'Orbitron, monospace',
              fontSize: '32px',
              fontWeight: '900',
              opacity: 0.6,
              textAlign: 'center',
            }}
          >
            {symbol}
          </div>
        </Html>
      </group>
    </Float>
  );
}

const mathSymbols = ['∑', '∫', '∂', '∇', '∞', 'π', 'λ', 'μ', 'σ', 'φ', 'ψ', 'ω', 'α', 'β', 'γ', 'δ', 'ε', 'θ'];

export default function MathFormulas() {
  // Generate positions for formulas - positioned to the sides
  const formulaPositions = physicsFormulas.map((_, index) => {
    const side = index % 2 === 0 ? 1 : -1; // Alternate left and right sides
    const verticalSpread = (index / physicsFormulas.length) * 20 - 10; // Spread vertically
    const horizontalOffset = 12 + Math.sin(index * 0.5) * 3; // Distance from center
    const depth = Math.sin(index * 0.3) * 5 - 8; // Varying depth
    
    return [
      side * horizontalOffset, // Left or right side
      verticalSpread,          // Vertical distribution
      depth                    // Depth variation
    ] as [number, number, number];
  });

  // Generate positions for math symbols - positioned around edges
  const symbolPositions = mathSymbols.map((_, index) => {
    const side = Math.sin(index) > 0 ? 1 : -1;
    const verticalPos = (index / mathSymbols.length) * 16 - 8;
    const horizontalOffset = 15 + Math.cos(index * 0.4) * 2;
    const depth = Math.cos(index * 0.6) * 6 - 12;
    
    return [
      side * horizontalOffset,
      verticalPos,
      depth
    ] as [number, number, number];
  });

  const symbolColors = ['#ffffff', '#cccccc', '#eeeeee', '#dddddd', '#ffffff'];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.3} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.2} color="#cccccc" />
        
        {/* Render Physics Formulas */}
        {physicsFormulas.map((item, index) => (
          <FloatingFormula
            key={`formula-${index}`}
            formula={item.formula}
            description={item.description}
            color={item.color}
            position={formulaPositions[index]}
          />
        ))}
        
        {/* Render Math Symbols */}
        {mathSymbols.map((symbol, index) => (
          <MathSymbol
            key={`symbol-${index}`}
            symbol={symbol}
            position={symbolPositions[index]}
            color={symbolColors[index % symbolColors.length]}
          />
        ))}
      </Canvas>
    </div>
  );
}