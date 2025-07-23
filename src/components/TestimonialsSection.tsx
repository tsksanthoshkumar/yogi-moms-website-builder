import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "This yoga course was a blessing during my pregnancy! The gentle exercises helped me stay fit and calm. My delivery was smooth and I felt so prepared.",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    name: "Anita Gupta",
    location: "Delhi",
    text: "As a first-time mother, I was anxious about everything. These yoga sessions gave me confidence and peace. The breathing techniques helped during labor too!",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    name: "Kavitha Reddy",
    location: "Bangalore",
    text: "The weekly program was perfect for my schedule. I loved how it adapted to each trimester. Even my husband joined for some sessions!",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    name: "Meera Patel",
    location: "Ahmedabad",
    text: "Good course overall. The yoga poses were helpful and the diet plans were informative. Some sessions could have been more detailed but worth the price.",
    rating: "⭐⭐⭐⭐"
  },
  {
    name: "Sunita Roy",
    location: "Kolkata",
    text: "Wonderful experience! The pregnancy journal helped me document my journey beautifully. The husband support guide made my partner more involved too.",
    rating: "⭐⭐⭐⭐⭐"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Mothers Are Saying
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from our prenatal yoga community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-border shadow-gentle hover:shadow-card transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4 text-lg">{testimonial.rating}</div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;