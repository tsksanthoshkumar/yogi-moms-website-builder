import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PricingSection = () => {
  const handleBuyNow = () => {
    // Note: This would require Supabase integration for actual payment processing
    alert("Payment integration requires Supabase setup. This is a demo button.");
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            One-time payment for lifetime access to your complete prenatal yoga program
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
                <div className="text-4xl font-bold text-primary">₹499</div>
                <div className="text-sm text-muted-foreground line-through">₹1999</div>
                <div className="text-sm text-muted-foreground mt-1">
                  One-time payment • Lifetime access
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-center text-muted-foreground mb-6">
                Complete access to trimester-wise yoga content, bonus diet plans, and community support
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
                  <span>24/7 course access</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full mt-6 py-6 text-lg shadow-gentle hover:shadow-card transition-shadow"
                onClick={handleBuyNow}
              >
                Buy Now - ₹499
              </Button>
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                Secure payment via Razorpay/Paytm • 30-day money-back guarantee
              </p>
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
              <span className="text-green-500 mr-2">↩️</span>
              Money-back Guarantee
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