import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const email = localStorage.getItem('userEmail');
    const name = localStorage.getItem('userName');

    if (!isLoggedIn || !email) {
      toast({
        title: "Access Denied",
        description: "Please log in to access the course dashboard.",
        variant: "destructive",
      });
      navigate('/login');
      return;
    }

    setUserEmail(email);
    setUserName(name || 'Student');
  }, [navigate, toast]);

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    localStorage.removeItem('isLoggedIn');
    
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    
    navigate('/');
  };

  const accessCourse = () => {
    // This would typically redirect to your course platform
    // For now, we'll show a success message
    toast({
      title: "Course Access",
      description: "Redirecting to your course content...",
    });
    
    // Example: Redirect to external course platform
    // window.open('https://your-course-platform.com', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome to Your Prenatal Course Dashboard
          </h1>
          <p className="text-muted-foreground">
            Hello {userName}! You now have full access to your premium pregnancy support content.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-green-700">
                🎓 Course Access Confirmed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Congratulations! Your payment has been processed and you now have full access to:
              </p>
              <ul className="space-y-2 text-sm">
                <li>✅ Premium prenatal yoga sessions</li>
                <li>✅ Nutrition guidance for pregnancy</li>
                <li>✅ Breathing and meditation techniques</li>
                <li>✅ Expert consultation access</li>
                <li>✅ Progress tracking tools</li>
              </ul>
              
              <Button 
                onClick={accessCourse}
                className="w-full mt-4 bg-green-600 hover:bg-green-700"
              >
                Access Course Content
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-blue-700">
                📱 Your Account Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Email:</label>
                  <p className="text-foreground">{userEmail}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Name:</label>
                  <p className="text-foreground">{userName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Status:</label>
                  <p className="text-green-600 font-medium">✅ Paid Member</p>
                </div>
              </div>
              
              <Button 
                onClick={handleLogout}
                variant="outline"
                className="w-full mt-4"
              >
                Logout
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-lg mt-6">
          <CardHeader>
            <CardTitle className="text-xl text-purple-700">
              🚀 Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <h3 className="font-medium mb-2">Start Your Journey</h3>
                <p className="text-sm text-muted-foreground">
                  Begin with our prenatal yoga basics
                </p>
              </div>
              <div className="text-center p-4 bg-pink-50 rounded-lg">
                <h3 className="font-medium mb-2">Track Progress</h3>
                <p className="text-sm text-muted-foreground">
                  Monitor your wellness journey
                </p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium mb-2">Expert Support</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with our prenatal experts
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;