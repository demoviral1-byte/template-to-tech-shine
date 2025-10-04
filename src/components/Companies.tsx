import { GraduationCap, Users, Target, Presentation, ClipboardList, MessageSquare, Handshake, Trophy } from "lucide-react";

const Companies = () => {
  const technicalSkills = [
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
    { name: "Oracle", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  ];

  const professionalSkills = [
    { name: "Teaching & Tutoring", icon: GraduationCap, description: "IFS 140 Tutor, SQL Boot Camp Organizer" },
    { name: "Leadership", icon: Target, description: "Team leadership and strategic direction" },
    { name: "Team Management", icon: Users, description: "Football Coach, Team coordination" },
    { name: "Project Management", icon: ClipboardList, description: "End-to-end project delivery" },
    { name: "Communication", icon: MessageSquare, description: "Client relations and presentations" },
    { name: "Mentorship", icon: Handshake, description: "Peer guidance and skill development" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-[90vw] mx-auto">
        <h2 className="section-title text-center mb-16">Skills & Expertise</h2>
        
        {/* Technical Skills */}
        <div className="mb-20">
          <h3 className="text-xl md:text-2xl font-medium mb-8 text-center opacity-80">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300 gap-2"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain filter invert"
                />
                <span className="text-xs md:text-sm text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div>
          <h3 className="text-xl md:text-2xl font-medium mb-8 text-center opacity-80">Professional Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl opacity-80 hover:opacity-100 transition-all duration-300"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{skill.name}</h4>
                      <p className="text-sm opacity-60">{skill.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
