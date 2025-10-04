import { Globe } from "lucide-react";

const About = () => {
  const projects = [
    { name: "Phindiso Investments", url: "www.phindisoinvestments.co.za" },
    { name: "Viral Klick", url: "www.viralklick.xyz" },
    { name: "Kampus Kribs", url: "www.kampuskribs.co.za" },
    { name: "Written Wall Enterprises", url: "www.writtenwallenterprises.xyz" },
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-[90vw] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-light leading-relaxed max-w-5xl mx-auto opacity-90">
            I'm a BCom Information Systems student at the University of the Western Cape, passionate about building web applications and solving real-world problems through technology.
          </h2>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-6 rounded-xl" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}>
            <div className="text-3xl font-light mb-2">4+</div>
            <p className="text-sm opacity-70">Live Websites Deployed</p>
          </div>
          <div className="text-center p-6 rounded-xl" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}>
            <div className="text-3xl font-light mb-2">2025</div>
            <p className="text-sm opacity-70">Expected Graduation</p>
          </div>
          <div className="text-center p-6 rounded-xl" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulance type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}>
            <div className="text-3xl font-light mb-2">8+</div>
            <p className="text-sm opacity-70">Technical Skills</p>
          </div>
        </div>

        {/* Projects Built */}
        <h3 className="text-xl md:text-2xl font-medium mb-8 text-center opacity-80">Live Projects</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center p-4 rounded-xl opacity-70 hover:opacity-100 transition-all duration-300"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <Globe className="w-8 h-8 mb-3 opacity-70" />
              <p className="text-sm font-medium">{project.name}</p>
              <p className="text-xs opacity-50 mt-1">{project.url}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
