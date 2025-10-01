import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PricingSectionProps {
  onSignup: () => void;
}

const PricingSection = ({ onSignup }: PricingSectionProps) => {
  
  const handleWhatsAppClick = () => {
    const message = "Hi! I have a question about the prenatal yoga program.";
    const whatsappUrl = `https://wa.me/917013805271?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="pricing" className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Begin Your Transformation
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            One simple payment, lifetime of benefits for you and your baby
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 transform hover:-translate-y-1 bg-gradient-to-br from-card via-card to-accent/5 border-primary/20">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2 rounded-bl-2xl">
              <span className="text-sm font-bold">LIMITED OFFER</span>
            </div>
            
            <CardHeader className="text-center pb-4 pt-12">
              <CardTitle className="text-2xl md:text-3xl mb-4">
                Complete Package
              </CardTitle>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    ₹499
                  </span>
                  <div className="text-left">
                    <div className="text-xl md:text-2xl text-muted-foreground line-through">₹1,999</div>
                    <Badge variant="default" className="bg-green-500 text-white">75% OFF</Badge>
                  </div>
                </div>
                
                <Badge variant="secondary" className="text-base py-2 px-4 bg-accent/10 text-accent-foreground">
                  ✨ Lifetime Access - No Recurring Fees
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4 pb-8">
              <div className="space-y-3">
                {[
                  "25+ hours of prenatal yoga videos",
                  "Custom diet plans for Indian mothers",
                  "Dad's support guide & activities",
                  "Pregnancy journal & tracking tools",
                  "WhatsApp community support",
                  "Expert guidance throughout pregnancy",
                  "Free bonus content worth ₹7,000"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm md:text-base">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border/50 pt-4">
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <p className="text-sm text-muted-foreground mb-1">Over 10,000+ happy mothers</p>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500">⭐</span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">4.9/5 average rating</p>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full mt-6 py-6 text-lg shadow-gentle hover:shadow-card transition-shadow"
                onClick={() => window.location.href = '/'}
              >
                Join Now
              </Button>
              
              {/* YouTube Video */}
              <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
                <div className="relative w-full pt-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/K_ZKvKWF6Dw"
                    title="Prenatal Yoga Program Introduction"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="text-center mt-4">
                <p className="text-sm text-muted-foreground mb-2">Questions? We're here to help!</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleWhatsAppClick}
                  className="border-green-500 text-green-600 hover:bg-green-50"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Chat on WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-green-500">🔒</span>
            <span>100% Secure Payment via Razorpay</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;