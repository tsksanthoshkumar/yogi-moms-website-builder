import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const {
        error
      } = await supabase.from('prenatlmoms').insert([{
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        payment_status: 'unpaid'
      }]);
      if (error) throw error;
      toast({
        title: "Success!",
        description: "Your information has been submitted successfully. We'll contact you soon!"
      });

      // Fire Facebook Pixel Lead event after successful form submission
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead');
      }
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your information. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      
    </section>;
};
export default ContactForm;