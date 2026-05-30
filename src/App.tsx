import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';

export default function App() {
  return (
    <main className="bg-black text-[#E1E0CC]">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
    </main>
  );
}
