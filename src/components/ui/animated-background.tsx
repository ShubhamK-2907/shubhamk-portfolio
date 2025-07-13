
interface AnimatedBackgroundProps {
  variant?: 'default' | 'resume' | 'hero';
  className?: string;
}

const AnimatedBackground = ({ variant = 'default', className = '' }: AnimatedBackgroundProps) => {
  const getBackgroundElements = () => {
    switch (variant) {
      case 'hero':
        return (
          <>
            <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          </>
        );
      case 'resume':
        return (
          <>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-4000"></div>
          </>
        );
      default:
        return (
          <>
            <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob"></div>
            <div className="absolute top-1/3 right-1/6 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob animation-delay-4000"></div>
          </>
        );
    }
  };

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {getBackgroundElements()}
    </div>
  );
};

export default AnimatedBackground;
