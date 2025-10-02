interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const ProjectCard = ({ title, description, image, reverse = false }: ProjectCardProps) => {
  return (
    <div className="mb-32 group">
      <div className="max-w-[90vw] mx-auto">
        <div className="relative cursor-pointer">
          {/* Image Wrapper */}
          <div className="relative h-[400px] md:h-[600px] overflow-hidden rounded-2xl">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Content */}
          <div className={`mt-12 ${reverse ? "md:pl-20" : ""}`}>
            <h3 className="text-3xl md:text-5xl font-medium mb-6">{title}</h3>
            <div className="max-w-2xl">
              <p className="text-base md:text-lg opacity-80 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
