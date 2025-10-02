import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Play, Lock, CircleCheck as CheckCircle } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import heroYoga from "@/assets/hero-yoga-new.webp";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import Footer from "@/components/Footer";

// Testimonial images
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.png";
import testimonial5 from "@/assets/testimonial-5.png";
import testimonial6 from "@/assets/testimonial-6.png";
import testimonial7 from "@/assets/testimonial-7.jpg";
import testimonial8 from "@/assets/testimonial-8.jpg";
import testimonial9 from "@/assets/testimonial-9.jpg";

const CoursePage = () => {
  const navigate = useNavigate();
  const [expandedSection, setExpandedSection] = useState<string>("");

  const courseContent = [
    {
      title: "Prenatal Yoga for Trimester I",
      items: [
        { name: "Meditation Music", free: false },
        { name: "Pilates Workout I", free: false },
        { name: "Pilates Workout II", free: false },
        { name: "Yoga I", free: false },
        { name: "Yoga II", free: false },
        { name: "Yoga to beat Fatigue", free: false },
        { name: "Yoga to Relieve Tension", free: false },
        { name: "Full Body Workout I", free: false },
        { name: "Full Body Workout II", free: false },
        { name: "Morning Energizer Routine", free: false },
        { name: "Evening Relaxation Yoga", free: false },
        { name: "Breathing Techniques for First Trimester", free: false },
        { name: "Gentle Stretches for Early Pregnancy", free: false },
        { name: "Core Stability Exercises", free: false },
        { name: "Pelvic Floor Awareness", free: false }
      ]
    },
    {
      title: "Prenatal Yoga for Trimester II",
      items: [
        { name: "Pilates Workout", free: false },
        { name: "Yoga for Stress Relief", free: false },
        { name: "Workout for Back & Hip Pain", free: false },
        { name: "Workout for Diastasis Relief", free: false },
        { name: "Workout using Band", free: false },
        { name: "Workout for Sciatica Pain", free: false },
        { name: "Balance & Stability Exercises", free: false },
        { name: "Prenatal Cardio Workout", free: false },
        { name: "Upper Body Strengthening", free: false },
        { name: "Lower Body Toning", free: false },
        { name: "Yoga for Better Sleep", free: false },
        { name: "Breathing for Labor Preparation", free: false },
        { name: "Partner Exercises", free: false },
        { name: "Meditation for Baby Connection", free: false },
        { name: "Posture Improvement Exercises", free: false }
      ]
    },
    {
      title: "Prenatal Yoga for Trimester III",
      items: [
        { name: "Morning Yoga", free: false },
        { name: "Yoga for Natural Birth", free: false },
        { name: "Yoga for Stress Relief", free: false },
        { name: "Workout for Glutes", free: false },
        { name: "Workout for Pelvic Floor & Hip Opening", free: false },
        { name: "Stretches", free: false },
        { name: "General Workout", free: false },
        { name: "Labor Preparation Exercises", free: false },
        { name: "Birthing Ball Exercises", free: false },
        { name: "Final Weeks Gentle Movement", free: false }
      ]
    },
    {
      title: "Prenatal Yoga in Hindi",
      items: [
        { name: "प्राणायाम अभ्यास (Breathing Exercises)", free: false },
        { name: "पहली तिमाही योग - भाग 1 (First Trimester Yoga - Part 1)", free: false },
        { name: "पहली तिमाही योग - भाग 2 (First Trimester Yoga - Part 2)", free: false },
        { name: "दूसरी तिमाही योग - भाग 1 (Second Trimester Yoga - Part 1)", free: false },
        { name: "दूसरी तिमाही योग - भाग 2 (Second Trimester Yoga - Part 2)", free: false },
        { name: "तीसरी तिमाही योग - भाग 1 (Third Trimester Yoga - Part 1)", free: false },
        { name: "तीसरी तिमाही योग - भाग 2 (Third Trimester Yoga - Part 2)", free: false },
        { name: "कब्ज और एसिडिटी के लिए योग (Yoga for Constipation & Acidity)", free: false },
        { name: "पीठ दर्द के लिए योग (Yoga for Back Pain)", free: false },
        { name: "गर्भावस्था में सूजन के लिए योग (Yoga for Swelling)", free: false },
        { name: "सामान्य प्रसव के लिए योग (Yoga for Normal Delivery)", free: false },
        { name: "नौवें महीने का विशेष योग (9th Month Special Yoga)", free: false },
        { name: "श्रोणि तल व्यायाम (Pelvic Floor Exercises)", free: false },
        { name: "तनाव मुक्ति योग (Stress Relief Yoga)", free: false },
        { name: "सुबह की दिनचर्या (Morning Routine)", free: false },
        { name: "शाम की दिनचर्या (Evening Routine)", free: false },
        { name: "गर्भावस्था में ध्यान (Pregnancy Meditation)", free: false },
        { name: "शिशु से जुड़ाव बढ़ाने के अभ्यास (Baby Bonding Exercises)", free: false },
        { name: "प्रसव की तैयारी (Labor Preparation)", free: false },
        { name: "साँस लेने की तकनीक (Breathing Techniques)", free: false },
        { name: "कोमल व्यायाम (Gentle Exercises)", free: false },
        { name: "शक्ति प्रशिक्षण (Strength Training)", free: false },
        { name: "लचीलापन बढ़ाने के व्यायाम (Flexibility Exercises)", free: false },
        { name: "संतुलन अभ्यास (Balance Practice)", free: false },
        { name: "अंतिम सप्ताह की तैयारी (Final Weeks Preparation)", free: false }
      ]
    },
    {
      title: "Resources, Videos and PDFs - Diet plans, Husband's Guide, Journal and Pregnancy guide & many more.",
      items: [
        { name: "Complete Pregnancy Journal", free: false },
        { name: "Trimester-wise Diet Plans", free: false },
        { name: "Hospital Bag Checklist", free: false },
        { name: "Father's Support Guide", free: false },
        { name: "Labor & Delivery Preparation Guide", free: false }
      ]
    }
  ];

  const testimonials = [
    {
      name: "P. Rituu",
      rating: 5,
      image: testimonial1,
      text: "This was my first pregnancy and I had no idea what to expect. The gentle stretches and meditation helped me connect with my baby every day. I felt so confident and prepared for labour because of these sessions."
    },
    {
      name: "Keerthi",
      rating: 4,
      image: testimonial2,
      text: "I feel better, more confident. My husband planned small games for me by following the guide. Nice content, joined in 7th month, still worth the money."
    },
    {
      name: "Madhavi",
      rating: 5,
      image: testimonial3,
      text: "Good course! I really liked the diet plans for every trimester."
    },
    {
      name: "Lalith P.",
      rating: 5,
      image: testimonial4,
      text: "I would feel tired after walking just a little. Now, I can do my daily chores without panting. The exercises gave me a deep connection with my baby during meditation. Beautiful experience."
    },
    {
      name: "Anjali",
      rating: 5,
      image: testimonial5,
      text: "I was scared of normal delivery but the breathing exercises gave me confidence. I delivered a healthy baby girl last month, and my recovery was much faster than I expected."
    },
    {
      name: "Archana",
      rating: 4,
      image: testimonial6,
      text: "We played the 'name the baby' game – so many funny ideas came up!"
    },
    {
      name: "Harshitha",
      rating: 5,
      image: testimonial7,
      text: "Today my baby kicked right when I started the breathing exercise. Noted it in my journal – such a nice feeling recording every step. Thank you so much for this!"
    },
    {
      name: "Parul Jain",
      rating: 5,
      image: testimonial8,
      text: "Made me feel connected to my baby every single day. Very well-structured. Worth every rupee. I'd recommend this to every mom-to-be."
    },
    {
      name: "Bharathi",
      rating: 4,
      image: testimonial9,
      text: "The content is good, it helps me move and stay active."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-lavender-50 to-cream-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-pink-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.location.href = '/'}
                className="text-pink-600 hover:bg-pink-100"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                <img 
                  src="/lovable-uploads/86701dd5-d52f-4fed-9baa-a7fea1be56c1.png" 
                  alt="PrenatalMom's" 
                  className="w-8 h-8 md:w-10 md:h-10"
                />
                <span className="font-bold text-lg md:text-xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  PrenatalMom's
                </span>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <button className="text-gray-700 hover:text-pink-600 transition-colors">Home</button>
              <button className="text-gray-700 hover:text-pink-600 transition-colors">Course Content</button>
              <button className="text-gray-700 hover:text-pink-600 transition-colors">Testimonials</button>
              <button className="text-gray-700 hover:text-pink-600 transition-colors">Contact</button>
            </nav>

            <Button 
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg"
              onClick={() => {
                // Track Facebook Pixel purchase event
                if (typeof window !== 'undefined' && window.fbq) {
                  window.fbq('track', 'InitiateCheckout', {
                    value: 499,
                    currency: 'INR',
                    content_type: 'product',
                    content_ids: ['prenatal-yoga-course']
                  });
                }
                window.open('https://rzp.io/rzp/prenatal-mom', '_blank');
              }}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                All-in-One <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Pregnancy Care</span> Package
              </h1>
              <p className="text-lg text-gray-600">
                India's most loved and complete pregnancy course that takes care of you and your baby at every step.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="text-3xl md:text-4xl font-bold text-pink-600">₹499</div>
                <div className="text-xl text-gray-400 line-through">₹1,999</div>
                <Badge className="bg-green-100 text-green-700 border-green-300">
                  Lifetime Access
                </Badge>
              </div>

              <Button 
                size="lg"
                className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white shadow-xl text-lg py-6"
                onClick={() => {
                  // Track Facebook Pixel purchase event
                  if (typeof window !== 'undefined' && window.fbq) {
                    window.fbq('track', 'InitiateCheckout', {
                      value: 499,
                      currency: 'INR',
                      content_type: 'product',
                      content_ids: ['prenatal-yoga-course']
                    });
                  }
                  window.open('https://rzp.io/rzp/prenatal-mom', '_blank');
                }}
              >
                Buy Now - Start Your Journey
              </Button>
              
              {/* Social proof section */}
              <div className="mt-6 flex items-center gap-3 bg-pink-50 rounded-full px-6 py-3 border border-pink-200">
                <div className="flex -space-x-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-white overflow-hidden">
                    <img 
                      src={testimonial1}
                      alt="Happy pregnant mother" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-white overflow-hidden">
                    <img 
                      src={testimonial2}
                      alt="Happy pregnant mother" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-white overflow-hidden">
                    <img 
                      src={testimonial3}
                      alt="Happy pregnant mother" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-white overflow-hidden">
                    <img 
                      src={testimonial4}
                      alt="Happy pregnant mother" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-sm">
                  <span className="font-bold text-pink-700">279+ mothers</span>
                  <span className="text-gray-600"> joined this week</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroYoga}
                alt="Pregnant woman doing yoga" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-200/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 md:py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            What's Included in Your Package
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: "🧘‍♀️", title: "Pregnancy-Safe Yoga Videos", desc: "English & Hindi" },
              { icon: "🍛", title: "Custom Diet Plans", desc: "For Indian Moms" },
              { icon: "❤️", title: "Husband Support Guide", desc: "Complete partner guide" },
              { icon: "🏡", title: "5 Daily Activities for Dads", desc: "Fun, Care, Couple Games" },
              { icon: "👜", title: "Hospital Bag Checklist", desc: "Essential items list" },
              { icon: "📔", title: "Pregnancy Journal", desc: "Track your journey" },
              { icon: "🎁", title: "Free Bonus Worth ₹7,000", desc: "Limited Time Offer" }
            ].map((item, index) => (
              <Card key={index} className="border-pink-100 hover:shadow-lg transition-all hover:scale-105 bg-gradient-to-br from-white to-pink-50">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Complete Course Content
          </h2>
          
          <Accordion 
            type="single" 
            collapsible 
            value={expandedSection}
            onValueChange={setExpandedSection}
            className="space-y-4"
          >
            {courseContent.map((section, index) => (
              <AccordionItem 
                key={index} 
                value={`section-${index}`}
                className="bg-white rounded-xl shadow-md border-pink-100"
              >
                <AccordionTrigger className="px-6 hover:bg-pink-50 rounded-t-xl">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-semibold text-left">{section.title}</span>
                    <Badge variant="secondary" className="ml-2">
                      {section.title.includes('Hindi') ? '40' : section.items.length} {section.title.includes('Resources') ? 'Resources' : 'Videos'}
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-2 pt-2">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50">
                        <div className="flex items-center gap-3">
                          <Lock className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-700">{item.name}</span>
                        </div>
                        <Badge variant="outline" className="text-gray-500 border-gray-300">
                          Locked
                        </Badge>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-lavender-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            What Moms Are Saying
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur border-pink-100 hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-pink-200">
                      <img 
                        src={testimonial.image} 
                        alt={`${testimonial.name}'s photo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}>
                          ⭐
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="font-semibold text-gray-800">– {testimonial.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-100 to-purple-100 border-t border-pink-200">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center gap-6 text-gray-700">
              <a href="mailto:prenatalyogaa@gmail.com" className="hover:text-pink-600">
                prenatalyogaa@gmail.com
              </a>
              <span>|</span>
              <a href="tel:+917013805271" className="hover:text-pink-600">
                +91 7013805271
              </a>
            </div>
            
          </div>
        </div>
      </footer>
      
      {/* WhatsApp Floating Button */}
      <WhatsAppFloatButton />
    </div>
  );
};

export default CoursePage;