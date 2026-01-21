import { motion } from "framer-motion";
import { MapPin, Calendar, Building2, Award, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Lucas TVS",
    position: "Manufacturing & Quality Control Intern",
    duration: "February 2025",
    location: "Chennai, India",
    type: "Internship",
    status: "Upcoming",
    description: "Gaining hands-on experience in manufacturing processes and quality control systems in the automotive industry.",
    responsibilities: [
      "Manufacturing process optimization",
      "Quality control and inspection procedures",
      "Machinery operation and maintenance",
      "PDI (Pre-Delivery Inspection) checks",
      "Noise testing and acoustic analysis",
      "Production line efficiency analysis"
    ],
    skills: ["Manufacturing", "Quality Control", "Automotive Systems", "Testing Procedures"],
    achievements: [
      "Exposure to industrial manufacturing environment",
      "Understanding of quality assurance protocols",
      "Hands-on machinery operation experience"
    ]
  }
];

const projects = [
  {
    title: "Underwater ROV (MARVIS)",
    duration: "2024",
    type: "Research Project",
    description: "Led the development of an autonomous underwater robot for coral reef monitoring",
    impact: "Advanced understanding of marine robotics and autonomous systems"
  },
  {
    title: "Smart Irrigation System",
    duration: "2023-2024",
    type: "IoT Project",
    description: "Developed an intelligent irrigation system for water-efficient farming",
    impact: "Practical application of IoT and agricultural technology"
  },
  {
    title: "Line Follower Robot",
    duration: "2023",
    type: "Automation Project",
    description: "Created a precision autonomous robot with advanced path correction",
    impact: "Mastery of control systems and sensor integration"
  }
];

const education = {
  degree: "Bachelor of Engineering in Mechatronics",
  institution: "Agni College of Technology",
  location: "Chennai, India",
  duration: "2022 - 2026",
  cgpa: "7.9",
  relevantCourses: [
    "Control Systems",
    "Robotics and Automation",
    "Embedded Systems",
    "Manufacturing Technology",
    "Artificial Intelligence",
    "Sensor Technology"
  ]
};

export default function Experience() {
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
            Experience & Education
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise through practical experience and academic excellence
          </p>
        </motion.div>

        {/* Professional Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="font-futuristic text-3xl font-bold text-galaxy-primary mb-8">
            Professional Experience
          </h2>
          
          {experiences.map((exp, index) => (
            <Card 
              key={exp.company}
              className="gradient-card border-galaxy-primary/20 shadow-glow hover:shadow-galaxy transition-all duration-300 mb-8"
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="font-futuristic text-2xl text-galaxy-primary mb-2">
                        {exp.position}
                      </CardTitle>
                      <h3 className="text-xl font-semibold text-galaxy-secondary mb-2">
                        {exp.company}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary" className="bg-galaxy-primary/10 text-galaxy-primary">
                          {exp.type}
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className={`border-galaxy-secondary text-galaxy-secondary ${
                            exp.status === 'Upcoming' ? 'border-galaxy-blue text-galaxy-blue' : ''
                          }`}
                        >
                          {exp.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center justify-end mb-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center justify-end">
                      <MapPin className="h-4 w-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-galaxy-secondary mb-3">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start text-foreground">
                          <CheckCircle className="h-4 w-4 text-galaxy-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-galaxy-secondary mb-3">Skills Developed</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="outline" 
                          className="border-galaxy-primary/30 text-galaxy-primary hover:bg-galaxy-primary/10"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <h4 className="font-semibold text-galaxy-secondary mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-foreground">
                          <Award className="h-4 w-4 text-galaxy-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="font-futuristic text-3xl font-bold text-galaxy-primary mb-8">
            Education
          </h2>
          
          <Card className="gradient-card border-galaxy-primary/20 shadow-glow hover:shadow-galaxy transition-all duration-300">
            <CardHeader>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="font-futuristic text-2xl text-galaxy-primary mb-2">
                      {education.degree}
                    </CardTitle>
                    <h3 className="text-xl font-semibold text-galaxy-secondary mb-2">
                      {education.institution}
                    </h3>
                    <Badge variant="secondary" className="bg-galaxy-primary/10 text-galaxy-primary">
                      CGPA: {education.cgpa}
                    </Badge>
                  </div>
                </div>
                
                <div className="text-right text-sm text-muted-foreground">
                  <div className="flex items-center justify-end mb-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    {education.duration}
                  </div>
                  <div className="flex items-center justify-end">
                    <MapPin className="h-4 w-4 mr-2" />
                    {education.location}
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <h4 className="font-semibold text-galaxy-secondary mb-3">Relevant Coursework</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {education.relevantCourses.map((course, courseIndex) => (
                  <div 
                    key={courseIndex}
                    className="bg-card/50 backdrop-blur-sm rounded-lg p-3 border border-galaxy-primary/10 hover:border-galaxy-primary/30 transition-all duration-300"
                  >
                    <span className="text-sm font-medium text-galaxy-primary">{course}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Academic Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="font-futuristic text-3xl font-bold text-galaxy-primary mb-8">
            Academic Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="gradient-card border-galaxy-primary/20 shadow-glow hover:shadow-galaxy transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="border-galaxy-secondary text-galaxy-secondary">
                      {project.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{project.duration}</span>
                  </div>
                  
                  <h3 className="font-futuristic text-lg font-semibold text-galaxy-primary mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="bg-gradient-glow rounded-lg p-3 border border-galaxy-primary/20">
                    <p className="text-xs text-galaxy-primary font-medium">Impact:</p>
                    <p className="text-xs text-foreground">{project.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}