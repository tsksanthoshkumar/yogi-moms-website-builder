import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ProgramSection from "@/components/ProgramSection";
import PricingSection from "@/components/PricingSection";
import TeamSection from "@/components/TeamSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import AuthModals from "@/components/AuthModals";
import { useAuth } from "@/hooks/useAuth";
import FloatingJoinButton from "@/components/FloatingJoinButton";

const Index = () => {
  const auth = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Navigation onLogin={auth.openLogin} onSignup={auth.openSignup} />
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
    </div>
  );
};

export default Index;
