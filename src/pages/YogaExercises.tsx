import React, { useState } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const yogaPoses = {
  "first-trimester": [
    {
      name: "Mountain Pose (Tadasana)",
      description: "A foundational standing pose that improves posture and balance",
      benefits: ["Improves posture", "Builds strength", "Enhances balance"],
      instructions: [
        "Stand with feet hip-width apart",
        "Engage your core muscles gently",
        "Keep shoulders relaxed and down",
        "Hold for 30 seconds, breathe deeply"
      ],
      precautions: "Avoid if you have low blood pressure",
      duration: "30 seconds - 1 minute"
    },
    {
      name: "Cat-Cow Stretch",
      description: "Gentle spinal movement that relieves back tension",
      benefits: ["Relieves back pain", "Improves flexibility", "Reduces stress"],
      instructions: [
        "Start on hands and knees",
        "Arch your back, look up (Cow)",
        "Round your spine, tuck chin (Cat)",
        "Repeat slowly 8-10 times"
      ],
      precautions: "Move slowly and gently",
      duration: "2-3 minutes"
    },
    {
      name: "Seated Forward Fold",
      description: "Calming pose that stretches the spine and hamstrings",
      benefits: ["Calms the mind", "Stretches spine", "Improves digestion"],
      instructions: [
        "Sit with legs extended",
        "Inhale and lengthen spine",
        "Exhale and fold forward gently",
        "Hold for 30 seconds"
      ],
      precautions: "Don't force the stretch",
      duration: "30 seconds - 1 minute"
    }
  ],
  "second-trimester": [
    {
      name: "Warrior II (Virabhadrasana II)",
      description: "Strengthening pose that builds stamina and confidence",
      benefits: ["Strengthens legs", "Opens hips", "Builds endurance"],
      instructions: [
        "Step feet wide apart",
        "Turn right foot out 90 degrees",
        "Bend right knee over ankle",
        "Extend arms parallel to floor"
      ],
      precautions: "Use wall support if needed",
      duration: "30 seconds each side"
    },
    {
      name: "Side-Lying Leg Lifts",
      description: "Gentle strengthening for hip and core muscles",
      benefits: ["Strengthens hips", "Improves circulation", "Reduces swelling"],
      instructions: [
        "Lie on your side with support",
        "Lift top leg slowly",
        "Lower with control",
        "Repeat 10-15 times each side"
      ],
      precautions: "Use cushions for comfort",
      duration: "2-3 minutes each side"
    },
    {
      name: "Prenatal Pigeon Pose",
      description: "Hip opener that relieves lower back tension",
      benefits: ["Opens hips", "Relieves back pain", "Improves flexibility"],
      instructions: [
        "From tabletop, bring right knee forward",
        "Extend left leg back",
        "Use props for support",
        "Hold and breathe deeply"
      ],
      precautions: "Use bolsters and blocks",
      duration: "1-2 minutes each side"
    }
  ],
  "third-trimester": [
    {
      name: "Supported Child's Pose",
      description: "Restorative pose for relaxation and back relief",
      benefits: ["Relieves back pressure", "Calms nervous system", "Improves sleep"],
      instructions: [
        "Kneel with knees wide apart",
        "Place bolster between knees",
        "Rest forehead on props",
        "Breathe deeply and relax"
      ],
      precautions: "Use plenty of props for comfort",
      duration: "3-5 minutes"
    },
    {
      name: "Wall Squats",
      description: "Strengthening exercise to prepare for labor",
      benefits: ["Strengthens legs", "Opens pelvis", "Prepares for birth"],
      instructions: [
        "Stand with back against wall",
        "Slide down into squat position",
        "Hold for 10-30 seconds",
        "Slide back up slowly"
      ],
      precautions: "Don't go too low, listen to your body",
      duration: "Repeat 5-10 times"
    },
    {
      name: "Prenatal Goddess Pose",
      description: "Empowering pose that opens hips and strengthens legs",
      benefits: ["Opens pelvis", "Strengthens thighs", "Builds confidence"],
      instructions: [
        "Stand with feet wide, toes turned out",
        "Lower into squat position",
        "Keep chest lifted",
        "Hold and breathe deeply"
      ],
      precautions: "Use chair for support if needed",
      duration: "30 seconds - 1 minute"
    }
  ]
};

const breathingExercises = [
  {
    name: "Deep Belly Breathing",
    description: "Fundamental breathing technique for relaxation",
    benefits: ["Reduces anxiety", "Improves oxygen flow", "Calms mind"],
    instructions: [
      "Sit comfortably with one hand on chest, one on belly",
      "Breathe in slowly through nose, expanding belly",
      "Exhale slowly through mouth",
      "Repeat for 5-10 minutes"
    ],
    duration: "5-10 minutes"
  },
  {
    name: "4-7-8 Breathing",
    description: "Calming breath pattern for better sleep",
    benefits: ["Promotes sleep", "Reduces stress", "Lowers heart rate"],
    instructions: [
      "Exhale completely through mouth",
      "Inhale through nose for 4 counts",
      "Hold breath for 7 counts",
      "Exhale through mouth for 8 counts"
    ],
    duration: "4-8 cycles"
  },
  {
    name: "Alternate Nostril Breathing",
    description: "Balancing breath technique for mental clarity",
    benefits: ["Balances nervous system", "Improves focus", "Reduces stress"],
    instructions: [
      "Use thumb to close right nostril",
      "Inhale through left nostril",
      "Close left nostril, release right",
      "Exhale through right nostril, continue pattern"
    ],
    duration: "5-10 rounds"
  }
];

const YogaExercises = () => {
  const [selectedTrimester, setSelectedTrimester] = useState("first-trimester");

  const handleLogin = () => {
    // Placeholder for login functionality
    console.log("Login clicked");
  };

  const handleSignup = () => {
    // Placeholder for signup functionality
    console.log("Signup clicked");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onLogin={handleLogin} onSignup={handleSignup} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Prenatal Yoga <span className="text-primary">Poses & Exercises</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Safe, gentle, and effective yoga poses designed specifically for each stage of your pregnancy journey
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs value={selectedTrimester} onValueChange={setSelectedTrimester} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-2xl grid-cols-3">
                <TabsTrigger value="first-trimester" className="text-sm lg:text-base">
                  First Trimester<br />
                  <span className="text-xs text-muted-foreground">(1-12 weeks)</span>
                </TabsTrigger>
                <TabsTrigger value="second-trimester" className="text-sm lg:text-base">
                  Second Trimester<br />
                  <span className="text-xs text-muted-foreground">(13-27 weeks)</span>
                </TabsTrigger>
                <TabsTrigger value="third-trimester" className="text-sm lg:text-base">
                  Third Trimester<br />
                  <span className="text-xs text-muted-foreground">(28-40 weeks)</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {Object.entries(yogaPoses).map(([trimester, poses]) => (
              <TabsContent key={trimester} value={trimester} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {poses.map((pose, index) => (
                    <Card key={index} className="hover:shadow-card transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl text-foreground">{pose.name}</CardTitle>
                        <p className="text-muted-foreground">{pose.description}</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{pose.duration}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Benefits:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {pose.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-center">
                                <span className="text-green-500 mr-2">•</span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Instructions:</h4>
                          <ol className="text-sm text-muted-foreground space-y-1">
                            {pose.instructions.map((step, i) => (
                              <li key={i} className="flex">
                                <span className="text-primary mr-2 font-medium">{i + 1}.</span>
                                {step}
                              </li>
                            ))}
                          </ol>
                        </div>
                        
                        <div className="bg-accent/10 p-3 rounded-lg">
                          <h4 className="font-semibold text-foreground mb-1 text-sm">⚠️ Precautions:</h4>
                          <p className="text-sm text-muted-foreground">{pose.precautions}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Breathing Exercises Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Breathing Exercises
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Essential breathing techniques to support your pregnancy and prepare for labor
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {breathingExercises.map((exercise, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{exercise.name}</CardTitle>
                  <p className="text-muted-foreground">{exercise.description}</p>
                  <Badge variant="outline">{exercise.duration}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Benefits:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {exercise.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center">
                          <span className="text-green-500 mr-2">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">How to Practice:</h4>
                    <ol className="text-sm text-muted-foreground space-y-1">
                      {exercise.instructions.map((step, i) => (
                        <li key={i} className="flex">
                          <span className="text-primary mr-2 font-medium">{i + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Yoga Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get access to detailed video instructions, trimester-specific routines, and personalized guidance
            </p>
            <Button 
              size="lg" 
              className="px-12 py-6 text-xl font-semibold"
              onClick={() => window.location.href = '/#pricing'}
            >
              Join Our Prenatal Yoga Program
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default YogaExercises;