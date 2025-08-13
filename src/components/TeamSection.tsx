import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TeamSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  const experts = [
    {
      id: 1,
      name: "Ms. Sarah Collins",
      title: "Certified Prenatal Yoga Instructor (English)",
      description: "Specializes in second-trimester yoga sessions",
      image: "/lovable-uploads/10cc6f28-c65c-4143-9d85-99c9392b68db.png"
    },
    {
      id: 2,
      name: "Mrs. Kavita Sharma",
      title: "Prenatal Yoga Expert (Hindi)",
      description: "8+ years guiding Indian moms through breathwork",
      image: "/lovable-uploads/685fcc7f-3a9a-4c04-ad70-07dc40dc82b5.png"
    },
    {
      id: 3,
      name: "Dr. Aarti Verma",
      title: "Prenatal Dietician & Nutritionist",
      description: "Trimester-specific diet plans for South/North Indian moms",
      image: "/lovable-uploads/c99c9876-9b62-494f-b389-0cf6b75c9705.png"
    }
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll functionality (only on desktop)
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !isAutoScrolling || isMobile) return;

    setIsAutoScrolling(true);

    let animationId: number;
    let lastTime = 0;
    const scrollSpeed = 0.2;

    const scroll = (currentTime: number) => {
      if (currentTime - lastTime >= 16) {
        scrollContainer.scrollLeft += scrollSpeed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        }
        lastTime = currentTime;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isAutoScrolling, isMobile]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      setIsAutoScrolling(false);
      const scrollAmount = isMobile ? 280 : 300;
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      // Resume auto-scroll after 3 seconds
      if (!isMobile) {
        setTimeout(() => setIsAutoScrolling(true), 3000);
      }
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      setIsAutoScrolling(false);
      const scrollAmount = isMobile ? 280 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      // Resume auto-scroll after 3 seconds
      if (!isMobile) {
        setTimeout(() => setIsAutoScrolling(true), 3000);
      }
    }
  };

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons();
      return () => scrollContainer.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  // Pause auto-scroll on user interaction
  const handleUserInteraction = () => {
    if (!isMobile) {
      setIsAutoScrolling(false);
      setTimeout(() => setIsAutoScrolling(true), 5000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our certified experts are here to guide you through every step of your pregnancy journey
          </p>
        </div>

        {/* Mobile Navigation Buttons - Always visible on mobile */}
        <div className="flex justify-center items-center mb-6 space-x-4 md:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className="h-10 w-10 rounded-full shadow-lg bg-white hover:bg-gray-50 disabled:opacity-30 border-2 border-primary/20"
          >
            <ChevronLeft className="h-4 w-4 text-primary" />
          </Button>
          <div className="text-xs text-muted-foreground font-medium">
            Swipe to see all experts
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollRight}
            disabled={!canScrollRight}
            className="h-10 w-10 rounded-full shadow-lg bg-white hover:bg-gray-50 disabled:opacity-30 border-2 border-primary/20"
          >
            <ChevronRight className="h-4 w-4 text-primary" />
          </Button>
        </div>

        <div 
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide smooth-scroll"
          style={{ 
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            scrollSnapType: 'x mandatory'
          }}
          onTouchStart={handleUserInteraction}
          onMouseDown={handleUserInteraction}
        >
          <div className="flex gap-4 md:gap-6 pb-4 px-4 md:px-0" style={{ minWidth: 'max-content' }}>
            {/* Show only original experts on mobile, duplicates on desktop */}
            {(isMobile ? experts : [...experts, ...experts]).map((expert, index) => (
              <Card 
                key={`${expert.id}-${index}`} 
                className="flex-shrink-0 w-72 md:w-80 shadow-gentle border-0 bg-background/95 backdrop-blur-sm rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ scrollSnapAlign: 'center' }}
              >
                <CardContent className="p-4 md:p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Circular Image */}
                    <div className="relative">
                      <div className="w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden bg-gradient-to-br from-purple-400 to-pink-400 p-1 transition-transform duration-300">
                        <img
                          src={expert.image}
                          alt={expert.name}
                          className="w-full h-full object-cover rounded-full transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* Expert Details */}
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-bold text-foreground">
                        {expert.name}
                      </h3>
                      <p className="text-xs md:text-base font-medium text-primary">
                        {expert.title}
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {expert.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Desktop hint - only show when auto-scroll is active */}
        <div className="hidden md:block text-center mt-4" style={{ opacity: isAutoScrolling ? 1 : 0.7 }}>
          <p className="text-sm text-muted-foreground">
            {isAutoScrolling ? 'Cards auto-scroll • Hover to pause' : 'Hover over cards to resume auto-scroll'}
          </p>
        </div>
      </div>
      
      <style jsx>{`
        .smooth-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
          scroll-padding: 16px;
        }
        
        .smooth-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;