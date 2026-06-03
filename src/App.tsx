
import Navbar from '@/components/Navbar'; // Using the @ alias for cleaner imports
import InteractiveBackground from '@/components/InteractiveBackground';
import ScrollProgress from '@/components/ScrollProgress';
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
    <div className="relative flex flex-col min-h-screen bg-primary">
      <InteractiveBackground />
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow relative z-10">
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
