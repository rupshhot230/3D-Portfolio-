import React from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactButton } from './components/ContactButton';

export function App() {
  return (
    <div className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-sans antialiased overflow-x-clip">
      {/* SECTION ORDER */}
      {/* 1. HeroSection */}
      <HeroSection />

      {/* 2. MarqueeSection */}
      <MarqueeSection />

      {/* 3. AboutSection */}
      <AboutSection />

      {/* 4. ServicesSection */}
      <ServicesSection />

      {/* 5. ProjectsSection */}
      <ProjectsSection />

      {/* Footer / Contact Footer */}
      <footer id="contact" className="bg-[#0C0C0C] border-t border-[#D7E2EA]/10 py-12 px-6 md:px-10 text-center flex flex-col items-center gap-6">
        <h3 className="hero-heading font-black uppercase text-2xl sm:text-4xl tracking-tight">
          Let&apos;s Work Together
        </h3>
        <p className="text-[#D7E2EA] font-light text-sm sm:text-base max-w-md opacity-80">
          Have an exciting web or mobile project? Reach out and let&apos;s build high-quality digital solutions together.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 my-2 text-sm">
          <a href="mailto:rupeshhot230@gmail.com" className="hover:text-[#B600A8] transition-colors flex items-center gap-2">
            ✉️ rupeshhot230@gmail.com
          </a>
          <a href="tel:9696606527" className="hover:text-[#B600A8] transition-colors flex items-center gap-2">
            📞 9696606527
          </a>
        </div>
        <ContactButton />
        <div className="pt-6 text-xs text-[#D7E2EA]/50 uppercase tracking-widest">
          © {new Date().getFullYear()} Rupesh Pal — Junior Mobile & Web Developer. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
