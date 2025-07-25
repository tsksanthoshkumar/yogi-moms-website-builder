import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">PrenatalYoga</h3>
            <p className="text-background/80 mb-4">
              Empowering Indian mothers through safe, accessible prenatal yoga practices. 
              Your journey to wellness starts here.
            </p>
            <div className="text-sm text-background/60">
              Certified • Safe • Affordable
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}>
                  Program
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-background/80">
              <li>📧 prenatlyogaa@gmail.com</li>
              <li>💬 WhatsApp Support</li>
              <li>🕒 Mon-Sat: 9AM-6PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © 2024 PrenatalYoga. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/terms-of-service#privacy-policy" className="text-background/60 hover:text-background text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-background/60 hover:text-background text-sm transition-colors">
                Terms of Service
              </a>
              <a href="/terms-of-service#refund-policy" className="text-background/60 hover:text-background text-sm transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;