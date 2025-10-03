import working1 from "@/assets/working-1.jpg";
import working2 from "@/assets/working-2.jpg";

interface JourneyCardProps {
  title: string;
  description: string;
  images: string[];
}

const JourneyCard = ({ title, description, images }: JourneyCardProps) => {
  return (
    <div className="mb-20 group">
      <div className="max-w-[85vw] mx-auto">
        <div 
          className="relative rounded-2xl overflow-hidden p-6 md:p-12"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div className="relative cursor-pointer">
            {/* Images Wrapper */}
            <div className="relative h-[280px] md:h-[350px] mb-8">
              <div
                className="absolute left-[5%] top-0 w-[45%] h-full rounded-2xl overflow-hidden transform -rotate-[4deg] transition-transform duration-500 group-hover:rotate-[-2deg]"
                style={{ transformOrigin: "center" }}
              >
                <img
                  src={images[0]}
                  alt={`${title} 1`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute right-[5%] top-[10%] w-[45%] h-full rounded-2xl overflow-hidden transform rotate-[10deg] transition-transform duration-500 group-hover:rotate-[8deg]"
                style={{ transformOrigin: "center" }}
              >
                <img
                  src={images[1]}
                  alt={`${title} 2`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="mt-8">
              <h3 className="text-2xl md:text-4xl font-medium mb-4 font-playfair">{title}</h3>
              <div className="max-w-2xl">
                <p className="text-sm md:text-base opacity-80 leading-relaxed px-6 py-3">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Journey = () => {
  const journeySteps = [
    {
      title: "Academic Foundation",
      description: "Currently pursuing a Bachelor of Commerce in Information Systems at the University of the Western Cape (Expected completion: November 2025). Completed Information Technology courses from Grade 10 to Grade 12 at Jeppe High School for Boys, building a strong foundation in programming and system design.",
      images: [working1, working2],
    },
    {
      title: "Teaching & Mentorship",
      description: "Served as a tutor for Introduction to Business Information Systems (IFS 140) at UWC in 2024, helping fellow students grasp complex concepts. Organized and ran a SQL Boot Camp in January 2024, empowering peers with database management skills. Also worked as a Football Coach for Chris Hani residence, developing leadership and team management abilities.",
      images: [working2, working1],
    },
    {
      title: "Real-World Projects",
      description: "Built and deployed multiple live websites including Phindiso Investments, Viral Klick, Kampus Kribs, and Written Wall Enterprises. Developed personal projects such as to-do list applications, help desk ticket query systems, and portfolio websites. Proficient in HTML, CSS, JavaScript, Python, SQL, WordPress, and Oracle Apex.",
      images: [working1, working2],
    },
  ];

  return (
    <section id="journey" className="py-20 px-6">
      <div className="mb-20 flex justify-center">
        <div className="h-px w-[80%] bg-white/20" />
      </div>

      <h2 className="section-title text-center mb-20">Professional Journey</h2>

      {journeySteps.map((step, index) => (
        <JourneyCard key={index} {...step} />
      ))}
    </section>
  );
};

export default Journey;
