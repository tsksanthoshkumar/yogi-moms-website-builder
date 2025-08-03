import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import indianWoman1 from "@/assets/indian-woman-1.jpg";
import indianWoman2 from "@/assets/indian-woman-2.jpg";
import indianWoman3 from "@/assets/indian-woman-3.jpg";

const TeamSection = () => {
  const experts = [
    {
      id: 1,
      name: "Ms. Sarah Collins",
      title: "Certified Prenatal Yoga Instructor (English)",
      description: "Helping moms stay active and calm throughout pregnancy. Specializes in prenatal yoga.",
      image: indianWoman1
    },
    {
      id: 2,
      name: "Mrs. Kavita Sharma",
      title: "Prenatal Yoga Expert (Hindi)",
      description: "Guiding Indian moms through breathwork and gentle poses in Hindi. 8+ years experience.",
      image: indianWoman2
    },
    {
      id: 3,
      name: "Dr. Aarti Verma",
      title: "Prenatal Nutritionist & Dietician",
      description: "Custom South & North Indian diet plans for each trimester. Mother of 1. 6+ years experience.",
      image: indianWoman3
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our certified experts are here to guide you through every step of your pregnancy journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experts.map((expert) => (
            <Card key={expert.id} className="shadow-gentle border-0 bg-background/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Circular Image */}
                  <div className="relative">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gradient-primary p-1">
                      <img
                        src={expert.image}
                        alt={expert.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>

                  {/* Expert Details */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">
                      {expert.name}
                    </h3>
                    <p className="text-lg font-medium text-primary">
                      {expert.title}
                    </p>
                    <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                      {expert.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;