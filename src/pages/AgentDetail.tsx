
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PropertyCard, Property } from "@/components/PropertyCard";
import { Mail, Phone, ArrowLeft, Award, Calendar, MapPin } from "lucide-react";
import { Agent } from "@/components/AgentCard";

// Mock data - in a real app, you would fetch this from an API
const mockAgents: Agent[] = [
  {
    id: "1",
    name: "John Smith",
    title: "Real Estate Broker",
    bio: "John has over 15 years of experience helping clients find their perfect homes in the Los Angeles area. He specializes in residential properties and has a deep understanding of the local market trends. With a background in architecture, John provides unique insights into property potential and renovation possibilities. John is known for his personalized approach to each client and his commitment to finding the perfect match for their needs and budget.",
    email: "john@dreamhouse.com",
    phone: "(123) 456-7890",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    listings: 24
  },
  {
    id: "2",
    name: "Sarah Johnson",
    title: "Senior Agent",
    bio: "Sarah specializes in luxury properties and has a keen eye for detail when it comes to high-end real estate. With over 10 years in the industry, she has built a reputation for excellence and discretion when dealing with high-profile clients. Sarah's network of contacts in the luxury market is unparalleled, giving her clients access to exclusive properties often before they hit the market. She is passionate about matching clients with their dream homes and providing white-glove service throughout the entire process.",
    email: "sarah@dreamhouse.com",
    phone: "(123) 456-7891",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    listings: 18
  },
  {
    id: "3",
    name: "Michael Chen",
    title: "Commercial Specialist",
    bio: "Michael has extensive knowledge of commercial real estate and helps businesses find the perfect locations. With a background in business and finance, he understands the specific needs of commercial clients and the importance of location for business success. Michael works with retail, office, and industrial clients to find properties that meet their operational needs while also being sound financial investments. His analytical approach and market knowledge make him a valuable advisor for business owners and investors alike.",
    email: "michael@dreamhouse.com",
    phone: "(123) 456-7892",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    listings: 15
  }
];

const mockProperties: Property[] = [
  {
    id: "1",
    title: "Modern Family Home",
    type: "house",
    price: 450000,
    location: "Los Angeles, CA",
    address: "123 Palm Avenue",
    bedrooms: 4,
    bathrooms: 3,
    area: 2400,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    status: "for-sale",
    featured: true
  },
  {
    id: "2",
    title: "Downtown Luxury Apartment",
    type: "apartment",
    price: 2200,
    location: "New York, NY",
    address: "456 5th Avenue",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    status: "for-rent"
  }
];

export default function AgentDetail() {
  const { id } = useParams<{ id: string }>();
  const agent = mockAgents.find(a => a.id === id);
  
  // In a real app, you would filter properties by agent ID
  const agentProperties = mockProperties;
  
  if (!agent) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center px-4 py-16">
            <h1 className="text-2xl font-bold mb-4">Agent Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The agent you are looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/agents">View All Agents</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8">
          <Link to="/agents" className="flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Agents
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-muted/30 p-6 rounded-lg">
                <div className="flex flex-col items-center mb-6">
                  <img 
                    src={agent.imageUrl} 
                    alt={agent.name} 
                    className="w-40 h-40 rounded-full object-cover mb-4"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/400x400?text=Agent+Photo";
                    }}
                  />
                  <h1 className="text-2xl font-bold text-center">{agent.name}</h1>
                  <p className="text-muted-foreground">{agent.title}</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-muted-foreground" />
                    <a href={`mailto:${agent.email}`} className="text-muted-foreground hover:text-foreground">
                      {agent.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-muted-foreground" />
                    <a href={`tel:${agent.phone}`} className="text-muted-foreground hover:text-foreground">
                      {agent.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <Button asChild>
                    <a href={`mailto:${agent.email}`}>
                      <Mail className="mr-2 h-4 w-4" /> Contact via Email
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={`tel:${agent.phone}`}>
                      <Phone className="mr-2 h-4 w-4" /> Call Agent
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <Tabs defaultValue="about">
                <TabsList>
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="listings">Listings ({agent.listings})</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about" className="mt-6">
                  <h2 className="text-xl font-bold mb-4">About {agent.name}</h2>
                  <p className="text-muted-foreground mb-6">
                    {agent.bio}
                  </p>
                  
                  <h3 className="text-lg font-bold mb-3">Expertise</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start">
                      <Award className="h-5 w-5 mr-2 text-primary" />
                      <div>
                        <h4 className="font-medium">Professional Experience</h4>
                        <p className="text-sm text-muted-foreground">Over 10 years in real estate</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 mr-2 text-primary" />
                      <div>
                        <h4 className="font-medium">Availability</h4>
                        <p className="text-sm text-muted-foreground">Monday to Saturday, 9am-6pm</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-2 text-primary" />
                      <div>
                        <h4 className="font-medium">Areas Served</h4>
                        <p className="text-sm text-muted-foreground">Los Angeles, Beverly Hills, Santa Monica</p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3">Client Testimonials</h3>
                  <div className="space-y-4">
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <p className="italic mb-2">"Working with {agent.name} was a wonderful experience. Their knowledge and professionalism made finding our dream home easy."</p>
                      <p className="text-sm font-medium">- Satisfied Client</p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <p className="italic mb-2">"I've worked with many agents over the years, but {agent.name} truly stands out for their dedication and attention to detail."</p>
                      <p className="text-sm font-medium">- Repeat Client</p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="listings" className="mt-6">
                  <h2 className="text-xl font-bold mb-4">{agent.name}'s Listings</h2>
                  {agentProperties.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {agentProperties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No active listings at the moment.</p>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
