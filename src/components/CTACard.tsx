import ctaBackground from "@/assets/cta-background.jpg";

const CTACard = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[90vw] mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-secondary group cursor-pointer">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={ctaBackground}
              alt="CTA background"
              className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 p-12 md:p-20">
            <h3 className="text-3xl md:text-5xl font-medium mb-8 max-w-3xl">
              Building scalable solutions that drive innovation. Let's create something extraordinary together
            </h3>
            <p className="text-base md:text-lg opacity-80 mb-10 max-w-2xl">
              With over a decade of experience in full-stack development, I specialize in architecting robust, scalable systems that solve real-world problems. From startups to enterprise solutions, I bring technical excellence and strategic thinking to every project.
            </p>
            <div className="inline-block">
              <div className="bg-white text-black px-8 py-4 rounded-xl uppercase text-sm font-bold tracking-wider hover:bg-opacity-90 hover:scale-105 transition-all duration-300">
                View Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTACard;
