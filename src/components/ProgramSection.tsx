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
  "🍽️ Specialised Diet Plans (Month-by-Month) - Separate plans for North Indian and South Indian cuisine with Vegetarian and Non-Vegetarian options",
  "👨 Husband Support Guide - Step-by-step guide for husbands with communication tips, emotional support, and involvement advice",
  "🏠 5 Daily Care & Household Activity Guides for Husbands - Light, loving ways to help daily (cleaning, cooking, massage, fun games etc.)",
  "❓ FAQ Guide for Pregnant Women & Husbands - Common doubts, expert tips, and clear answers for each stage",
  "✅ Dos & Don'ts for Moms-to-Be - Simplified trimester-based list covering food, movement, health, and sleep",
  "🌸 Trimester-by-Trimester Wellness Guide - Self-care routines for each trimester",
  "📚 Pregnancy eBook - All essential information in one downloadable eBook",
  "📔 Special Pregnancy Journal - A guided space for daily memories, thoughts, and milestones"
];

const ProgramSection = () => {
  return (
    <section id="program" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What's Inside the Course
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            A comprehensive week-by-week program that grows with you throughout your pregnancy journey
          </p>
          <div className="space-y-2 text-muted-foreground max-w-3xl mx-auto">
            <p>Available in Hindi and English languages.</p>
            <p>Learn at your own pace, anytime, anywhere.</p>
            <p>Fit yoga into your busy schedule – perfect for new mothers and expectant moms.</p>
            <p>Access soothing prenatal yoga whenever you need it most, whether it's early morning or late evening.</p>
          </div>
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
        <div className="bg-gradient-primary rounded-2xl p-8 border-2 border-primary/20 shadow-glow">
          <div className="text-center mb-8">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
              <span className="text-white font-bold text-lg">₹7000 Worth Content FREE</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Bonus Content Included
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bonusContent.map((bonus, index) => (
              <div key={index} className="flex items-center text-white/90 bg-white/5 rounded-lg p-3 backdrop-blur-sm">
                <span className="mr-3 text-xl">{bonus.split(' ')[0]}</span>
                <span className="text-sm">{bonus.substring(bonus.indexOf(' ') + 1)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;