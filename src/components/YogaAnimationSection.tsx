import React from 'react';
import yogaAnimation from "@/assets/yoga-animation-3d.jpg";

const YogaAnimationSection = () => {
  return (
    <section className="py-20 bg-gradient-section relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 yoga-breathe">
            Experience the Transformation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto floating-element">
            Immerse yourself in the journey of pregnancy with our 3D guided yoga experiences
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* 3D Animated Yoga Image */}
          <div className="relative parallax-container">
            <div className="absolute inset-0 bg-gradient-glow rounded-3xl opacity-60 yoga-float"></div>
            <img 
              src={yogaAnimation} 
              alt="3D Animated Pregnant Woman Yoga" 
              className="w-full h-auto rounded-3xl shadow-premium yoga-float transform-gpu backface-hidden"
            />
            
            {/* Floating Transformation Elements */}
            <div className="absolute top-10 left-10 w-6 h-6 bg-primary rounded-full floating-element opacity-70"></div>
            <div className="absolute top-20 right-16 w-4 h-4 bg-gentle-blue rounded-full floating-element opacity-60" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 left-20 w-8 h-8 bg-soft-pink rounded-full floating-element opacity-50" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-32 right-8 w-5 h-5 bg-nurturing-peach rounded-full floating-element opacity-80" style={{animationDelay: '0.5s'}}></div>
            
            {/* Glowing Rings */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary/20 rounded-full yoga-breathe"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-gentle-blue/30 rounded-full yoga-breathe" style={{animationDelay: '1s'}}></div>
          </div>
          
          {/* Transformation Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center premium-card p-6 bg-background/80 backdrop-blur-sm rounded-2xl">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center floating-element">
                <span className="text-2xl">🧘‍♀️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">3D Guided Sessions</h3>
              <p className="text-muted-foreground text-sm">Immersive yoga experiences with realistic movements</p>
            </div>
            
            <div className="text-center premium-card p-6 bg-background/80 backdrop-blur-sm rounded-2xl">
              <div className="w-16 h-16 mx-auto mb-4 bg-gentle-blue/10 rounded-full flex items-center justify-center floating-element" style={{animationDelay: '0.5s'}}>
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Visual Transformations</h3>
              <p className="text-muted-foreground text-sm">See your progress with beautiful visual feedback</p>
            </div>
            
            <div className="text-center premium-card p-6 bg-background/80 backdrop-blur-sm rounded-2xl">
              <div className="w-16 h-16 mx-auto mb-4 bg-soft-pink/10 rounded-full flex items-center justify-center floating-element" style={{animationDelay: '1s'}}>
                <span className="text-2xl">💫</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Holistic Wellness</h3>
              <p className="text-muted-foreground text-sm">Complete mind-body transformation experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YogaAnimationSection;