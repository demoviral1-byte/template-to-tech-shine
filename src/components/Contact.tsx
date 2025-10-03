import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="mb-20 flex justify-center">
        <div className="h-px w-[80%] bg-white/20" />
      </div>

      <div className="max-w-[90vw] mx-auto text-center">
        <h2 className="section-title mb-12">Get in Touch</h2>
        
        <p className="text-lg md:text-xl opacity-80 mb-16 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-20">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="mailto:clemchuksthabo@gmail.com"
            className="w-14 h-14 flex items-center justify-center border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Email CTA */}
        <div>
          <a
            href="mailto:clemchuksthabo@gmail.com"
            className="inline-block bg-white text-black px-12 py-5 rounded-xl uppercase text-sm font-bold tracking-wider hover:bg-opacity-90 hover:scale-105 transition-all duration-300"
          >
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
