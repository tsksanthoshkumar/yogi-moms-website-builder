import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Revathi Reddy",
    location: "Hyderabad",
    text: "I started prenatal yoga with this course, and it changed everything. I feel more relaxed, confident, and connected to my baby!",
    rating: "⭐⭐⭐⭐⭐",
    image: "/lovable-uploads/87de229b-5582-4176-9417-635ecc533063.png",
    bgColor: "bg-gradient-to-br from-purple-100 to-purple-200"
  },
  {
    name: "Anita Gupta",
    location: "Delhi",
    text: "As a first-time mother, I was anxious about everything. These yoga sessions gave me confidence and peace. The breathing techniques helped during labor too!",
    rating: "⭐⭐⭐⭐⭐",
    image: "/lovable-uploads/f7028c3d-b8a6-464b-9ad9-c1c1f4930690.png",
    bgColor: "bg-gradient-to-br from-pink-100 to-pink-200"
  },
  {
    name: "Kavitha",
    location: "Bangalore",
    text: "The weekly program was perfect for my schedule. I loved how it adapted to each trimester. My baby and I both stayed healthy throughout!",
    rating: "⭐⭐⭐⭐⭐",
    image: "/lovable-uploads/928db85c-dbca-4c12-8eb7-18dcaa19d078.png",
    bgColor: "bg-gradient-to-br from-blue-100 to-blue-200"
  },
  {
    name: "Pooja",
    location: "Mumbai",
    text: "Good course overall. The yoga poses were helpful and the diet plans were informative. Some sessions could have been more detailed but worth the price.",
    rating: "⭐⭐⭐⭐",
    image: "/lovable-uploads/28e8569d-4e24-4028-bdfa-6a70ac09ad17.png",
    bgColor: "bg-gradient-to-br from-peach-100 to-orange-200"
  },
  {
    name: "Priya Sharma",
    location: "Chennai",
    text: "This yoga course was a blessing during my pregnancy! The gentle exercises helped me stay fit and calm. My delivery was smooth and I felt so prepared.",
    rating: "⭐⭐⭐⭐⭐",
    image: "/lovable-uploads/a9c54145-d61a-4dc6-8d2c-5b924f75aaa5.png",
    bgColor: "bg-gradient-to-br from-green-100 to-green-200"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-10 md:py-20 bg-background animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Mothers Are Saying
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Real stories from our prenatal yoga community
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${testimonial.bgColor} h-full`}>
                    <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                      {/* Profile Section */}
                      <div className="flex items-center mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 rounded-full object-cover border-4 border-white shadow-md mr-3 sm:mr-4"
                        />
                        <div>
                          <h4 className="font-bold text-lg text-foreground">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm font-medium text-muted-foreground">
                            ({testimonial.location})
                          </p>
                        </div>
                      </div>
                      
                      {/* Rating and Verified Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-orange-500 text-lg">
                          {testimonial.rating}
                        </div>
                        <div className="flex items-center bg-green-100 px-2 py-1 rounded-full">
                          <span className="text-green-600 text-sm mr-1">✅</span>
                          <span className="text-green-700 text-xs font-medium">Verified</span>
                        </div>
                      </div>
                      
                      {/* Testimonial Text */}
                      <div className="flex-1">
                        <p className="text-muted-foreground italic text-sm leading-relaxed">
                          "{testimonial.text}"
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <CarouselPrevious className="relative translate-y-0 h-10 w-10 bg-primary hover:bg-primary/90" />
              <CarouselNext className="relative translate-y-0 h-10 w-10 bg-primary hover:bg-primary/90" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;