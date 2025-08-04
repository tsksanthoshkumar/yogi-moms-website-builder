import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useNavigate, Link } from "react-router-dom";
import bcrypt from 'bcryptjs';
const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '+91'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Validate passwords match
      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Error",
          description: "Passwords do not match",
          variant: "destructive"
        });
        return;
      }

      // Hash password
      const passwordHash = await bcrypt.hash(formData.password, 10);

      // Save to form_fill table
      const {
        error
      } = await supabase.from('form_fill').insert([{
        full_name: formData.fullName,
        email: formData.email,
        password_hash: passwordHash,
        phone: formData.phone,
        is_paid: false
      }]);
      if (error) throw error;
      toast({
        title: "Registration Successful!",
        description: "Please complete the payment to access your course."
      });

      // Open Razorpay payment
      openRazorpayPayment();
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: error.message || "There was an error registering. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const openRazorpayPayment = () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', 'pl_R0yx50DSbxhnSD');
    script.async = true;
    script.onload = () => {
      // Payment script loaded
      console.log('Razorpay script loaded');
    };
    document.body.appendChild(script);

    // Create a temporary form to trigger payment
    const tempForm = document.createElement('form');
    tempForm.style.display = 'none';
    tempForm.appendChild(script);
    document.body.appendChild(tempForm);

    // Clean up after 5 seconds
    setTimeout(() => {
      document.body.removeChild(tempForm);
    }, 5000);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <Card className="shadow-xl border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-foreground">Join our Prenatal Yoga  for Moms-to-Be</CardTitle>
            <p className="text-muted-foreground">
              Sign up and pay ₹1999 to access premium pregnancy support content
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" name="fullName" type="text" value={formData.fullName} onChange={handleChange} required placeholder="Enter your full name" />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email" />
              </div>
              
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" value={formData.password} onChange={handleChange} required placeholder="Create a secure password" />
              </div>
              
              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} required placeholder="Confirm your password" />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91XXXXXXXXXX" />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Registering...' : 'Register & Pay ₹1999'}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link to="/login" className="text-primary hover:underline">
                  Sign in here
                </Link>
              </p>
            </div>

            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">Payment Instructions:</h3>
              <ol className="text-sm text-blue-800 space-y-1">
                <li>1. Fill the registration form above</li>
                <li>2. Click "Register & Pay ₹1999"</li>
                <li>3. Complete payment </li>
                <li>4. Use the same email/password to login to access the course</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default Signup;