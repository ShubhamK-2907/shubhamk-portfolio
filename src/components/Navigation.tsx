
import { Home, User, Briefcase, FolderOpen, FileText, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  scrollY: number;
}

const Navigation = ({ scrollY }: NavigationProps) => {
  const navItems = [
    { icon: Home, href: '#home', label: 'Home' },
    { icon: User, href: '#about', label: 'About' },
    { icon: Briefcase, href: '#experience', label: 'Experience' },
    { icon: FolderOpen, href: '#projects', label: 'Projects' },
    { icon: FileText, href: '/resume', label: 'Resume' },
  ];

  return (
    <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
      scrollY > 50 ? 'scale-95' : 'scale-100'
    }`}>
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 sm:px-6 py-3 shadow-lg">
        <div className="flex items-center space-x-3 sm:space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="p-2 rounded-full hover:bg-white/20 transition-all duration-200 group"
              title={item.label}
            >
              <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 group-hover:text-gray-900 transition-colors" />
            </a>
          ))}
          <Button 
            className="bg-black text-white hover:bg-gray-800 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200"
            asChild
          >
            <a href="#contact">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Book a call</span>
              <span className="sm:hidden">Call</span>
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
