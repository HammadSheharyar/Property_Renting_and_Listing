
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Testimonials } from "@/components/Testimonials";
import { Award, CheckCircle, Home, Users, Building, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: "1",
    name: "Amanda Johnson",
    position: "Home Buyer",
    content: "DreamHouse made finding our perfect home so easy. Their team was professional, knowledgeable, and really listened to what we wanted. We couldn't be happier with our new place!",
    imageUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1044&q=80"
  },
  {
    id: "2",
    name: "Robert Chen",
    position: "Property Investor",
    content: "I've worked with many real estate companies over the years, but DreamHouse consistently delivers the best service and results. Their market knowledge and negotiation skills are unmatched.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: "3",
    name: "Maria Rodriguez",
    position: "First-Time Seller",
    content: "Selling my home was so stress-free with DreamHouse. They guided me through every step, from staging to closing. My house sold for above asking price in just one week!",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
  }
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/10 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">About DreamHouse</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Your trusted partner in finding the perfect property since 2005
              </p>
              <Button asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2005, DreamHouse began with a simple mission: to make the process of buying, selling, and renting properties as smooth and stress-free as possible. What started as a small team of passionate real estate enthusiasts has grown into a full-service agency with a reputation for excellence.
                </p>
                <p className="text-muted-foreground mb-6">
                  Today, we're proud to have helped thousands of clients find their perfect homes, investment properties, and commercial spaces. Our commitment to personalized service, market expertise, and client satisfaction remains at the heart of everything we do.
                </p>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-primary mr-2" />
                  <span className="font-medium">Award-winning real estate agency since 2010</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
                  alt="Office building"
                  className="rounded-lg h-40 object-cover w-full"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1153&q=80"
                  alt="House"
                  className="rounded-lg h-40 object-cover w-full"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                  alt="Agent"
                  className="rounded-lg h-40 object-cover w-full"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Happy family"
                  className="rounded-lg h-40 object-cover w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission Section */}
        <section className="bg-muted/30 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-xl mb-8">
                To guide our clients through every step of their real estate journey with integrity, expertise, and personalized service.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-background p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Home className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Find Dream Homes</h3>
                  <p className="text-muted-foreground">We match people with properties that perfectly suit their needs and desires.</p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Client First</h3>
                  <p className="text-muted-foreground">We prioritize our clients' satisfaction and build lasting relationships based on trust.</p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Market Expertise</h3>
                  <p className="text-muted-foreground">Our deep knowledge of local markets helps clients make informed decisions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Team meeting"
                  className="rounded-lg w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose DreamHouse?</h2>
                <ul className="space-y-4">
                  <li className="flex">
                    <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Experienced Team</h3>
                      <p className="text-muted-foreground">Our agents have an average of 10+ years in the real estate industry.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Local Expertise</h3>
                      <p className="text-muted-foreground">We have in-depth knowledge of neighborhoods, schools, market trends, and property values.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Personalized Approach</h3>
                      <p className="text-muted-foreground">We take the time to understand your unique needs and preferences.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Comprehensive Services</h3>
                      <p className="text-muted-foreground">From searching to closing, we provide support at every stage of the process.</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button asChild variant="outline">
                    <Link to="/agents">
                      Meet Our Team <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <Testimonials testimonials={testimonials} />
        
        {/* CTA Section */}
        <section className="bg-primary/10 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Property?</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Let our experienced team guide you through the process and help you make your real estate dreams a reality.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/properties">Browse Properties</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
