import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

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

    const scroll = () => {
      scrollContainer.scrollLeft += 0.5;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      }
    };

    const interval = setInterval(scroll, 50);
    return () => clearInterval(interval);
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

        <div 
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="flex gap-8 pb-4" style={{ width: 'max-content' }}>
            {[...experts, ...experts].map((expert, index) => (
              <Card key={`${expert.id}-${index}`} className="flex-shrink-0 w-80 shadow-gentle border-0 bg-background/90 backdrop-blur-sm rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Circular Image */}
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-purple-400 to-pink-400 p-1">
                        <img
                          src={expert.image}
                          alt={expert.name}
                          className="w-full h-full object-cover rounded-full"
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
    </section>
  );
};

export default TeamSection;