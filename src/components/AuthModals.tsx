
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface AuthModalsProps {
  isSignupOpen: boolean;
  isLoginOpen: boolean;
  onSignupClose: () => void;
  onLoginClose: () => void;
  onSwitchToLogin: () => void;
  onSwitchToSignup: () => void;
}

const AuthModals = ({
  isSignupOpen,
  isLoginOpen,
  onSignupClose,
  onLoginClose,
  onSwitchToLogin,
  onSwitchToSignup
}: AuthModalsProps) => {

  const handleCourseAccess = () => {
    window.open('https://superprofile.bio/course/aryancosmo9', '_blank');
    onSignupClose();
    onLoginClose();
  };

  return (
    <>
      {/* Signup Modal */}
      <Dialog open={isSignupOpen} onOpenChange={onSignupClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-semibold">
              Start Your Healthy Pregnancy Journey
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-center">
            <p className="text-muted-foreground">
              Click below to access your prenatal course and start your wellness journey.
            </p>
            <Button onClick={handleCourseAccess} className="w-full">
              Access Course
            </Button>
            <div className="text-center text-sm">
              Already have an account?{' '}
              <button
                type="button"
                onClick={onSwitchToLogin}
                className="text-primary hover:underline"
              >
                Login here
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Login Modal */}
      <Dialog open={isLoginOpen} onOpenChange={onLoginClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-semibold">
              Welcome Back
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-center">
            <p className="text-muted-foreground">
              Click below to continue with your prenatal course.
            </p>
            <Button onClick={handleCourseAccess} className="w-full">
              Continue to Course
            </Button>
            <div className="text-center text-sm">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={onSwitchToSignup}
                className="text-primary hover:underline"
              >
                Sign up here
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AuthModals;
