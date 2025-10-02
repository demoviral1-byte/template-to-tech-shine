import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="flex items-center justify-between h-20">
          {/* Left Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm uppercase tracking-[4px] text-foreground hover:text-muted-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("journey")}
              className="text-sm uppercase tracking-[4px] text-foreground hover:text-muted-foreground transition-colors"
            >
              Journey
            </button>
          </div>

          {/* Center Logo */}
          <a
            href="/"
            className="text-base md:text-lg uppercase tracking-[4px] font-playfair font-semibold"
          >
            Clement Ibeneche
          </a>

          {/* Right Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm uppercase tracking-[4px] text-foreground hover:text-muted-foreground transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm uppercase tracking-[4px] text-foreground hover:text-muted-foreground transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm uppercase tracking-[4px] text-foreground hover:text-muted-foreground transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("journey")}
              className="text-sm uppercase tracking-[4px] text-foreground hover:text-muted-foreground transition-colors text-left"
            >
              Journey
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm uppercase tracking-[4px] text-foreground hover:text-muted-foreground transition-colors text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm uppercase tracking-[4px] text-foreground hover:text-muted-foreground transition-colors text-left"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
