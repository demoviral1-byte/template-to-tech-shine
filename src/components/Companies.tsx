const Companies = () => {
  const techStack = [
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
    { name: "Oracle", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-[90vw] mx-auto">
        <h2 className="section-title text-center mb-16">Tech Stack</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={tech.logo}
                alt={`${tech.name} logo`}
                className="w-20 h-20 md:w-24 md:h-24 object-contain filter invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
