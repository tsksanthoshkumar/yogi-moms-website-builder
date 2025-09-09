import React from 'react';
import { Button } from "@/components/ui/button";

const FloatingJoinButton = () => {
  const handleJoinNow = () => {
    window.open('https://superprofile.bio/course/prenatalmoms', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <Button
        onClick={handleJoinNow}
        className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 min-w-[200px] justify-between"
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-bold">18 spots left</span>
        </div>
        <span className="text-lg font-bold">Join Now</span>
      </Button>
    </div>
  );
};

export default FloatingJoinButton;