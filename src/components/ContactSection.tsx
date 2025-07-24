import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-gentle">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">
                    Is this safe for first-time mothers?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! Our program is designed specifically for pregnant women of all experience levels, with safety as our top priority.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">
                    When can I start the program?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    You can start at any stage of pregnancy. Our trimester-specific content will guide you appropriately.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">
                    Do I need any special equipment?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Just a yoga mat and comfortable clothing. All exercises can be done at home with basic equipment.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;