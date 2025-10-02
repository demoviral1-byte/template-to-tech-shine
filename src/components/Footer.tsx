const Footer = () => {
  return (
    <footer className="py-12 px-6">
      <div className="max-w-[90vw] mx-auto">
        <div className="h-px w-full bg-white/20 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm uppercase tracking-[4px] font-playfair font-semibold opacity-80">
            Alex Rivers
          </div>
          
          <div className="flex gap-8 text-sm uppercase tracking-wider opacity-60">
            <a href="#about" className="hover:opacity-100 transition-opacity">
              About
            </a>
            <a href="#journey" className="hover:opacity-100 transition-opacity">
              Journey
            </a>
            <a href="#projects" className="hover:opacity-100 transition-opacity">
              Projects
            </a>
            <a href="#contact" className="hover:opacity-100 transition-opacity">
              Contact
            </a>
          </div>
          
          <div className="text-sm opacity-60">
            © {new Date().getFullYear()} All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
