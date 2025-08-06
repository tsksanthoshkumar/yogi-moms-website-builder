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
  const { toast } = useToast();
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

      // Save to prenatlmoms table
      const { error } = await supabase.from('prenatlmoms').insert([{
        full_name: formData.fullName,
        email: formData.email,
        password_hash: passwordHash,
        phone: formData.phone,
        payment_status: 'unpaid'
      }]);
      
      if (error) throw error;
      
      toast({
        title: "Registration Successful!",
        description: "Proceeding to payment..."
      });

      // Redirect to Razorpay payment link
      window.open('https://razorpay.me/@pre-natalyoga?amount=zgioswZa9n4qt5x9yD7i%2BQ%3D%3D', '_blank');
      
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

  const handlePayNow = () => {
    // Direct users to the Razorpay payment link
    window.open('https://razorpay.me/@pre-natalyoga?amount=zgioswZa9n4qt5x9yD7i%2BQ%3D%3D', '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <Card className="shadow-xl border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-foreground">
              Join Course (₹1999)
            </CardTitle>
            <p className="text-muted-foreground">
              Fill the form and pay ₹1999 to start your pregnancy journey
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input 
                  id="fullName" 
                  name="fullName" 
                  type="text" 
                  value={formData.fullName} 
                  onChange={handleChange} 
                  required 
                  placeholder="Enter your full name" 
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="Enter your email" 
                />
              </div>
              
              <div>
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  name="password" 
                  type="password" 
                  value={formData.password} 
                  onChange={handleChange} 
                  required 
                  placeholder="Create a secure password" 
                />
              </div>
              
              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input 
                  id="confirmPassword" 
                  name="confirmPassword" 
                  type="password" 
                  value={formData.confirmPassword} 
                  onChange={handleChange} 
                  required 
                  placeholder="Confirm your password" 
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder="+91XXXXXXXXXX" 
                />
              </div>
              
              <div className="space-y-3">
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Registering...' : 'Register & Pay ₹1999'}
                </Button>
                
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full" 
                  onClick={handlePayNow}
                  disabled={isSubmitting}
                >
                  Pay Now (₹1999)
                </Button>
              </div>
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
              <h3 className="font-medium text-blue-900 mb-2">Two Ways to Join:</h3>
              <ol className="text-sm text-blue-800 space-y-2">
                <li><strong>Option 1:</strong> Fill form → Click "Register & Pay ₹1999" → Auto-redirect to payment</li>
                <li><strong>Option 2:</strong> Click "Pay Now" → Complete payment → Fill details later</li>
                <li>After payment, use your email/password to login and access the course</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;