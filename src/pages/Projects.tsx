import { motion } from "framer-motion";
import { ExternalLink, Github, Waves, Droplets, Navigation } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Underwater ROV (MARVIS)",
    description: "Autonomous underwater robot designed for coral reef monitoring with advanced computer vision and sensor integration.",
    longDescription: "MARVIS (Marine Autonomous Research Vehicle for Intelligent Surveying) is an advanced underwater ROV equipped with high-resolution cameras, environmental sensors, and autonomous navigation capabilities. The system features custom-designed waterproof housing, efficient propulsion systems, and sophisticated control algorithms for obstacle avoidance and path planning.",
    icon: Waves,
    technologies: ["Python", "Computer Vision", "Arduino", "Sensors", "Autonomous Navigation"],
    features: [
      "Integrated camera & sensor systems",
      "Waterproof housing design",
      "Real-time obstacle avoidance",
      "Coral reef monitoring capabilities",
      "Remote control interface"
    ],
    status: "Completed",
    category: "Robotics"
  },
  {
    title: "Smart Irrigation System",
    description: "IoT-based water-efficient farming solution with intelligent soil monitoring and automated irrigation control.",
    longDescription: "An innovative IoT-powered irrigation system that revolutionizes agricultural water management. The system uses advanced soil moisture sensors, weather data integration, and machine learning algorithms to optimize water usage while maximizing crop yield.",
    icon: Droplets,
    technologies: ["IoT", "Arduino", "Sensors", "Mobile App", "Cloud Computing"],
    features: [
      "Real-time soil moisture monitoring",
      "Automated irrigation scheduling",
      "Mobile app remote control",
      "Weather data integration",
      "Water usage analytics"
    ],
    status: "Completed",
    category: "IoT"
  },
  {
    title: "Line Follower Robot",
    description: "Precision IR sensor-based autonomous robot with advanced path correction and obstacle detection algorithms.",
    longDescription: "A sophisticated autonomous robot that demonstrates advanced control systems and sensor fusion. The robot uses multiple IR sensors for precise line detection, implements PID control for smooth navigation, and features real-time path correction capabilities.",
    icon: Navigation,
    technologies: ["C++", "Arduino", "IR Sensors", "PID Control", "Motor Control"],
    features: [
      "Multi-sensor IR array",
      "PID control system",
      "Real-time path correction",
      "Obstacle detection",
      "Speed optimization"
    ],
    status: "Completed",
    category: "Automation"
  }
];

export default function Projects() {
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
            Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative engineering solutions that push the boundaries of technology
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="gradient-card border-galaxy-primary/20 shadow-glow hover:shadow-galaxy transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center">
                        <project.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="font-futuristic text-2xl text-galaxy-primary mb-2">
                            {project.title}
                          </CardTitle>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge variant="secondary" className="bg-galaxy-primary/10 text-galaxy-primary">
                              {project.category}
                            </Badge>
                            <Badge variant="outline" className="border-galaxy-secondary text-galaxy-secondary">
                              {project.status}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="futuristic" size="sm">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                          <Button variant="galaxy" size="sm">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-galaxy-secondary mb-3">Overview</h3>
                      <p className="text-foreground leading-relaxed mb-6">
                        {project.longDescription}
                      </p>
                      
                      <h3 className="font-semibold text-galaxy-secondary mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-foreground">
                            <div className="w-2 h-2 bg-galaxy-primary rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-galaxy-secondary mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="outline" 
                            className="border-galaxy-primary/30 text-galaxy-primary hover:bg-galaxy-primary/10"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="bg-gradient-glow rounded-lg p-6 border border-galaxy-primary/20">
                        <h4 className="font-semibold text-galaxy-primary mb-2">Project Impact</h4>
                        <p className="text-sm text-foreground">
                          This project demonstrates advanced engineering principles and showcases 
                          practical applications of mechatronics in solving real-world challenges.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h2 className="font-futuristic text-2xl font-bold text-galaxy-primary mb-4">
            Want to Collaborate?
          </h2>
          <p className="text-muted-foreground mb-6">
            I'm always interested in working on innovative projects that challenge conventional thinking.
          </p>
          <Button variant="hero" size="lg">
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </div>
  );
}