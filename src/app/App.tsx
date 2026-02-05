import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ResearchExperience } from "./components/ResearchExperience";
import { Publications } from "./components/Publications";
import { About } from "./components/About";
import { StarField } from "./components/StarField";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white relative">
      <StarField />
      
      <div className="relative z-10">
        <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
        
        <main>
          <div id="home">
            <Hero onNavigate={handleNavigate} />
          </div>
          
          <div id="work">
            <ResearchExperience />
          </div>
          
          <div id="publications">
            <Publications />
          </div>
          
          <div id="about">
            <About />
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-8 px-6 mt-24">
          <div className="max-w-5xl mx-auto text-center text-gray-500">
            <p className="mb-2">© 2026 Rishi Mohapatra. All rights reserved.</p>
            {/* <p className="text-sm">Built with React, TypeScript, and Tailwind CSS</p> */}
          </div>
        </footer>
      </div>
    </div>
  );
}