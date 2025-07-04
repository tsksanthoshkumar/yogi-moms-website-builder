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
          <div className="text-center lg:text-left space-y-8">
            {/* Announcement Banner */}
            <div className="inline-flex items-center bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 rounded-full border border-primary/20">
              <span className="text-primary font-medium text-sm">🌟 Limited Time: Save ₹2000 Today!</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              Transform Your{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Pregnancy Journey
              </span>{' '}
              with Expert Yoga
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              Join <span className="font-semibold text-primary">10,000+ Indian mothers</span> who discovered the secret to a 
              <span className="font-semibold"> healthier, happier pregnancy</span> through our scientifically-designed yoga program.
            </p>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background"></div>
                <div className="w-8 h-8 rounded-full bg-accent/20 border-2 border-background"></div>
                <div className="w-8 h-8 rounded-full bg-primary/30 border-2 border-background"></div>
                <div className="w-8 h-8 rounded-full bg-accent/30 border-2 border-background"></div>
              </div>
              <span className="text-muted-foreground">
                <span className="font-semibold text-foreground">2,847 mothers</span> joined this week
              </span>
            </div>
            
            {/* Enhanced Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center bg-gradient-to-r from-primary/5 to-primary/10 px-4 py-3 rounded-xl border border-primary/20">
                <span className="text-green-500 mr-3 text-lg">✓</span>
                <div className="text-left">
                  <div className="text-sm font-semibold text-foreground">Lifetime Access</div>
                  <div className="text-xs text-muted-foreground">Never expires</div>
                </div>
              </div>
              <div className="flex items-center bg-gradient-to-r from-accent/5 to-accent/10 px-4 py-3 rounded-xl border border-accent/20">
                <span className="text-green-500 mr-3 text-lg">✓</span>
                <div className="text-left">
                  <div className="text-sm font-semibold text-foreground">Doctor Approved</div>
                  <div className="text-xs text-muted-foreground">100% Safe</div>
                </div>
              </div>
              <div className="flex items-center bg-gradient-to-r from-primary/5 to-accent/10 px-4 py-3 rounded-xl border border-primary/20">
                <span className="text-green-500 mr-3 text-lg">✓</span>
                <div className="text-left">
                  <div className="text-sm font-semibold text-foreground">Instant Access</div>
                  <div className="text-xs text-muted-foreground">Start today</div>
                </div>
              </div>
            </div>
            
            {/* Enhanced CTA Section */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  onClick={scrollToPricing}
                  className="px-12 py-6 text-xl font-semibold shadow-gentle hover:shadow-card transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
                >
                  Start Your Transformation ₹1999
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-6 text-lg border-2 hover:bg-primary/5"
                >
                  Watch Preview
                </Button>
              </div>
              
              {/* Urgency & Guarantee */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm">
                <div className="flex items-center text-primary">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                  <span className="font-medium">347 spots left at this price</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <span className="mr-2">🛡️</span>
                  <span>30-day money-back guarantee</span>
                </div>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">10,000+</div>
                <div className="text-sm text-muted-foreground">Happy Mothers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">₹1999</div>
                <div className="text-sm text-muted-foreground">
                  <span className="line-through text-muted-foreground/60">₹3999</span> One-time
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">4.9★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
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