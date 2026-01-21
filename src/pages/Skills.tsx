import { motion } from "framer-motion";
import { Code, Wrench, Cpu, Users, Brain, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 90, description: "Advanced scripting, automation, and AI/ML development" },
      { name: "C++", level: 85, description: "Embedded systems and performance-critical applications" },
      { name: "C", level: 80, description: "Low-level programming and microcontroller development" },
      { name: "MATLAB", level: 75, description: "Simulation, control systems, and data analysis" }
    ]
  },
  {
    title: "CAD & Design Software",
    icon: Wrench,
    skills: [
      { name: "Fusion 360", level: 88, description: "3D modeling, simulation, and manufacturing design" },
      { name: "SolidWorks", level: 82, description: "Mechanical design and engineering analysis" },
      { name: "AutoCAD", level: 78, description: "2D drafting and technical documentation" }
    ]
  },
  {
    title: "Hardware & Platforms",
    icon: Cpu,
    skills: [
      { name: "Arduino", level: 92, description: "Microcontroller programming and sensor integration" },
      { name: "Raspberry Pi", level: 85, description: "Single-board computing and IoT applications" },
      { name: "Git/GitHub", level: 80, description: "Version control and collaborative development" }
    ]
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Teamwork", level: 95, description: "Collaborative project management and leadership" },
      { name: "Problem-solving", level: 90, description: "Analytical thinking and creative solution development" },
      { name: "Communication", level: 85, description: "Technical documentation and presentation skills" }
    ]
  }
];

const achievements = [
  {
    icon: Brain,
    title: "Robotics Society Member",
    description: "Active participant in advanced robotics research and development projects"
  },
  {
    icon: Lightbulb,
    title: "Inter-college Coding Competitions",
    description: "Participated in competitive programming events (2023/2024)"
  },
  {
    icon: Wrench,
    title: "Industrial Automation Workshop",
    description: "Completed specialized training in PLC programming and industrial systems"
  },
  {
    icon: Cpu,
    title: "3D Printing Certification",
    description: "Advanced training in additive manufacturing and rapid prototyping"
  }
];

export default function Skills() {
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
            Skills & Expertise
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for innovative engineering solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <Card className="gradient-card border-galaxy-primary/20 shadow-glow hover:shadow-galaxy transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="font-futuristic text-xl text-galaxy-primary">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-galaxy-secondary">{skill.name}</h3>
                        <span className="text-sm text-galaxy-primary font-medium">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                      />
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-futuristic text-3xl font-bold text-galaxy-primary text-center mb-12">
            Achievements & Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
              >
                <Card className="gradient-card border-galaxy-primary/20 shadow-glow hover:shadow-galaxy transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                        <achievement.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-futuristic text-lg font-semibold text-galaxy-secondary mb-2">
                          {achievement.title}
                        </h3>
                        <p className="text-foreground text-sm leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <h2 className="font-futuristic text-3xl font-bold text-galaxy-primary mb-8">
            Technology Stack
          </h2>
          <div className="bg-gradient-glow rounded-2xl p-8 border border-galaxy-primary/20">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "Python", "C++", "Arduino", "Raspberry Pi", 
                "Fusion 360", "SolidWorks", "MATLAB", "Git",
                "IoT", "Sensors", "3D Printing", "Automation"
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 + (index * 0.05) }}
                  className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-galaxy-primary/10 hover:border-galaxy-primary/30 transition-all duration-300"
                >
                  <span className="text-sm font-medium text-galaxy-primary">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}