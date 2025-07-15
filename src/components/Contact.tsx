'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsIframeLoaded(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
            onClick={openModal}
            className="border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full px-8 py-3 font-medium transition-all duration-200"
          >
            Book a call
          </Button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8" onClick={closeModal}>
          <div
            className="relative w-full max-w-4xl h-[90vh] bg-white rounded-xl shadow-xl overflow-hidden animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Loader */}
            {!isIframeLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-white z-0">
                <div className="w-8 h-8 border-2 border-gray-300 border-t-black rounded-full animate-spin" />
              </div>
            )}

            {/* Cal.com iframe */}
            <iframe
              src="https://cal.com/shubham-kumar-sahoo?layout=month_view&embedType=modal&theme=light&hideOverlay=true"
              title="Book a call"
              className="w-full h-full border-0"
              onLoad={() => setIsIframeLoaded(true)}
              loading="eager"
              allow="camera; microphone; autoplay; encrypted-media;"
            />
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Contact;
