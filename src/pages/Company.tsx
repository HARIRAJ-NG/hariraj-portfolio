import { motion } from "framer-motion";
import { Rocket, Target, Lightbulb, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Company() {
  return (
    <div className="relative min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-24 h-24 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-glow">
            <Rocket className="h-12 w-12 text-white" />
          </div>
          
          <h1 className="font-futuristic text-4xl md:text-6xl font-bold text-galaxy-primary mb-6">
            ROGUE TECH SOLUTIONS
          </h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-galaxy-secondary mb-4">
              Pioneering automation, robotics, and AI-powered solutions
            </h2>
            <h3 className="text-xl md:text-2xl text-galaxy-blue font-light">
              for a smarter tomorrow
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            At Rogue Tech Solutions, we believe in challenging the status quo and creating 
            innovative solutions that transform industries and improve lives through 
            cutting-edge technology and engineering excellence.
          </motion.p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="gradient-card border-galaxy-primary/20 shadow-glow h-full">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="font-futuristic text-2xl text-galaxy-primary">
                    Our Vision
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed text-lg">
                  To become a global leader in intelligent automation and robotics, 
                  creating revolutionary technologies that bridge the gap between 
                  human imagination and technological reality.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Card className="gradient-card border-galaxy-primary/20 shadow-glow h-full">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="font-futuristic text-2xl text-galaxy-primary">
                    Our Mission
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed text-lg">
                  To develop innovative, sustainable, and intelligent solutions that 
                  empower businesses and individuals to achieve their goals through 
                  advanced automation, robotics, and AI technologies.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="font-futuristic text-3xl font-bold text-galaxy-primary text-center mb-12">
            Core Values
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Innovation",
                description: "Constantly pushing boundaries and exploring new possibilities"
              },
              {
                icon: Target,
                title: "Precision",
                description: "Delivering accurate and reliable solutions with attention to detail"
              },
              {
                icon: Rocket,
                title: "Excellence",
                description: "Striving for the highest standards in everything we do"
              },
              {
                icon: Lightbulb,
                title: "Creativity",
                description: "Thinking outside the box to solve complex challenges"
              }
            ].map((value, index) => (
              <Card 
                key={value.title}
                className="gradient-card border-galaxy-primary/20 shadow-glow hover:shadow-galaxy transition-all duration-300 text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-futuristic text-xl font-semibold text-galaxy-secondary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="font-futuristic text-3xl font-bold text-galaxy-primary text-center mb-12">
            Our Expertise
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Robotics & Automation",
                description: "Design and development of intelligent robotic systems for industrial and research applications",
                features: ["Autonomous Systems", "Industrial Automation", "Custom Robotics", "Control Systems"]
              },
              {
                title: "AI & Machine Learning",
                description: "Implementation of cutting-edge AI solutions for predictive analytics and intelligent decision making",
                features: ["Computer Vision", "Predictive Analytics", "Neural Networks", "Data Processing"]
              },
              {
                title: "IoT Solutions",
                description: "Connected systems that enable smart monitoring, control, and optimization across various industries",
                features: ["Smart Sensors", "Cloud Integration", "Real-time Monitoring", "Mobile Applications"]
              }
            ].map((service, index) => (
              <Card 
                key={service.title}
                className="gradient-card border-galaxy-primary/20 shadow-glow hover:shadow-galaxy transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="font-futuristic text-xl text-galaxy-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-foreground">
                        <div className="w-2 h-2 bg-galaxy-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center bg-gradient-glow rounded-2xl p-12 border border-galaxy-primary/20"
        >
          <h2 className="font-futuristic text-3xl font-bold text-galaxy-primary mb-4">
            Ready to Transform Your Ideas?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with cutting-edge technology 
            and innovative engineering solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Start a Project
            </Button>
            <Button variant="futuristic" size="lg">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}