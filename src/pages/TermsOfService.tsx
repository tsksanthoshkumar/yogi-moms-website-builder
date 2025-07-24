import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        
        <Card className="shadow-gentle">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Privacy Policy & Terms of Service
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <div>
              <p className="text-muted-foreground mb-6">
                This Privacy Policy outlines how we collect, use, store, and share your personal information when you use our platform. By using the platform, you agree to the terms in this policy. If you do not agree, please stop using the platform immediately.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">What We Collect</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Personal Information:</h4>
                  <p className="text-muted-foreground">Name, email, age, gender, location, phone number, etc.</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Sensitive Information:</h4>
                  <p className="text-muted-foreground">Passwords, health data, official IDs (like Aadhaar), etc.</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Non-Personal Data:</h4>
                  <p className="text-muted-foreground">Browser type, device info, cookies, etc.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">How We Use Your Information</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>To provide and improve services</li>
                <li>To communicate with you</li>
                <li>To enhance platform security</li>
                <li>To comply with legal obligations</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We do not sell your data. Data may be shared with trusted partners only when necessary (e.g., payment processors, legal requests).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Your Choices & Rights</h3>
              <p className="text-muted-foreground mb-3">You can:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Access, update, or delete your data</li>
                <li>Limit what you share</li>
                <li>Opt out of marketing</li>
                <li>Control cookie settings</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Depending on your region (India, EU, UK, USA), you may have specific legal rights like data portability, correction, erasure, and objection to processing.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Data Storage & Security</h3>
              <p className="text-muted-foreground">
                Your data is stored securely (mostly in India via AWS) and retained only as long as necessary. We use reasonable measures to prevent unauthorized access or misuse.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Third-Party Links</h3>
              <p className="text-muted-foreground">
                We're not responsible for the privacy practices of third-party sites linked on our platform.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Policy Updates</h3>
              <p className="text-muted-foreground">
                We may update this policy from time to time. Please check the latest version on our platform.
              </p>
            </div>

            <div className="border-t pt-6 mt-8">
              <p className="text-sm text-muted-foreground text-center">
                For questions or concerns about this policy, please contact us at: bharti.goel@herhealthcareathome.com
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;