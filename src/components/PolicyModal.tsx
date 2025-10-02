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
  type: 'privacy' | 'refund';
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