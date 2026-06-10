import HeroSection from "./sections/HeroSection";
import CameraSection from "./sections/CameraSection";
import BatterySection from "./sections/BatterySection";
import FeaturesSection from "./sections/FeaturesSection";
import ShowcaseSection from "./sections/ShowcaseSection";

import PhoneScene from "./components/PhoneScene";
import { PhoneProvider } from "./context/PhoneContext";

import Navigation from "./components/Navigation";

function App() {
  return (
    <PhoneProvider>
      <Navigation />
      
      <HeroSection />
      <CameraSection />
      <BatterySection />
      <FeaturesSection />
      <ShowcaseSection />
    </PhoneProvider>
  );
}
export default App;