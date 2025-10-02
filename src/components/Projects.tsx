import { useState } from "react";
import working1 from "@/assets/working-1.jpg";
import working2 from "@/assets/working-2.jpg";
import presenting from "@/assets/presenting.jpg";
import teamCollab from "@/assets/team-collab.jpg";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "CloudScale Platform",
      description: "Built a distributed cloud infrastructure platform handling 10M+ requests daily. Implemented auto-scaling, load balancing, and real-time monitoring. Reduced infrastructure costs by 40% while improving system reliability to 99.99% uptime.",
      image: working1,
      tags: ["AWS", "Kubernetes", "Go"],
    },
    {
      title: "AI Analytics Engine",
      description: "Developed a machine learning-powered analytics platform for enterprise clients. Features include predictive modeling, real-time data processing, and custom visualization dashboards. Successfully deployed across 50+ organizations.",
      image: working2,
      tags: ["Python", "TensorFlow", "React"],
    },
    {
      title: "DevOps Automation Suite",
      description: "Created comprehensive DevOps toolkit that automated deployment pipelines, testing, and monitoring for development teams. Reduced deployment time from hours to minutes and eliminated 90% of manual processes.",
      image: presenting,
      tags: ["Docker", "Jenkins", "Terraform"],
    },
    {
      title: "Open Source Framework",
      description: "Launched a popular open-source framework for building modern web applications. Over 15,000 GitHub stars, used by companies worldwide. Active community with regular updates and comprehensive documentation.",
      image: teamCollab,
      tags: ["TypeScript", "Node.js", "WebGL"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="mb-20 flex justify-center">
        <div className="h-px w-[80%] bg-white/20" />
      </div>

      <h2 className="section-title text-center mb-20">Featured Projects</h2>

      {/* Grid Layout */}
      <div className="max-w-[90vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        {projects.slice(0, 2).map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              height: "500px",
            }}
          >
            {/* Image */}
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div
                className={`transition-all duration-500 ${
                  hoveredIndex === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-medium mb-4 font-playfair">
                {project.title}
              </h3>

              <p
                className={`text-sm md:text-base opacity-90 leading-relaxed transition-all duration-500 ${
                  hoveredIndex === index
                    ? "translate-y-0 opacity-90 max-h-40"
                    : "translate-y-4 opacity-0 max-h-0"
                }`}
              >
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Staggered Layout for bottom 2 */}
      <div className="max-w-[90vw] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {projects.slice(2, 4).map((project, index) => (
          <div
            key={index + 2}
            className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
              index === 0 ? "lg:col-span-7" : "lg:col-span-5"
            }`}
            onMouseEnter={() => setHoveredIndex(index + 2)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              height: "450px",
            }}
          >
            {/* Image with parallax effect */}
            <div
              className="absolute inset-0 transition-all duration-700"
              style={{
                transform:
                  hoveredIndex === index + 2
                    ? "scale(1.1) translateY(-10px)"
                    : "scale(1) translateY(0)",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            {/* Content with slide animation */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div
                className={`transition-all duration-500 ${
                  hoveredIndex === index + 2
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
              >
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-medium mb-4 font-playfair">
                {project.title}
              </h3>

              <p
                className={`text-sm md:text-base opacity-90 leading-relaxed transition-all duration-500 ${
                  hoveredIndex === index + 2
                    ? "translate-x-0 opacity-90 max-h-32"
                    : "translate-x-4 opacity-0 max-h-0"
                }`}
              >
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
