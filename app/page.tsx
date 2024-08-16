// Importing necessary components from the specified location ("@/components").
import {
  About,
  Contact,
  Intro,
  Projects,
  Skills,
  CloudDemo,
  
} from "@/components";

// This is the main component for the Home page.
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      {/* The Intro component is displayed at the top of the page. */}
      <Intro />
      {/* A Cloud icon is displayed at the bottom of the page. */}
      <CloudDemo />
    
      {/* The About component provides information about the author or user. */}
      <About />
      
      {/* The Projects component displays information about projects. */}
      <Projects />
      
      {/* The Skills component shows the skills of the author or user. */}
     <section className="py-10">
      <Skills />
      </section>
      
      {/* The Contact component allows users to get in touch. */}
      <Contact />
    </main>
  );
}
