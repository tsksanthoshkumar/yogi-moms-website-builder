import React, { useState, useRef, useEffect } from 'react';

interface SlideToPayButtonProps {
  onPayment?: () => void;
  className?: string;
}

const SlideToPayButton: React.FC<SlideToPayButtonProps> = ({ onPayment, className = "" }) => {
  const [isSliding, setIsSliding] = useState(false);
  const [slidePosition, setSlidePosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handlePayment = () => {
    // Redirect to Razorpay
    window.open('https://rzp.io/rzp/prenatal-mom', '_blank');
    
    if (onPayment) {
      onPayment();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsSliding(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsSliding(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !buttonRef.current || !sliderRef.current) return;

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const sliderWidth = sliderRef.current.offsetWidth;
    const maxSlide = buttonRect.width - sliderWidth;
    
    let newPosition = e.clientX - buttonRect.left - sliderWidth / 2;
    newPosition = Math.max(0, Math.min(newPosition, maxSlide));
    
    setSlidePosition(newPosition);

    // If slid more than 80% of the way, trigger payment
    if (newPosition > maxSlide * 0.8) {
      setIsDragging(false);
      setIsSliding(false);
      handlePayment();
      // Reset position after a short delay
      setTimeout(() => setSlidePosition(0), 300);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !buttonRef.current || !sliderRef.current) return;

    const touch = e.touches[0];
    const buttonRect = buttonRef.current.getBoundingClientRect();
    const sliderWidth = sliderRef.current.offsetWidth;
    const maxSlide = buttonRect.width - sliderWidth;
    
    let newPosition = touch.clientX - buttonRect.left - sliderWidth / 2;
    newPosition = Math.max(0, Math.min(newPosition, maxSlide));
    
    setSlidePosition(newPosition);

    // If slid more than 80% of the way, trigger payment
    if (newPosition > maxSlide * 0.8) {
      setIsDragging(false);
      setIsSliding(false);
      handlePayment();
      // Reset position after a short delay
      setTimeout(() => setSlidePosition(0), 300);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      setIsSliding(false);
      // Animate back to start if not completed
      setSlidePosition(0);
    }
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      setIsDragging(false);
      setIsSliding(false);
      // Animate back to start if not completed
      setSlidePosition(0);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      {/* Header section similar to Google Pay */}
      <div className="flex items-center justify-between mb-3 md:mb-4 p-3 md:p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/86701dd5-d52f-4fed-9baa-a7fea1be56c1.png" 
            alt="PrenatalYoga Logo" 
            className="w-8 h-8 md:w-10 md:h-10 rounded-lg"
          />
          <div>
            <div className="text-gray-600 text-xs md:text-sm">Buy Now</div>
            <div className="font-semibold text-gray-900 text-sm md:text-base">PrenatalYoga Course</div>
          </div>
        </div>
        <button className="text-blue-500 font-medium text-xs md:text-sm hover:text-blue-600 transition-colors">
          Change →
        </button>
      </div>

      {/* Slide to Pay Button */}
      <div 
        ref={buttonRef}
        className="relative w-full h-14 md:h-16 bg-blue-500 rounded-full overflow-hidden cursor-pointer select-none shadow-lg touch-manipulation"
        style={{ background: 'linear-gradient(135deg, #4285f4 0%, #1a73e8 100%)' }}
      >
        {/* Background text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-semibold text-base md:text-lg tracking-wide">
            Slide to Pay | ₹499
          </span>
        </div>

        {/* Sliding button */}
        <div
          ref={sliderRef}
          className="absolute left-1 top-1 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing shadow-lg transition-transform duration-200 ease-out touch-manipulation"
          style={{ 
            transform: `translateX(${slidePosition}px)`,
            transition: isDragging ? 'none' : 'transform 0.3s ease-out'
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Arrow icon */}
          <div className="flex items-center justify-center">
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-blue-500 md:w-6 md:h-6"
            >
              <path 
                d="M8.5 5L15.5 12L8.5 19" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Sliding overlay effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-200"
          style={{ 
            opacity: isSliding ? 0.3 : 0,
            transform: `translateX(${slidePosition - 50}px)`
          }}
        />
      </div>

      {/* Helper text */}
      <div className="text-center mt-2 md:mt-3 text-xs md:text-sm text-gray-500">
        Slide the button to complete your purchase
      </div>
    </div>
  );
};

export default SlideToPayButton;