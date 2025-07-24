import React from 'react';
// Using uploaded image instead of founder.jpg

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-soft-pink">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Our Story & Mission
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                As a certified yoga instructor and mother of two, I understand the unique challenges 
                that Indian women face during pregnancy. The lack of accessible, safe, and culturally 
                appropriate prenatal yoga resources inspired me to create this program.
              </p>
              <p>
                Our mission is simple: <strong className="text-foreground">Supporting Indian mothers through 
                safe, affordable yoga practices</strong> that honor our traditions while embracing modern 
                wellness techniques.
              </p>
              <p>
                Every exercise, meditation, and breathing technique has been carefully designed to be 
                safe for pregnancy and suitable for women of all fitness levels. We believe every 
                expecting mother deserves access to wellness that fits her lifestyle and budget.
              </p>
            </div>
            <div className="mt-8 p-6 bg-background rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">What Makes Our Course Special</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✨ Designed specifically for Indian women</li>
                <li>✨ Culturally sensitive approach to wellness</li>
                <li>✨ Affordable One-Time Payment model</li>
                <li>✨ Husband-inclusive activities</li>
                <li>✨ Community support through WhatsApp groups</li>
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2 text-center">
            <img 
              src="/lovable-uploads/a7cc4eb2-e3a5-48c2-8eb4-4600d8373239.png" 
              alt="Yoga instructor and founder" 
              className="w-80 h-80 rounded-full mx-auto shadow-card object-cover"
            />
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-foreground">Dr. Meera Patel</h3>
              <p className="text-muted-foreground">Certified Prenatal Yoga Instructor</p>
              <p className="text-sm text-muted-foreground mt-2">
                10+ years experience | Mother of 2 | RYT-500 Certified
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;