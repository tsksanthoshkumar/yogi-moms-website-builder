import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useNavigate, Link } from "react-router-dom";
import bcrypt from 'bcryptjs';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check user credentials in prenatal_users table
      const { data: userRecord, error } = await supabase
        .from('prenatal_users')
        .select('*')
        .eq('email', formData.email)
        .single();

      if (error || !userRecord) {
        toast({
          title: "Error",
          description: "Invalid email or user not found. Please sign up first.",
          variant: "destructive",
        });
        return;
      }

      // Verify password
      const passwordMatch = await bcrypt.compare(formData.password, userRecord.password_hash);
      
      if (!passwordMatch) {
        toast({
          title: "Error",
          description: "Invalid password. Please try again.",
          variant: "destructive",
        });
        return;
      }

      // Check if payment is completed
      if (userRecord.payment_status !== 'paid') {
        toast({
          title: "Payment Required",
          description: "Please complete the ₹1999 payment to access the course.",
          variant: "destructive",
        });
        
        // Redirect to payment
        window.open('https://razorpay.me/@pre-natalyoga?amount=zgioswZa9n4qt5x9yD7i%2BQ%3D%3D', '_blank');
        return;
      }

      // Successful login - create session
      localStorage.setItem('userEmail', userRecord.email);
      localStorage.setItem('userName', userRecord.full_name);
      localStorage.setItem('isLoggedIn', 'true');

      toast({
        title: "Login Successful!",
        description: "Welcome back! Redirecting to your course dashboard.",
      });

      navigate('/dashboard');
      
    } catch (error: any) {
      console.error('Error logging in:', error);
      toast({
        title: "Error",
        description: "There was an error logging in. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const showPaymentOption = (email: string) => {
    // Show payment instructions
    const paymentDiv = document.createElement('div');
    paymentDiv.innerHTML = `
      <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white p-6 rounded-lg max-w-md mx-4">
          <h3 class="text-lg font-bold mb-4">Payment Required</h3>
          <p class="mb-4">Please complete the ₹1999 payment to access your course content.</p>
          <form>
            <script src="https://checkout.razorpay.com/v1/payment-button.js" 
              data-payment_button_id="pl_R0yx50DSbxhnSD" async>
            </script>
          </form>
          <button onclick="this.parentElement.parentElement.remove()" 
            class="mt-4 bg-gray-500 text-white px-4 py-2 rounded">
            Close
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(paymentDiv);
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
              Login to Your Course
            </CardTitle>
            <p className="text-muted-foreground">
              Access your premium pregnancy support content
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  placeholder="Enter your password"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Logging in...' : 'Login to Course'}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link to="/signup" className="text-primary hover:underline">
                  Sign up here
                </Link>
              </p>
            </div>

            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <h3 className="font-medium text-green-900 mb-2">✅ After Payment Success:</h3>
              <p className="text-sm text-green-800">
                "Payment successful! You can now log in using the same email and password."
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;