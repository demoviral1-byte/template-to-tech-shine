const Companies = () => {
  const skills = [
    // Technical Skills
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "technical" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "technical" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "technical" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "technical" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "technical" },
    { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", category: "technical" },
    { name: "Oracle", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg", category: "technical" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "technical" },
    // Professional Skills
    { name: "Teaching", icon: "📚", category: "professional" },
    { name: "Tutoring", icon: "👨‍🏫", category: "professional" },
    { name: "Leadership", icon: "🎯", category: "professional" },
    { name: "Team Management", icon: "👥", category: "professional" },
    { name: "Project Management", icon: "📊", category: "professional" },
    { name: "Communication", icon: "💬", category: "professional" },
    { name: "Mentorship", icon: "🤝", category: "professional" },
    { name: "Coaching", icon: "⚽", category: "professional" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-[90vw] mx-auto">
        <h2 className="section-title text-center mb-16">Skills & Expertise</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300 gap-2"
            >
              {skill.logo ? (
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain filter invert"
                />
              ) : (
                <div className="text-3xl md:text-4xl">{skill.icon}</div>
              )}
              <span className="text-xs md:text-sm text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
