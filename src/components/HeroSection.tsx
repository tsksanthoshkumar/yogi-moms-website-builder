import React from 'react';
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-yoga.jpg";

const HeroSection = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight yoga-breathe">
              Empower Your Pregnancy with{' '}
              <span className="text-primary trust-badge bg-clip-text text-transparent">Gentle Yoga</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl floating-element">
              Daily guided yoga sessions designed to nurture both mother and baby – safely, from your home. 
              Join thousands of Indian mothers on their wellness journey.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
              <div className="flex items-center bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm font-medium">Certified Instructors</span>
              </div>
              <div className="flex items-center bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm font-medium">Safe for All Trimesters</span>
              </div>
              <div className="flex items-center bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm font-medium">10,000+ Happy Mothers</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={scrollToPricing}
                className="px-8 py-6 text-lg shadow-floating hover:shadow-glow transform hover:scale-105 transition-all duration-300 trust-badge"
              >
                Start Your Journey
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-6 text-lg premium-card border-2 hover:border-primary/50"
              >
                Learn More
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 text-center lg:text-left pt-8">
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Mothers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">₹1999</div>
                <div className="text-sm text-muted-foreground">One-time Payment</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Access</div>
              </div>
            </div>
          </div>
          <div className="relative parallax-container">
            <div className="absolute inset-0 bg-gradient-mesh rounded-3xl opacity-30 parallax-layer"></div>
            <div className="absolute inset-0 bg-gradient-glow rounded-3xl opacity-50 yoga-float"></div>
            <img 
              src={heroImage} 
              alt="Pregnant woman doing yoga" 
              className="w-full h-auto rounded-3xl shadow-premium relative z-10 yoga-float transform-gpu backface-hidden"
            />
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/20 rounded-full floating-element blur-sm"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gentle-blue/30 rounded-full floating-element blur-md" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/3 -right-8 w-16 h-16 bg-soft-pink/40 rounded-full floating-element blur-sm" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;