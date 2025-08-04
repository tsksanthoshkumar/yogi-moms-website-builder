import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Show success message
    toast({
      title: "Payment Successful! 🎉",
      description: "You can now log in using the same email and password.",
    });
  }, [toast]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <Card className="shadow-xl border-0">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <CardTitle className="text-2xl font-bold text-green-700">
              Payment Successful!
            </CardTitle>
            <p className="text-muted-foreground">
              Welcome to our prenatal course community
            </p>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-900 mb-2">
                ✅ Payment Confirmed
              </h3>
              <p className="text-sm text-green-800">
                Your ₹1999 payment has been processed successfully. You now have full access to our premium prenatal course content.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">
                🎓 Next Steps
              </h3>
              <p className="text-sm text-blue-800 mb-3">
                You can now log in using the same email and password you used during registration.
              </p>
            </div>

            <div className="space-y-3">
              <Button 
                onClick={() => navigate('/login')}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Login to Your Course
              </Button>
              
              <Button 
                onClick={() => navigate('/')}
                variant="outline"
                className="w-full"
              >
                Back to Home
              </Button>
            </div>

            <div className="text-xs text-muted-foreground">
              <p>
                If you encounter any issues, please contact our support team.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaymentSuccess;