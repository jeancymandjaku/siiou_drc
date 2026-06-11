import Committements from "../components/Committements";
import Hero from "../components/hero";
import TestimonialsAndGallery from "../components/TestimonialsAndGallery";
import CTA from "../components/finalCTA";
import ServicesCom from "../components/ServicesCom";

const Home = () => {
  return <div className="min-h-screen bg-[#fcfbf7] text-[#2c2520]">
    <Hero/>
    <ServicesCom/>
    <Committements/>
    <TestimonialsAndGallery/>
    <CTA/>
  </div>;
};

export default Home;