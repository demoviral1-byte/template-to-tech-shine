const About = () => {
  const clients = [
    { name: "Google", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
    { name: "Microsoft", logo: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg" },
    { name: "Amazon", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Meta", logo: "https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg" },
    { name: "Netflix", logo: "https://www.vectorlogo.zone/logos/netflix/netflix-icon.svg" },
    { name: "Spotify", logo: "https://www.vectorlogo.zone/logos/spotify/spotify-icon.svg" },
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-[90vw] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-light leading-relaxed max-w-5xl mx-auto opacity-90">
            I'm a Senior Full-Stack Engineer & Tech Lead with over a decade of experience. Throughout the years I've been working with leading tech companies & innovative startups.
          </h2>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center mt-20">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="w-16 h-16 object-contain filter invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
