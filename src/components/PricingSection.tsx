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
    const whatsappUrl = `https://wa.me/917013805270?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            One-Time Payment for lifetime access to your complete prenatal yoga program
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="border-2 border-primary shadow-card relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2">
              <Badge variant="secondary" className="bg-primary-foreground text-primary">
                Most Popular
              </Badge>
            </div>
            
            <CardHeader className="text-center pt-12">
              <CardTitle className="text-2xl text-foreground">
                Full Prenatal Yoga Journey
              </CardTitle>
              <div className="mt-4">
                <div className="text-4xl font-bold text-primary">₹1999</div>
                <div className="text-sm text-muted-foreground line-through">₹3999</div>
                <div className="text-sm text-muted-foreground mt-1">
                  One-Time Payment • Lifetime access
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-center text-muted-foreground mb-6">
                Customized plan with trimester-wise yoga exercises recorded for pregnant mothers
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>All trimester-wise yoga content</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Husband involvement activities</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>WhatsApp community access</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>PDF guides & video content</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Bonus nutrition plans</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Pregnancy journal included</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Lifetime access</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>24/7 course access</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full mt-6 py-6 text-lg shadow-gentle hover:shadow-card transition-shadow"
                onClick={onSignup}
              >
                Buy Now - ₹1999
              </Button>
              
              <div 
                className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200 cursor-pointer hover:bg-green-100 transition-colors"
                onClick={handleWhatsAppClick}
              >
                <div className="flex items-center justify-center text-green-600 mb-2">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Have a question? Message Us
                </div>
                <p className="text-xs text-center text-green-700 font-medium">
                  Only 18 spots left for August month
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <span className="text-green-500 mr-2">🔒</span>
              Secure Payment
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">📱</span>
              Mobile Friendly
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;