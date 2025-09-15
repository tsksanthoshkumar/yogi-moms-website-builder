import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: "🌸",
    title: "Reduced Pain",
    description: "Gentle stretches and poses help alleviate back pain and discomfort during pregnancy"
  },
  {
    icon: "😴",
    title: "Better Sleep",
    description: "Relaxation techniques and breathing exercises promote restful sleep for expecting mothers"
  },
  {
    icon: "⚡",
    title: "More Energy",
    description: "Boost your energy levels naturally with safe, pregnancy-specific yoga practices"
  },
  {
    icon: "🧘",
    title: "Stress Relief",
    description: "Meditation and mindfulness practices help manage pregnancy stress and anxiety"
  },
  {
    icon: "💪",
    title: "Stronger Body",
    description: "Build strength and flexibility safely to support your changing body"
  },
  {
    icon: "👶",
    title: "Baby Bonding",
    description: "Connect with your baby through breathing exercises and gentle movements"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-12 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
            Why Choose Our Prenatal Program?
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Experience the transformative benefits of prenatal yoga designed specifically for Indian mothers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-gentle hover:shadow-card transition-shadow duration-300">
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;