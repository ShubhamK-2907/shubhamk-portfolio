import { Link as LinkIcon } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      period: "Oct 2025 - Present",
      role: "Software Engineer II",
      company: "Hinge Health",
      companyColor: "bg-gray-100 text-green-700",
      iconColor: "text-green-500",
      companyURL: "https://www.hingehealth.com"
    },
    {
      period: "Feb 2025 - May 2025",
      role: "Software Engineer",
      company: "Astria Digital",
      companyColor: "bg-orange-100 text-orange-700",
      iconColor: "text-orange-700",
      companyURL: "https://www.astriadigital.com"
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
      role: "Photographer",
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
              className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 animate-fadeUp opacity-0"
              style={{
                animationDelay: `${index * 0.15}s`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Date column */}
              <div className="w-full sm:w-44 text-sm text-gray-500 font-medium mb-1 sm:mb-0">
                {exp.period}
              </div>

              {/* Role and Company */}
              <div className="flex-1 flex flex-wrap sm:flex-nowrap items-center gap-x-2 gap-y-2 text-sm sm:text-base font-medium text-gray-900">
                <span className="whitespace-nowrap">
                  {exp.role} <span className="text-gray-500">at</span>
                </span>

                <a
                  href={exp.companyURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 px-3 py-1 rounded-full ${exp.companyColor} whitespace-nowrap`}
                >
                  {exp.company}
                  <LinkIcon size={14} className={`glow-icon ${exp.iconColor}`} />
                </a>
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
