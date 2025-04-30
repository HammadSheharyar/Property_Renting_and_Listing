
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PropertySearch } from "@/components/PropertySearch";
import { FeaturedListings } from "@/components/FeaturedListings";
import { Testimonials } from "@/components/Testimonials";
import { FeaturedAgents } from "@/components/FeaturedAgents";
import { Footer } from "@/components/Footer";
import { properties, agents, testimonials } from "@/data/mockData";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div className="container mb-12">
          <PropertySearch />
        </div>
        <FeaturedListings properties={properties} />
        <Testimonials testimonials={testimonials} />
        <FeaturedAgents agents={agents} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
