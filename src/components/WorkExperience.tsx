import { Link as LinkIcon } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      period: "Feb 2025 - Jun 2025",
      role: "Software Engineer",
      company: "Astria Digital",
      companyColor: "bg-orange-100 text-orange-700",
      iconColor: "text-orange-700",
      companyURL: "https://www.astriadigital.com"
    },
    {
      period: "May 2024 - Jan 2025",
      role: "Founding Engineer",
      company: "Udooh",
      companyColor: "bg-pink-100 text-pink-700",
      iconColor: "text-pink-700",
      companyURL: "https://www.udooh.com"
    },
    {
      period: "Jul 2022 - Apr 2024",
      role: "Associate Software Engineer (UI)",
      company: "Lifesight",
      companyColor: "bg-blue-100 text-blue-700",
      iconColor: "text-blue-700",
      companyURL: "https://www.lifesight.io"
    },
    {
      period: "Dec 2021 - Jun 2022",
      role: "Product Intern",
      company: "Lifesight",
      companyColor: "bg-blue-100 text-blue-700",
      iconColor: "text-blue-700",
      companyURL: "https://www.lifesight.io"
    },
    {
      period: "Aug 2018 - Dec 2020",
      role: "Photographer & Cinematographer",
      company: "PES University",
      companyColor: "bg-green-100 text-green-700",
      iconColor: "text-green-700",
      companyURL: "https://pes.edu/"
    }
  ];

  return (
    <section id="experience" className="pb-24 px-6 bg-white font-sans">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-16">Work Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center gap-2 animate-fadeUp opacity-0"
              style={{
                animationDelay: `${index * 0.15}s`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Date column */}
              <div className="md:w-44 text-sm text-gray-500 font-medium text-right md:text-left">
                {exp.period}
              </div>

              {/* Role and Company */}
              <div className="flex-1 flex flex-wrap items-center gap-3">
                <span className="text-gray-900 font-medium whitespace-nowrap">
                  {exp.role} <span className="text-gray-500">at</span>
                </span>

                {exp.company && (
                  <a
                    href={exp.companyURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${exp.companyColor}`}
                  >
                    {exp.company}
                    <LinkIcon size={14} className={`glow-icon ${exp.iconColor}`} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeUp {
            animation: fadeUp 0.6s ease-out both;
          }

          .glow-icon {
            filter: drop-shadow(0 0 5px currentColor);
            animation: glowPulse 1.5s infinite alternate;
            transition: transform 0.2s;
          }

          .glow-icon:hover {
            transform: scale(1.2);
          }

          @keyframes glowPulse {
            from {
              filter: drop-shadow(0 0 5px currentColor);
            }
            to {
              filter: drop-shadow(0 0 10px currentColor);
            }
          }
        `}
      </style>
    </section>
  );
};

export default WorkExperience;
