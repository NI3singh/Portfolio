
import Navbar from '@/components/Navbar'; // Using the @ alias for cleaner imports
import HeroSection from '@/components/HeroSection';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <Experience />
        <Projects />
        <About />
        <Stats />
        <Contact />
        <Analytics />
        <SpeedInsights />
      </main>
      <Footer />
    </div>
  );
}

export default App;