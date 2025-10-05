import React from 'react';
import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'refund' | 'terms' | 'contact';
}

const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, onClose, type }) => {
  const content = {
    privacy: {
      title: 'Privacy Policy',
      sections: [
        {
          heading: 'Information We Collect',
          content: 'We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This includes your name, email address, phone number, and payment information.'
        },
        {
          heading: 'How We Use Your Information',
          content: 'We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.'
        },
        {
          heading: 'Data Security',
          content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
        },
        {
          heading: 'Your Rights',
          content: 'You have the right to access, update, or delete your personal information. You may also opt-out of certain communications from us.'
        },
        {
          heading: 'Contact Information',
          content: 'If you have any questions about this Privacy Policy, please contact us at prenatlyogaa@gmail.com'
        }
      ]
    },
    refund: {
      title: 'Refund Policy',
      sections: [
        {
          heading: '7-Day Satisfaction Guarantee',
          content: 'We offer a 7-day satisfaction guarantee. If you are not completely satisfied with our prenatal yoga course, you can request a full refund within 7 days of purchase.'
        },
        {
          heading: 'Eligibility for Refund',
          content: 'To be eligible for a refund, you must request it within 7 days of your purchase date. After 7 days, all sales are final and no refunds will be issued.'
        },
        {
          heading: 'How to Request a Refund',
          content: 'To request a refund, please email us at prenatlyogaa@gmail.com with your order details and reason for the refund request. We will process your request within 3-5 business days.'
        },
        {
          heading: 'Processing Time',
          content: 'Once your refund is approved, it will be processed and a credit will automatically be applied to your original method of payment within 5-10 business days.'
        },
        {
          heading: 'Contact Support',
          content: 'For any questions about our refund policy, please contact us at prenatlyogaa@gmail.com or WhatsApp: +917013805271'
        }
      ]
    },
    terms: {
      title: 'Terms of Use',
      sections: [
        {
          heading: 'Welcome to PrenatalMoms! 💖',
          content: 'These Terms of Use explain how you can use our website, app, and all services (together called the "Platform"). Please read this carefully — by using PrenatalMoms, you agree to follow these terms.'
        },
        {
          heading: '1. Who Can Use PrenatalMoms',
          content: 'You must be at least 18 years old (or have your parent/guardian\'s permission if between 13–18) to join our programs or use the Platform.'
        },
        {
          heading: '2. What You Get Access To',
          content: 'When you sign up and pay for our classes or materials, you get personal, non-commercial access to our content. This includes videos, guides, and resources designed with love for expecting mothers. Please don\'t copy, share, or resell any content.'
        },
        {
          heading: '3. Respectful Community',
          content: 'PrenatalMoms is a safe, caring space for mothers and families. Be kind, avoid offensive or harmful language, and respect everyone\'s privacy. Any misuse may result in suspension or removal from the Platform.'
        },
        {
          heading: '4. Payments & Refunds',
          content: 'All payments are processed securely through trusted partners. Once you join a program, fees are non-refundable, unless stated otherwise in our Refund Policy.'
        },
        {
          heading: '5. Privacy',
          content: 'We respect your privacy. Please check our Privacy Policy to know how we collect and use your data safely.'
        },
        {
          heading: '6. Our Content',
          content: 'All videos, guides, and materials belong to PrenatalMoms. You can use them for personal learning only. Copying or reusing them elsewhere isn\'t allowed.'
        },
        {
          heading: '7. No Guarantees',
          content: 'Our programs are meant for wellness, education, and emotional support. We don\'t provide medical advice or guarantees of specific results. Always consult your doctor for medical concerns.'
        },
        {
          heading: '8. Changes to Terms',
          content: 'We may update these Terms sometimes to improve our services. Please check this page for the latest version.'
        },
        {
          heading: '9. Contact Us',
          content: 'Got questions? Reach out at 📩 support@prenatalmoms.com — we\'d love to help you.'
        }
      ]
    },
    contact: {
      title: 'Contact Us',
      sections: [
        {
          heading: '💝 We\'re Here for You',
          content: 'We\'re here to support you every step of your pregnancy journey!'
        },
        {
          heading: '📧 Email Us',
          content: 'prenatalyogaa@gmail.com - We typically respond within 24 hours'
        },
        {
          heading: '💬 WhatsApp Support',
          content: '+91 7013805271 - Chat with us for quick assistance'
        },
        {
          heading: '🕒 Support Hours',
          content: 'Monday - Saturday: 9:00 AM - 6:00 PM IST. We\'re closed on Sundays and public holidays.'
        },
        {
          heading: '❓ Common Questions',
          content: 'Before reaching out, you might find your answer in our FAQs section on the main page!'
        }
      ]
    }
  };

  const policyContent = content[type];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold">
            {policyContent.title}
          </DialogTitle>
          <DialogClose className="absolute right-4 top-4">
            <X className="h-4 w-4" />
          </DialogClose>
        </DialogHeader>
        <ScrollArea className="h-[60vh] px-6 pb-6">
          <div className="space-y-6 mt-4">
            {policyContent.sections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg mb-2">{section.heading}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PolicyModal;