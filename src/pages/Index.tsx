import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import CTACard from "@/components/CTACard";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Companies />
        <CTACard />
        <About />
        <Journey />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
