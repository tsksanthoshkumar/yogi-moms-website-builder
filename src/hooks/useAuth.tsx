import { useState } from 'react';

export const useAuth = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openSignup = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false);
  };

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsSignupOpen(false);
  };

  const closeSignup = () => setIsSignupOpen(false);
  const closeLogin = () => setIsLoginOpen(false);

  const switchToLogin = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(true);
  };

  const switchToSignup = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(true);
  };

  return {
    isSignupOpen,
    isLoginOpen,
    openSignup,
    openLogin,
    closeSignup,
    closeLogin,
    switchToLogin,
    switchToSignup
  };
};