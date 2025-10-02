import ProjectCard from "./ProjectCard";
import working1 from "@/assets/working-1.jpg";
import working2 from "@/assets/working-2.jpg";
import presenting from "@/assets/presenting.jpg";
import teamCollab from "@/assets/team-collab.jpg";

const Projects = () => {
  const projects = [
    {
      title: "CloudScale Platform",
      description: "Built a distributed cloud infrastructure platform handling 10M+ requests daily. Implemented auto-scaling, load balancing, and real-time monitoring. Reduced infrastructure costs by 40% while improving system reliability to 99.99% uptime.",
      image: working1,
    },
    {
      title: "AI Analytics Engine",
      description: "Developed a machine learning-powered analytics platform for enterprise clients. Features include predictive modeling, real-time data processing, and custom visualization dashboards. Successfully deployed across 50+ organizations.",
      image: working2,
    },
    {
      title: "DevOps Automation Suite",
      description: "Created comprehensive DevOps toolkit that automated deployment pipelines, testing, and monitoring for development teams. Reduced deployment time from hours to minutes and eliminated 90% of manual processes.",
      image: presenting,
    },
    {
      title: "Open Source Framework",
      description: "Launched a popular open-source framework for building modern web applications. Over 15,000 GitHub stars, used by companies worldwide. Active community with regular updates and comprehensive documentation.",
      image: teamCollab,
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="mb-20 flex justify-center px-6">
        <div className="h-px w-[80%] bg-white/20" />
      </div>

      <h2 className="section-title text-center mb-32 px-6">Featured Projects</h2>

      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} reverse={index % 2 !== 0} />
      ))}
    </section>
  );
};

export default Projects;
