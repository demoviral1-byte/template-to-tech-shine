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

        {/* Projects Built */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mt-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="text-2xl mb-2">🌐</div>
              <p className="text-sm font-medium">{project.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
