import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Calendar, Award } from "lucide-react";

const About = () => {
  const skills = {
    "Frontend": ["React", "Vue.js", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "SASS"],
    "Backend": ["Node.js", "Express.js", "Python", "Django", "PHP", "Laravel", "RESTful APIs", "GraphQL"],
    "Database": ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
    "DevOps & Tools": ["Git", "Docker", "AWS", "Heroku", "Webpack", "Vite", "Jest", "Cypress"],
    "Mobile": ["React Native", "Flutter", "Progressive Web Apps"],
    "Design": ["Figma", "Adobe XD", "Photoshop", "UI/UX Design"]
  };

  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      location: "Remote",
      description: "Leading frontend development for enterprise web applications. Mentoring junior developers and establishing best practices for React-based projects.",
      achievements: [
        "Improved application performance by 40% through code optimization",
        "Led migration from legacy system to modern React architecture",
        "Mentored 5 junior developers"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      location: "Cairo, Egypt",
      description: "Developed and maintained multiple client projects using various technologies. Collaborated with design team to implement pixel-perfect interfaces.",
      achievements: [
        "Delivered 15+ successful projects on time and within budget",
        "Implemented automated testing that reduced bugs by 60%",
        "Integrated payment systems for e-commerce platforms"
      ]
    },
    {
      title: "Junior Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      location: "Alexandria, Egypt",
      description: "Started career developing web applications using modern JavaScript frameworks. Gained experience in agile development and team collaboration.",
      achievements: [
        "Built responsive web applications from scratch",
        "Contributed to open-source projects",
        "Learned best practices in software development"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Alexandria University",
      period: "2015 - 2019",
      description: "Graduated with honors. Specialized in software engineering and web development."
    }
  ];

  const certifications = [
    "AWS Certified Developer",
    "Google Cloud Professional Developer",
    "Meta React Developer Certificate",
    "MongoDB Certified Developer"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                About <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Me</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                I'm a passionate software developer with 5+ years of experience creating 
                digital solutions that make a difference. I specialize in building scalable 
                web applications using modern technologies and best practices.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-5 h-5 mr-2" />
                  Cairo, Egypt
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-5 h-5 mr-2" />
                  Available for hire
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face" 
                  alt="Belal Amr"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-section-bg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary">{job.title}</h3>
                    <p className="text-lg text-foreground font-medium">{job.company}</p>
                    <div className="flex items-center text-muted-foreground mt-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {job.period}
                      <MapPin className="w-4 h-4 ml-4 mr-2" />
                      {job.location}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{job.description}</p>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    Key Achievements:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-section-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Education</h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">{edu.degree}</h3>
                    <p className="text-lg font-medium text-foreground">{edu.institution}</p>
                    <p className="text-muted-foreground mb-2">{edu.period}</p>
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Certifications</h2>
              <Card className="p-6">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <Award className="w-5 h-5 text-primary mr-3" />
                      <span className="text-foreground font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Belal Amr. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;