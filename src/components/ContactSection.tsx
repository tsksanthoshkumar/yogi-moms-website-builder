import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

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
              <div className="border-t pt-6 mt-6 text-center">
                <p className="text-xs text-muted-foreground mb-3">
                  By purchasing, you agree to our{' '}
                  <Dialog open={isTermsOpen} onOpenChange={setIsTermsOpen}>
                    <DialogTrigger asChild>
                      <Button variant="link" className="p-0 h-auto text-xs underline">
                        Terms of Use
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Terms of Use</DialogTitle>
                      </DialogHeader>
                      <div className="prose prose-sm max-w-none">
                        <p className="whitespace-pre-wrap text-sm">
                          These Terms of Use set out the terms and conditions for use of this prentalmoms ("Website") and any content, Public Forums, or services offered on or through the Website and/or through any mobile application(s) ("Application") (collectively referred to as the "Platform").
                        </p>
                        These Terms of Use apply to end users of the Website (referred to as "Learners", "You", "Your"). These Terms of Use, including the Privacy Policy and any other terms and conditions published on the Platform or communicated to you from time to time (collectively referred to as the "Agreement"), define the relationship and responsibilities between You and Creator (as defined herein) in using the Platform. Your access to the Platform is subject to Your acceptance of this Agreement. Hence, please take Your time to read this Agreement.

                          When we speak of "Creator", 'we', 'us', and 'our', we collectively mean Her Healthcare at Home being the creator of this Platform and the content/materials/services contained therein.

                          By accessing this Platform, You are agreeing to be bound by the terms of this Agreement, all applicable laws and regulations. From time-to-time, versions of the above-mentioned policies and terms are made available on the Platform for Your reference and to understand how we handle Your personal information. By using or visiting the Platform and services provided to You on, from, or through the Platform, You are expressly agreeing to the terms of the Agreement and any other terms that are updated from time to time.

                          If You disagree with any part of this Agreement or do not wish to be bound by the same, then please do not use the Platform in any manner.
                      </div>
                    </DialogContent>
                  </Dialog>
                  {' '}and{' '}
                  <Dialog open={isPrivacyOpen} onOpenChange={setIsPrivacyOpen}>
                    <DialogTrigger asChild>
                      <Button variant="link" className="p-0 h-auto text-xs underline">
                        Privacy Policy
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Privacy Policy</DialogTitle>
                      </DialogHeader>
                      <div className="prose prose-sm max-w-none">
                        <p className="whitespace-pre-wrap text-sm">
                          This Privacy Policy (the "Policy") governs the manner in which the Platform collects, uses, maintains and discloses information of its users. The Policy also describes the practices that We apply to such user information, user's privacy rights and choices regarding their information. To clarify, this Policy applies to all users of the Platform (referred to as "Learners", "You", "Your").
                        </p>
                        By accessing and using the Platform, providing Your Personal Information, or by otherwise signalling Your agreement when the option is presented to You, You consent to the collection, use, and disclosure of information described in this Policy and Terms of Use and we disclaim all the liabilities arising therefrom. If You do not agree with any provisions of this Policy and/or the Terms of Use, You should not access or use the Platform or engage in communications with us and are required to leave the Platform immediately. If any information You have provided or uploaded on the Platform violates the terms of this Policy or Terms of Use, we may be required to delete such information upon informing You of the same and revoke Your access if required without incurring any liability to You. Capitalized terms used but not defined in this Privacy Policy can be found in our Terms of Use. Please read this Policy carefully prior to accessing our Platform and using any of the services or products offered therein. If you have any questions, please contact us at the contact information provided below.
                      </div>
                    </DialogContent>
                  </Dialog>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
