import { motion } from "framer-motion";
import { Atom, Binary, Cpu, Zap, Waves, CircuitBoard, Orbit, Layers } from "lucide-react";

const scientificElements = [
  { formula: 'E = mc²', x: '5%', y: '15%', delay: 0 },
  { formula: 'F = ma', x: '85%', y: '20%', delay: 0.2 },
  { formula: 'v = fλ', x: '10%', y: '75%', delay: 0.4 },
  { formula: 'τ = Iα', x: '90%', y: '65%', delay: 0.6 },
  { formula: '∇·E = ρ/ε₀', x: '7%', y: '45%', delay: 0.8 },
  { formula: 'ΔS ≥ 0', x: '92%', y: '40%', delay: 1.0 },
  { formula: 'H = -Σp log p', x: '12%', y: '88%', delay: 1.2 },
  { formula: 'L = T - V', x: '88%', y: '82%', delay: 1.4 },
];

const iconElements = [
  { Icon: Atom, x: '15%', y: '25%', delay: 0.3, size: 40 },
  { Icon: Binary, x: '82%', y: '30%', delay: 0.5, size: 35 },
  { Icon: Cpu, x: '8%', y: '60%', delay: 0.7, size: 38 },
  { Icon: Zap, x: '93%', y: '55%', delay: 0.9, size: 36 },
  { Icon: Waves, x: '18%', y: '92%', delay: 1.1, size: 34 },
  { Icon: CircuitBoard, x: '85%', y: '88%', delay: 1.3, size: 42 },
  { Icon: Orbit, x: '6%', y: '35%', delay: 1.5, size: 40 },
  { Icon: Layers, x: '94%', y: '12%', delay: 1.7, size: 37 },
];

const symbols = [
  { text: '∫', x: '20%', y: '18%', delay: 0.4 },
  { text: '∂', x: '78%', y: '48%', delay: 0.6 },
  { text: '∑', x: '25%', y: '68%', delay: 0.8 },
  { text: '∇', x: '80%', y: '75%', delay: 1.0 },
  { text: 'π', x: '13%', y: '52%', delay: 1.2 },
  { text: 'ω', x: '87%', y: '95%', delay: 1.4 },
];

export default function ScientificMontage() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Formulas */}
      {scientificElements.map((element, index) => (
        <motion.div
          key={`formula-${index}`}
          className="absolute font-mono text-galaxy-purple/30"
          style={{
            left: element.x,
            top: element.y,
            fontSize: '14px',
            fontWeight: 'bold',
            textShadow: '0 0 10px hsl(var(--galaxy-purple) / 0.4)',
          }}
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: 1,
            rotate: 0,
          }}
          transition={{
            opacity: {
              duration: 4,
              repeat: Infinity,
              delay: element.delay,
            },
            scale: {
              duration: 1,
              delay: element.delay,
            },
            rotate: {
              duration: 1,
              delay: element.delay,
            }
          }}
        >
          {element.formula}
        </motion.div>
      ))}

      {/* Icons */}
      {iconElements.map((element, index) => {
        const Icon = element.Icon;
        return (
          <motion.div
            key={`icon-${index}`}
            className="absolute text-galaxy-purple/25"
            style={{
              left: element.x,
              top: element.y,
            }}
            initial={{ opacity: 0, scale: 0, rotate: 45 }}
            animate={{ 
              opacity: [0.2, 0.35, 0.2],
              scale: 1,
              rotate: 0,
            }}
            transition={{
              opacity: {
                duration: 5,
                repeat: Infinity,
                delay: element.delay,
              },
              scale: {
                duration: 1.2,
                delay: element.delay,
              },
              rotate: {
                duration: 1.2,
                delay: element.delay,
              }
            }}
          >
            <Icon size={element.size} strokeWidth={1.5} />
          </motion.div>
        );
      })}

      {/* Math Symbols */}
      {symbols.map((symbol, index) => (
        <motion.div
          key={`symbol-${index}`}
          className="absolute font-serif text-galaxy-purple/20"
          style={{
            left: symbol.x,
            top: symbol.y,
            fontSize: '48px',
            fontWeight: '300',
            textShadow: '0 0 20px hsl(var(--galaxy-purple) / 0.3)',
          }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ 
            opacity: [0.15, 0.25, 0.15],
            y: 0,
          }}
          transition={{
            opacity: {
              duration: 6,
              repeat: Infinity,
              delay: symbol.delay,
            },
            y: {
              duration: 1.5,
              delay: symbol.delay,
            }
          }}
        >
          {symbol.text}
        </motion.div>
      ))}

      {/* Circuit-like connecting lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <motion.line
          x1="15%" y1="25%" x2="20%" y2="18%"
          stroke="hsl(270, 80%, 60%)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 2 }}
        />
        <motion.line
          x1="82%" y1="30%" x2="78%" y2="48%"
          stroke="hsl(270, 80%, 60%)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
        />
        <motion.line
          x1="8%" y1="60%" x2="13%" y2="52%"
          stroke="hsl(270, 80%, 60%)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 3 }}
        />
        <motion.line
          x1="85%" y1="88%" x2="87%" y2="95%"
          stroke="hsl(270, 80%, 60%)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 3.5 }}
        />
      </svg>
    </div>
  );
}
