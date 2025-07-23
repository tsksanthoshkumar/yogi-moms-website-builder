import React from 'react';
import yogaFutureBaby from "@/assets/yoga-future-baby.jpg";

const YogaAnimationSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Healthy Mom, Happy Baby – Start Your Yoga Journey Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every yoga session you do today creates a healthier, happier tomorrow for your baby
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <img 
              src={yogaFutureBaby} 
              alt="Woman doing yoga today and her healthy future baby" 
              className="w-full h-auto rounded-3xl shadow-card"
            />
          </div>
          
          {/* Lifetime Access Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 bg-background rounded-2xl shadow-gentle">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔓</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Lifetime Access</h3>
              <p className="text-muted-foreground text-sm">One payment, forever access to all courses and updates</p>
            </div>
            
            <div className="text-center p-6 bg-background rounded-2xl shadow-gentle">
              <div className="w-16 h-16 mx-auto mb-4 bg-gentle-blue/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">👶</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Healthier Baby</h3>
              <p className="text-muted-foreground text-sm">Your daily practice today ensures your baby's wellness tomorrow</p>
            </div>
            
            <div className="text-center p-6 bg-background rounded-2xl shadow-gentle">
              <div className="w-16 h-16 mx-auto mb-4 bg-soft-pink/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">♾️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Forever Support</h3>
              <p className="text-muted-foreground text-sm">Lifetime community access and ongoing support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YogaAnimationSection;