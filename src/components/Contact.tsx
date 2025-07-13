'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in touch</h2>

        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
        Building a product that demands both performance and precision? I bridge design and engineering to ship user-centric, conversion-optimized interfaces. If you're tackling real problems and need someone who delivers at scale — let's connect.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3 font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            asChild
          >
            <a href="mailto:shubhamk2907@gmail.com">Send Message</a>
          </Button>

          <span className="text-gray-400 text-sm">or</span>

          <Button
            variant="outline"
            onClick={() => {
              setIsModalOpen(true);
              setIsIframeLoaded(false);
            }}
            className="border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full px-8 py-3 font-medium transition-all duration-200"
          >
            Book a call
          </Button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center overflow-hidden" onClick={() => setIsModalOpen(false)}>
        <div className="relative bg-white w-full max-w-5xl h-[80vh] rounded-xl mt-20 overflow-hidden shadow-2xl animate-fade-in-up">
          
      
          {!isIframeLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-white z-0">
              <div className="w-6 h-6 border-2 border-gray-300 border-t-black rounded-full animate-spin" />
            </div>
          )}
      
          <iframe
            src="https://cal.com/shubham-kumar-sahoo?hideEventTypeDetails=true&branding=false&layout=month_view"
            className="w-full h-full border-0 overflow-hidden iframe-clipped"
            onLoad={() => setIsIframeLoaded(true)}
            loading="eager"
            scrolling="no" 
          />
        </div>
      </div>
      
      )}

<style>{`
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in-up {
    animation: fade-in-up 0.4s ease-out forwards;
  }
  .iframe-clipped {
    clip-path: inset(15% 0 0 0);
  }
`}</style>
    </section>
  );
};

export default Contact;