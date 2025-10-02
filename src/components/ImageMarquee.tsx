import working1 from "@/assets/working-1.jpg";
import working2 from "@/assets/working-2.jpg";
import presenting from "@/assets/presenting.jpg";
import teamCollab from "@/assets/team-collab.jpg";

const ImageMarquee = () => {
  const images = [working1, working2, presenting, teamCollab];
  const duplicatedImages = [...images, ...images];

  return (
    <div className="py-20 overflow-hidden">
      <div className="flex animate-marquee">
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-4"
            style={{ width: "400px" }}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageMarquee;
