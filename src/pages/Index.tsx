import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Star, Users, Coffee, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Belal Amr
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                A passionate <strong>Software Developer</strong> crafting digital experiences 
                that make a difference. Specializing in modern web applications and scalable solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                  <Link to="/portfolio">
                    View My Work <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Download className="mr-2 w-5 h-5" />
                  Download CV
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-lg mx-auto relative">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face" 
                  alt="Belal Amr - Software Developer"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-section-bg">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Explore My Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Button size="lg" variant="outline" asChild className="h-24 flex-col">
              <Link to="/portfolio">
                <Star className="w-8 h-8 mb-2" />
                Portfolio
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-24 flex-col">
              <Link to="/about">
                <Users className="w-8 h-8 mb-2" />
                About Me
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-24 flex-col">
              <Link to="/blog">
                <Coffee className="w-8 h-8 mb-2" />
                Blog
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-24 flex-col">
              <Link to="/contact">
                <Award className="w-8 h-8 mb-2" />
                Contact
              </Link>
            </Button>
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

export default Index;