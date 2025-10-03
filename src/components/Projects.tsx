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
      title: "Phindiso Investments",
      description: "Professional investment company website with modern design and responsive layout. Built to showcase services and attract potential clients using contemporary web technologies and user-centric design principles.",
      image: working1,
      tags: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
    {
      title: "Viral Klick",
      description: "Dynamic platform for digital marketing services featuring interactive UI and seamless user experience. Designed for managing marketing campaigns with intuitive navigation and modern aesthetics.",
      image: working2,
      tags: ["JavaScript", "CSS", "WordPress"],
    },
    {
      title: "Kampus Kribs",
      description: "Student housing platform connecting students with accommodation options near University of the Western Cape. Features include advanced search functionality, filtering options, and an intuitive booking system.",
      image: presenting,
      tags: ["HTML", "CSS", "JavaScript", "SQL"],
    },
    {
      title: "Help Desk System",
      description: "Comprehensive ticket management system for handling support queries. Built with Oracle Apex featuring robust user authentication, efficient ticket tracking, detailed reporting, and admin dashboard functionality.",
      image: teamCollab,
      tags: ["Oracle Apex", "SQL", "PL/SQL"],
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
