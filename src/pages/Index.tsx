import React, { lazy, Suspense } from 'react';
import Navigation from "@/components/Navigation";
import { useAuth } from "@/hooks/useAuth";

// Lazy load components for better performance
const HeroSection = lazy(() => import("@/components/HeroSection"));
const BenefitsSection = lazy(() => import("@/components/BenefitsSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ProgramSection = lazy(() => import("@/components/ProgramSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const TeamSection = lazy(() => import("@/components/TeamSection"));
const ContactForm = lazy(() => import("@/components/ContactForm"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppFloat = lazy(() => import("@/components/WhatsAppFloat"));
const AuthModals = lazy(() => import("@/components/AuthModals"));
const FloatingJoinButton = lazy(() => import("@/components/FloatingJoinButton"));

const Index = () => {
  const auth = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Navigation onLogin={auth.openLogin} onSignup={auth.openSignup} />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <HeroSection onSignup={auth.openSignup} />
        <BenefitsSection />
        <ProgramSection />
        <div id="reviews">
          <TestimonialsSection />
        </div>
        <PricingSection onSignup={auth.openSignup} />
        <TeamSection />
        <Footer />
        <WhatsAppFloat />
        <FloatingJoinButton />
        <AuthModals 
          isSignupOpen={auth.isSignupOpen}
          isLoginOpen={auth.isLoginOpen}
          onSignupClose={auth.closeSignup}
          onLoginClose={auth.closeLogin}
          onSwitchToLogin={auth.switchToLogin}
          onSwitchToSignup={auth.switchToSignup}
        />
      </Suspense>
    </div>
  );
};

export default Index;
