import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { OurStory } from "@/components/OurStory";
import { Couple } from "@/components/Couple";
import { Events } from "@/components/Events";
import { Gallery } from "@/components/Gallery";
import { Travel } from "@/components/Travel";
import { Wishes } from "@/components/Wishes";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Couple />
      <OurStory />
      <Events />
      <Gallery />
      <Travel />
      <Wishes />
      <Footer />
    </div>
  );
};

export default Index;
