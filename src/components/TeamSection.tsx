import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TeamSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

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

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let lastTime = 0;
    const scrollSpeed = 0.3; // Reduced speed for smoother animation

    const scroll = (currentTime: number) => {
      if (currentTime - lastTime >= 16) { // ~60fps
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
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
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

        {/* Mobile Navigation Buttons */}
        <div className="flex justify-center items-center mt-8 space-x-4 md:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className="h-12 w-12 rounded-full shadow-gentle"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollRight}
            disabled={!canScrollRight}
            className="h-12 w-12 rounded-full shadow-gentle"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div 
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide smooth-scroll"
          style={{ 
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <div className="flex gap-8 pb-4 transition-transform duration-300 ease-linear" style={{ width: 'max-content' }}>
            {[...experts, ...experts].map((expert, index) => (
              <Card key={`${expert.id}-${index}`} className="flex-shrink-0 w-80 shadow-gentle border-0 bg-background/90 backdrop-blur-sm rounded-2xl transform transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Circular Image */}
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-purple-400 to-pink-400 p-1 transition-transform duration-300">
                        <img
                          src={expert.image}
                          alt={expert.name}
                          className="w-full h-full object-cover rounded-full transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* Expert Details */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {expert.name}
                      </h3>
                      <p className="text-base font-medium text-primary">
                        {expert.title}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {expert.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .smooth-scroll {
          scroll-snap-type: x mandatory;
        }
        
        .smooth-scroll > div > div {
          scroll-snap-align: center;
        }
        
        @media (max-width: 768px) {
          .smooth-scroll {
            -webkit-overflow-scrolling: touch;
            scroll-behavior: smooth;
          }
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;