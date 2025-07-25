import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary/5 border-b">
        <div className="container mx-auto px-4 py-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')} 
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
            Terms of Service
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          
          {/* Privacy Policy Section */}
          <div id="privacy-policy" className="mb-12 p-8 bg-card rounded-lg shadow-gentle">
            <h2 className="text-2xl font-bold text-foreground mb-6">Privacy Policy (Summary)</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                This Privacy Policy explains how we collect, use, and protect your personal information when you use our platform. By using our services, you agree to the practices described below.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What We Collect</h3>
              <p>We may collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email, phone number, etc.</li>
                <li><strong>Sensitive Information:</strong> Only when necessary (e.g. for support or legal compliance).</li>
                <li><strong>Non-personal Data:</strong> Browser info, device data, and cookies.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How We Use Your Data</h3>
              <p>We use your data to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our services</li>
                <li>Respond to inquiries and support requests</li>
                <li>Prevent fraud or misuse</li>
                <li>Send you relevant updates (you can opt out anytime)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Data Sharing</h3>
              <p>We do not sell your personal data. We may share it with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Trusted partners to operate the platform</li>
                <li>Authorities if required by law</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Your Rights</h3>
              <p>You can:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access, correct, or delete your information</li>
                <li>Limit or opt-out of marketing emails</li>
                <li>Disable cookies through your browser</li>
              </ul>
              <p>Some rights depend on where you live (India, EU/EEA, UK, California, etc.).</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Data Security</h3>
              <p>
                We take appropriate security measures to protect your data from unauthorized access, alteration, or loss.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Third-Party Links</h3>
              <p>
                We may link to other sites we don't control. Please read their privacy policies separately.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Cross-Border Transfers</h3>
              <p>
                Your data may be stored or processed in India or other countries. By using our platform, you consent to this.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Policy Updates</h3>
              <p>
                We may update this policy as needed. Please check back periodically for the latest version.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Contact Us</h3>
              <p>
                If you have questions or concerns, contact us at:<br />
                📧 prenatlyogaa@gmail.com
              </p>
            </div>
          </div>

          {/* Refund Policy Section */}
          <div id="refund-policy" className="mb-12 p-8 bg-card rounded-lg shadow-gentle">
            <h2 className="text-2xl font-bold text-foreground mb-6">Refund Policy</h2>
            <div className="text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-3">Non-tangible irrevocable goods ("Digital products")</h3>
              <p>
                We do not issue refunds for non-tangible irrevocable goods ("digital products") once the order is confirmed and the product is sent.
              </p>
              
              <p>
                We recommend contacting us for assistance if you experience any issues receiving or downloading our products.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Contact us for any issues:</h3>
              <p>
                If you have any questions about our Returns and Refunds Policy, please contact us at:<br />
                📧 prenatlyogaa@gmail.com
              </p>
            </div>
          </div>

          {/* Terms of Use Section */}
          <div className="p-8 bg-card rounded-lg shadow-gentle">
            <h2 className="text-2xl font-bold text-foreground mb-6">Terms of Use</h2>
            <div className="text-muted-foreground space-y-6">
              <p>
                Welcome to prenatalmoms ("Platform"). By accessing or using this website or mobile application, you agree to the following terms. If you do not agree, please do not use the Platform.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">1. Eligibility</h3>
                <p>
                  You must be 18+ years old (or 13+ with parental consent) to use our services. You agree that the information you provide during registration is accurate and kept up to date.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">2. Content Access</h3>
                <p>
                  Content includes pre-recorded or live sessions, materials, and guides. Access requires registration and may require a fee. Refunds are only provided as per our stated refund policy.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">3. License</h3>
                <p>
                  We grant you a limited, non-transferable license to use our content for personal, non-commercial purposes. You may not copy, modify, distribute, or exploit any content without our written consent.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">4. Community & Conduct</h3>
                <p>By participating in public forums, you agree to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Be respectful and lawful.</li>
                  <li>Avoid hate speech, spam, bullying, and impersonation.</li>
                  <li>Share only content you own or have rights to share.</li>
                </ul>
                <p className="mt-2">
                  We reserve the right to remove content or restrict access for any violations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">5. Intellectual Property</h3>
                <p>
                  All content, designs, and materials on the Platform belong to Her Healthcare at Home and are protected under copyright and trademark laws. You may not reuse or redistribute them.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">6. Payments</h3>
                <p>
                  Payments are processed via third-party providers. We do not store payment data. Please review third-party terms when making payments.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">7. Disclaimers</h3>
                <p>
                  The Platform is provided "as is." We do not guarantee uninterrupted access or accuracy of content and disclaim liability for any damages resulting from use.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">8. Limitation of Liability</h3>
                <p>
                  We are not liable for any indirect or incidental damages arising from use of the Platform or its content.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">9. Changes & Termination</h3>
                <p>
                  We may modify these Terms or any aspect of the Platform at any time. Continued use constitutes acceptance. We may suspend or terminate access at our discretion.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">10. Governing Law</h3>
                <p>
                  These Terms are governed by the laws of India, and any disputes are subject to the exclusive jurisdiction of courts located in India.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">11. Contact</h3>
                <p>
                  For any queries, contact:<br />
                  📧 prenatlyogaa@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;