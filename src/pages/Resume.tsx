import { useState, useEffect } from 'react';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedBackground from '../components/ui/animated-background';

const Resume = () => {
  const [loading, setLoading] = useState(true);
  const [exitLoader, setExitLoader] = useState(false);

  useEffect(() => {
    const startExit = setTimeout(() => {
      setExitLoader(true); 
    }, 1800);

    const endLoading = setTimeout(() => {
      setLoading(false); 
    }, 2000);

    return () => {
      clearTimeout(startExit);
      clearTimeout(endLoading);
    };
  }, []);

  return (
    <>
      {/* Loader Overlay */}
      {loading && (
        <div
          className={`fixed inset-0 bg-black z-[9999] flex items-center justify-center transition-transform duration-400 ease-out ${
            exitLoader ? '-translate-y-full' : 'translate-y-0'
          }`}
          style={{ willChange: 'transform' }}
        >
          <img
            src={`${import.meta.env.BASE_URL}loader2.gif`}
            alt="Loading..."
            className="w-16 h-16"
          />
        </div>
      )}

      {/* Resume Page */}
      {!loading && (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden overflow-x-hidden">
          <AnimatedBackground variant="resume" />

          {/* Navigation */}
          <nav className="fixed top-4 sm:top-6 left-4 sm:left-6 z-50">
            <Button
              variant="ghost"
              className="text-gray-700 hover:bg-white/10 rounded-full px-4 sm:px-6 py-3 text-sm sm:text-base transition-all duration-200 font-medium"
              asChild
            >
              <a href={import.meta.env.BASE_URL}>
                <ArrowLeft className="w-4 h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Back to Portfolio</span>
                <span className="sm:hidden">Back</span>
              </a>
            </Button>
          </nav>

          {/* Main Resume Section */}
          <div className="flex items-center justify-center min-h-screen mt-10 p-4 sm:p-6">
            <div className="max-w-5xl w-full">
              {/* Header */}
              <div className="text-center mb-6 sm:mb-8 relative">
                <div className="absolute inset-0 -z-10">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-r from-pink-200 to-blue-200 rounded-full opacity-20 blur-3xl"></div>
                </div>

                <div className="relative bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-6 sm:p-8 mb-6 sm:mb-8 shadow-2xl">
                  <div className="relative z-10">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">
                      Resume
                    </h1>

                    {/* Name & Title */}
                    <div className="flex flex-col items-center space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pink-100 to-blue-100 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-xl sm:text-2xl font-bold text-gray-700">SK</span>
                      </div>
                      <div className="text-center">
                        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
                          Shubham Kumar Sahoo
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600">Design Engineer</p>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                      <Button
                        className="bg-black text-white hover:bg-gray-800 rounded-full px-6 sm:px-8 py-3 font-medium transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
                        asChild
                      >
                        <a href={`${import.meta.env.BASE_URL}resume.pdf`} download>
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-white/30 backdrop-blur-sm border-white/40 text-gray-700 hover:bg-white/40 rounded-full px-6 sm:px-8 py-3 font-medium transition-all duration-200 text-sm sm:text-base"
                        asChild
                      >
                        <a
                          href={`${import.meta.env.BASE_URL}resume.pdf`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          <span className="hidden sm:inline">Open in New Tab</span>
                          <span className="sm:hidden">Open</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resume Image Display */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-blue-100 rounded-2xl sm:rounded-3xl opacity-30 blur-xl"></div>
                <div className="relative bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
                  <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden flex items-center justify-center">
                    <img
                      src={`${import.meta.env.BASE_URL}resume.png`}
                      alt="Shubham Kumar Sahoo Resume"
                      className="w-full h-auto max-w-full object-contain"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Resume;
