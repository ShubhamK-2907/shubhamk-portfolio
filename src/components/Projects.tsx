import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "UDOOH Web App",
      description: "A public web application designed to facilitate digital out of home dynamic ad campaigns scheduling",
      image: "/udoohPlatform.svg",
      demo: "https://app.udooh.com/",
      tech: ["React", "Typescript", "Firebase", "GCP"]
    },
    {
      title: "Udooh Website",
      description: "A full-featured discovery website built with Next.js and Typescript",
      image: "/udoohWebsite.svg",
      demo: "https://udooh.com/",
      tech: ["TypeScript", "NextJS", "GSAP", "SSG"]
    },
    {
      title: "Real Estate Discovery UI App",
      description: "A modern real estate application optimized for mobile and tablet devices.",
      image: "/real_estate_new.jpg",
      github: "https://github.com/ShubhamK-2907/real-estate-application",
      demo: "https://real-estate-application-phi.vercel.app/",
      tech: ["React", "TypeScript", "SASS", "Vite", "React Router", "Leaflet", "Docker"]
    },
    {
      title: "My Pathfinder Visualiser",
      description: "A visual pathfinding simulator that demonstrates popular algorithms like A*, Dijkstra, and BFS in an interactive grid-based interface.",
      image: "/pathfinder.png",
      github: "https://github.com/ShubhamK-2907/MyPathFinder",
      demo: "https://mypathfindervisualiser-2do7.vercel.app/",
      tech: ["Svelte", "Typescript", "Vite"]
    },
    {
      title: "Clumsy Bird",
      description: "A Flappy Bird game built on top of MelonJS and grunt as the build tool",
      image: "/clumsyBird.png",
      github: "https://github.com/ShubhamK-2907/clumsy-bird",
      demo: "https://clumsy-bird-sage.vercel.app/",
      tech: ["Javascript", "MelonJS", "Grunt"]
    },
    {
      title: "MacOS UI",
      description: "A macOS-style desktop UI clone built with Vite, React.js, and TypeScript to replicate the sleek and dynamic experience of a modern desktop UI, inspired by Apple's design standards",
      image: "/macos.png",
      github: "https://github.com/ShubhamK-2907/macos-ui",
      demo: "https://macos-ui-six.vercel.app/",
      tech: ["React", "Vite", "Typescript", "Zustand", "Framer"]
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of projects that showcase my ability to design and develop 
            high-performance applications that solve real-world problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="h-px bg-gray-200 w-full drop-shadow-md" />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.github && (
                        <a 
                          href={project.github}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                          title="View Code"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 text-gray-700" />
                        </a>
                      )}
                      <a 
                        href={project.demo}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        title="Live Demo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-700" />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 font-light">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100/80 text-gray-700 text-xs rounded-full font-medium backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
