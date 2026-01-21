import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleField from "@/components/3D/ParticleField";
import FloatingElements from "@/components/3D/FloatingElements";
import ScientificMontage from "@/components/3D/ScientificMontage";

export default function Home() {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      <ParticleField />
      <FloatingElements />
      <ScientificMontage />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-galaxy opacity-10"></div>
        
        <div className="container mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              className="font-futuristic text-4xl md:text-6xl lg:text-8xl font-bold text-galaxy-primary glow-text"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              HARIRAJ N G
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-galaxy-secondary">
                Mechatronics Engineer
              </h2>
              <p className="text-lg md:text-xl text-galaxy-blue font-light">
                Robotics & AI Enthusiast | Innovator
              </p>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Passionate about pushing the boundaries of technology through cutting-edge robotics, 
                automation, and artificial intelligence solutions
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <Button 
                variant="hero" 
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore My Work
              </Button>
              <a
                href="/resume/HARIRAJ-RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
              >
                Download Resume
              </a>

            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center space-x-6 pt-8"
            >
              <Button variant="ghost" size="icon" className="text-galaxy-primary hover:text-galaxy-secondary">
                <Github className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-galaxy-primary hover:text-galaxy-secondary">
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-galaxy-primary hover:text-galaxy-secondary">
                <Mail className="h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-galaxy-primary hover:text-galaxy-secondary transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.button>
      </section>

      {/* Quick About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="font-futuristic text-3xl md:text-4xl font-bold text-galaxy-primary mb-8">
              About Me
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-8">
              I'm a passionate Mechatronics engineering student from Agni College of Technology, Chennai (2022–2026), 
              with a CGPA of 7.9. My journey is driven by an insatiable curiosity for robotics, automation, and AI 
              technologies that can reshape our world.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4">
                <div className="text-2xl font-bold text-galaxy-primary">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-galaxy-secondary">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-galaxy-blue">7.9</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-galaxy-pink">5+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}