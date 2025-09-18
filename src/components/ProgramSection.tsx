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
    <section id="program" className="py-10 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What's Inside the Course
          </h2>
        </div>

        {/* Course Content Overview Card */}
        <div className="mb-8 md:mb-16">
          <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-3xl p-4 md:p-8 lg:p-12 shadow-card border border-purple-100">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4">
                🎯 Everything You Need for a Healthy Pregnancy
              </h3>
              <p className="text-base md:text-lg text-muted-foreground">
                Complete support system designed for Indian mothers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-gentle hover:shadow-card transition-all duration-300 hover:scale-105">
                <div className="text-2xl md:text-3xl mb-3">🧘‍♀️</div>
                <h4 className="font-bold text-foreground mb-2 text-sm md:text-base">Prenatal Yoga Videos</h4>
                <p className="text-xs md:text-sm text-muted-foreground">Trimester-wise routines for normal delivery & body exercises, available in Hindi & English</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-gentle hover:shadow-card transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-3">🍱</div>
                <h4 className="font-bold text-foreground mb-2">Diet Plans</h4>
                <p className="text-sm text-muted-foreground">Veg/Non-Veg options with South & North Indian menus</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-gentle hover:shadow-card transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-3">❤️</div>
                <h4 className="font-bold text-foreground mb-2">Husband's Guide</h4>
                <p className="text-sm text-muted-foreground">Practical tips for partners to support you better</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-gentle hover:shadow-card transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-bold text-foreground mb-2">Fun Activity Guide</h4>
                <p className="text-sm text-muted-foreground">5 engaging activities for a joyful pregnancy</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-gentle hover:shadow-card transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-3">✍️</div>
                <h4 className="font-bold text-foreground mb-2">Pregnancy Journal</h4>
                <p className="text-sm text-muted-foreground">Record your journey week by week</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-gentle hover:shadow-card transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-3">📚</div>
                <h4 className="font-bold text-foreground mb-2">eBook & FAQs</h4>
                <p className="text-sm text-muted-foreground">All your pregnancy questions answered… and more!</p>
              </div>
            </div>
          </div>
        </div>
        {/* Program Content */}
        {/* Payment Flow Information */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 md:p-8 border border-green-200 shadow-gentle">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 flex items-center justify-center gap-2">
                <span className="text-green-500">✅</span>
                How It Works After Payment
              </h3>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-gentle border border-green-100 max-w-2xl mx-auto">
                <div className="space-y-3 text-center">
                  <div className="text-base md:text-lg text-foreground">
                    <span className="font-bold text-green-600">After Payment:</span> Redirects to program automatically
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    Want to login again? Use your registered email ID or Phone number
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <div className="bg-gradient-section rounded-2xl p-8 relative">
          <div className="absolute top-4 right-4">
            <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg animate-pulse">
              FREE!
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-4">
            Bonus Content Included
          </h3>
          <div className="text-center mb-6">
            <div className="bg-yellow-400 text-black px-6 py-3 rounded-lg inline-block font-bold text-xl">
              ₹7,000 Worth Content - Absolutely FREE!
            </div>
          </div>
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