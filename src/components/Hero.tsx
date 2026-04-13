
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-5 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="text-center max-w-4xl mx-auto animate-fade-in relative z-10">
      <div className="mb-6 sm:mb-8">
          <div className="mx-auto mb-4 sm:mb-6 w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-lg">
            <img 
              src={`${import.meta.env.BASE_URL}anime_style_portrait.jpeg`} 
              alt="Shubham Kumar Sahoo"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
      </div>

        
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
          Hey, I'm Shubham.
          <br />
          <span className="text-gray-700">Your Friendly Design Engineer</span>
        </h1>
        
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
        Passionate developer creating solutions that not only work
          <br className="hidden sm:block" />
          but feel great to use.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-4">
  {/* Hire Me Button */}
  <Button 
    className="bg-black text-white hover:bg-gray-800 rounded-full px-6 sm:px-8 py-3 font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
    asChild
  >
    <a href="#contact">Hire me</a>
  </Button>

  {/* Availability Badge */}
  <div 
    className="flex items-center gap-2 bg-green-50 text-green-700 border border-green-100 rounded-full px-4 py-2 text-sm font-medium"
  >
    {/* Ping Dot */}
    <div className="relative">
      <span className="block rounded-full bg-green-700 h-[6px] w-[6px]" />
      <span className="absolute top-0 left-0 h-[6px] w-[6px] rounded-full bg-green-700 opacity-75 animate-ping" />
    </div>

    {/* Responsive Text */}
    <span className="block sm:hidden">Available</span>
    <span className="hidden sm:block">Open to Opportunities</span>
  </div>
</div>

      </div>
    </section>
  );
};

export default Hero;
