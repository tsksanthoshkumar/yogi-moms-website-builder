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
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Empower Your Pregnancy with{' '}
              <span className="text-primary">Gentle Yoga</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
              Daily guided yoga sessions designed to nurture both mother and baby – safely, from your home. 
              Join thousands of Indian mothers on their wellness journey.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
              <div className="flex items-center bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm font-medium">Lifetime Access</span>
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
                className="px-8 py-6 text-lg shadow-gentle hover:shadow-card transition-shadow"
              >
                Start Your Journey
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-6 text-lg"
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
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-soft-pink to-gentle-blue rounded-3xl opacity-20"></div>
            <img 
              src={heroImage} 
              alt="Pregnant woman doing yoga" 
              className="w-full h-auto rounded-3xl shadow-card relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;