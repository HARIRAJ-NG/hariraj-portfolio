import { motion } from "framer-motion";
import { GraduationCap, Target, Heart, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="relative min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-futuristic text-4xl md:text-5xl font-bold text-galaxy-primary mb-6">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about innovation, driven by curiosity, and committed to excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-futuristic text-2xl md:text-3xl font-bold text-galaxy-secondary mb-6">
              My Journey
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              I'm a passionate Mechatronics engineering student from <span className="text-galaxy-primary font-semibold">Agni College of Technology, Chennai</span> (2022–2026), 
              eager to contribute to advancements in semiconductor, robotics, and automation technology through real-world applications.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              With a <span className="text-galaxy-secondary font-semibold">CGPA of 7.9</span>, I've developed expertise in multiple programming languages, 
              CAD software, and cutting-edge technologies. My passion lies in creating innovative solutions that bridge 
              the gap between theoretical knowledge and practical implementation.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Through various projects ranging from underwater robotics to smart irrigation systems, 
              I've honed my skills in problem-solving, teamwork, and technological innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="gradient-card border-galaxy-primary/20 shadow-glow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-futuristic text-xl font-semibold text-galaxy-primary">Education</h3>
                </div>
                <p className="text-foreground">
                  <span className="font-semibold">B.E. Mechatronics Engineering</span><br />
                  Agni College of Technology, Chennai<br />
                  2022 - 2026 | CGPA: 7.9
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-galaxy-primary/20 shadow-glow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-futuristic text-xl font-semibold text-galaxy-primary">Vision</h3>
                </div>
                <p className="text-foreground">
                  To become a leading innovator in robotics and automation, developing intelligent systems 
                  that solve real-world problems and improve human life.
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-galaxy-primary/20 shadow-glow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-futuristic text-xl font-semibold text-galaxy-primary">Passion</h3>
                </div>
                <p className="text-foreground">
                  Fascinated by the intersection of mechanical, electrical, and software engineering, 
                  I thrive on creating intelligent systems that push technological boundaries.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Technical Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="font-futuristic text-3xl font-bold text-galaxy-primary mb-8">
            Technical Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="gradient-card border-galaxy-primary/20 shadow-glow hover:shadow-galaxy transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Code className="h-12 w-12 text-galaxy-primary mx-auto mb-4" />
                <h3 className="font-futuristic text-xl font-semibold text-galaxy-secondary mb-4">Programming</h3>
                <p className="text-foreground">Python, C, C++, MATLAB</p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-galaxy-primary/20 shadow-glow hover:shadow-galaxy transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">3D</span>
                </div>
                <h3 className="font-futuristic text-xl font-semibold text-galaxy-secondary mb-4">CAD Design</h3>
                <p className="text-foreground">Fusion 360, SolidWorks, AutoCAD</p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-galaxy-primary/20 shadow-glow hover:shadow-galaxy transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">μC</span>
                </div>
                <h3 className="font-futuristic text-xl font-semibold text-galaxy-secondary mb-4">Hardware</h3>
                <p className="text-foreground">Arduino, Raspberry Pi, IoT</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}