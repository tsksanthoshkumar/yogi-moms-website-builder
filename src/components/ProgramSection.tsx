import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const programContent = [
  {
    week: "Week 1-12",
    title: "First Trimester",
    badge: "Foundation",
    activities: [
      "Gentle breathing exercises for nausea relief",
      "Basic meditation for emotional balance", 
      "Light stretching for energy boost",
      "Foundational yoga poses for stability",
      "Positive affirmations for confidence"
    ]
  },
  {
    week: "Week 13-28", 
    title: "Second Trimester",
    badge: "Strength",
    activities: [
      "Core strengthening (pregnancy-safe)",
      "Guided meditation for baby bonding",
      "Hip opening stretches",
      "Standing poses for strength & balance",
      "Daily mantras for inner peace"
    ]
  },
  {
    week: "Week 29-40",
    title: "Third Trimester", 
    badge: "Preparation",
    activities: [
      "Pelvic floor breathing techniques",
      "Birth preparation meditation",
      "Gentle stretching for comfort",
      "Restorative poses for rest",
      "Labor-focused affirmations"
    ]
  }
];

const bonusContent = [
  "📖 Comprehensive PDF guides for each trimester",
  "🎥 High-quality video demonstrations", 
  "🍎 Nutrition plans for healthy pregnancy",
  "👫 Partner yoga sessions for couples",
  "💬 WhatsApp community support group",
  "📱 Mobile-friendly content for easy access"
];

const ProgramSection = () => {
  return (
    <section id="program" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What's Inside the Course
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive week-by-week program that grows with you throughout your pregnancy journey
          </p>
        </div>

        {/* Program Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {programContent.map((phase, index) => (
            <Card key={index} className="border border-border shadow-gentle hover:shadow-card transition-shadow duration-300">
              <CardHeader className="text-center">
                <Badge variant="secondary" className="self-center mb-2">{phase.badge}</Badge>
                <CardTitle className="text-xl text-foreground">{phase.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{phase.week}</p>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-foreground mb-3">5 Daily Activities:</h4>
                <ul className="space-y-2">
                  {phase.activities.map((activity, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bonus Content */}
        <div className="bg-gradient-section rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Bonus Content Included
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bonusContent.map((bonus, index) => (
              <div key={index} className="flex items-center text-muted-foreground">
                <span className="mr-3">{bonus.split(' ')[0]}</span>
                <span>{bonus.substring(bonus.indexOf(' ') + 1)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;