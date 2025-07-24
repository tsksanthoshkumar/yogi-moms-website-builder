import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-background/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
            <img 
              src="/lovable-uploads/86701dd5-d52f-4fed-9baa-a7fea1be56c1.png" 
              alt="PrenatalYoga Logo" 
              className="w-10 h-10"
            />
            <span className="font-bold text-xl text-primary">
              PrenatalYoga
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => handleNavigation('/yoga-exercises')} className="text-foreground hover:text-primary transition-colors">
              Yoga & Exercises
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('program')} className="text-foreground hover:text-primary transition-colors">
              Program
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-foreground hover:text-primary transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
            <Button variant="default" onClick={() => scrollToSection('pricing')}>
              Start Journey
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-foreground hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => handleNavigation('/yoga-exercises')} className="text-left text-foreground hover:text-primary transition-colors">
                Yoga & Exercises
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('program')} className="text-left text-foreground hover:text-primary transition-colors">
                Program
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-left text-foreground hover:text-primary transition-colors">
                Pricing
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-foreground hover:text-primary transition-colors">
                Contact
              </button>
              <Button variant="default" onClick={() => scrollToSection('pricing')} className="self-start">
                Start Journey
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;