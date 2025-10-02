interface JourneyCardProps {
  title: string;
  description: string;
}

const JourneyCard = ({ title, description }: JourneyCardProps) => {
  return (
    <div className="mb-16 group">
      <div className="max-w-[90vw] mx-auto">
        <div 
          className="relative rounded-2xl overflow-hidden p-8 md:p-12 transition-all duration-500 hover:scale-[1.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <h3 className="text-2xl md:text-4xl font-medium mb-4 font-playfair">{title}</h3>
          <p className="text-base md:text-lg opacity-80 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Journey = () => {
  const journeySteps = [
    {
      title: "Early Career",
      description: "Started coding at 14, building websites and applications. By 16, I was freelancing for local businesses, learning the fundamentals of software development and client management. This early start gave me a decade-plus head start in understanding both technical and business aspects of technology.",
    },
    {
      title: "Tech Leadership",
      description: "Led engineering teams at Fortune 500 companies and high-growth startups. Architected scalable systems serving millions of users, implemented CI/CD pipelines, and established engineering best practices. Mentored junior developers and fostered a culture of innovation and continuous learning.",
    },
    {
      title: "Open Source Contribution",
      description: "Active contributor to major open-source projects with over 10,000+ GitHub stars combined. Built developer tools used by thousands of engineers worldwide. Strong advocate for knowledge sharing through technical blogs, conference talks, and community mentorship programs.",
    },
  ];

  return (
    <section id="journey" className="py-20 px-6">
      <div className="mb-20 flex justify-center">
        <div className="h-px w-[80%] bg-white/20" />
      </div>

      <h2 className="section-title text-center mb-32">Professional Journey</h2>

      {journeySteps.map((step, index) => (
        <JourneyCard key={index} {...step} />
      ))}
    </section>
  );
};

export default Journey;
