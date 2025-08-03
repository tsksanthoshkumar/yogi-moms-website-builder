import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TeamSection = () => {
  const experts = [
    {
      id: 1,
      name: "Ms. Sarah Collins",
      title: "Certified Prenatal Yoga Instructor (English)",
      description: "Specializes in second-trimester yoga sessions",
      image: "/lovable-uploads/3836de99-892e-44a4-9f0e-7cfa9e6d7afd.png"
    },
    {
      id: 2,
      name: "Mrs. Kavita Sharma",
      title: "Prenatal Yoga Expert (Hindi)",
      description: "8+ years guiding Indian moms through breathwork",
      image: "/lovable-uploads/b2a300c0-38c8-4eaf-b1ed-f53db626bae8.png"
    },
    {
      id: 3,
      name: "Dr. Aarti Verma",
      title: "Prenatal Dietician & Nutritionist",
      description: "Trimester-specific diet plans for South/North Indian moms",
      image: "/lovable-uploads/bd78dcf2-ee11-41d7-b974-01cc4f1ab974.png"
    }
  ];

  return (
    <section className="py-20 bg-soft-pink">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Expert Support Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional guidance throughout your pregnancy journey
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {experts.map((expert) => (
                <CarouselItem key={expert.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="border-0 bg-background/80 backdrop-blur-sm shadow-gentle rounded-2xl">
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center text-center space-y-4">
                        {/* Circular Image */}
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-gradient-primary p-0.5">
                          <img
                            src={expert.image}
                            alt={expert.name}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>

                        {/* Expert Details */}
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-foreground">
                            {expert.name}
                          </h3>
                          <p className="text-sm font-medium text-primary">
                            {expert.title}
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {expert.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;