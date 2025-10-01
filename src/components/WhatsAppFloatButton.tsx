import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloatButton = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in the prenatal yoga course.";
    const whatsappUrl = `https://wa.me/+917013805271?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <MessageCircle className="h-6 w-6" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
      </div>
      <span className="absolute left-full ml-3 bg-gray-800 text-white text-sm px-3 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Chat with us
      </span>
    </button>
  );
};

export default WhatsAppFloatButton;