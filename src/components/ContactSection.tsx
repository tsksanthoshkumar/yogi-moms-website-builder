import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Note: This would require backend integration for actual form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleWhatsApp = () => {
    const message = "Hi! I'm interested in the Prenatal Yoga Course. Can you help me?";
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-gentle bg-gentle-blue border-0">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Support
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get instant answers to your questions via WhatsApp
                </p>
                <Button 
                  variant="default" 
                  size="lg"
                  onClick={handleWhatsApp}
                  className="w-full mb-4"
                >
                  Chat on WhatsApp
                </Button>
                <div className="border-t pt-4 space-y-3">
                  <p className="text-sm text-muted-foreground mb-2">Follow us for daily tips:</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://www.instagram.com/prenatalmoms?igsh=OGx3ZXNnb3JhaTA=', '_blank')}
                    className="w-full"
                  >
                    📸 Instagram
                  </Button>
                  <div className="text-xs text-muted-foreground pt-2">
                    <p>By purchasing, you agree to our Terms of Use and Refund Policy</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-gentle">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">
                      Is this safe for first-time mothers?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Absolutely! Our program is designed specifically for pregnant women of all experience levels, with safety as our top priority.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">
                      When can I start the program?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      You can start at any stage of pregnancy. Our trimester-specific content will guide you appropriately.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">
                      Do I need any special equipment?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Just a yoga mat and comfortable clothing. All exercises can be done at home with basic equipment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;