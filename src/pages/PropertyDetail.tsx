
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Bed, Bath, Square, ArrowLeft, Building } from "lucide-react";
import { Property } from "@/components/PropertyCard";

// Mock data - in a real app, you would fetch this from an API
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
  },
  {
    id: "3",
    title: "Office Space in Business District",
    type: "commercial",
    price: 5000,
    location: "Chicago, IL",
    address: "789 Business Way",
    area: 3000,
    imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    status: "for-rent"
  }
];

export default function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const property = mockProperties.find(p => p.id === id);
  
  if (!property) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center px-4 py-16">
            <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The property you are looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/properties">View All Properties</Link>
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
          <Link to="/properties" className="flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Properties
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative">
                <img 
                  src={property.imageUrl} 
                  alt={property.title} 
                  className="w-full h-[400px] object-cover rounded-lg"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/800x400?text=Property+Image";
                  }}
                />
                
                <Badge className="absolute top-4 left-4 bg-primary">
                  {property.status === "for-sale" ? "For Sale" : "For Rent"}
                </Badge>
                
                {property.featured && (
                  <Badge className="absolute top-4 right-4 bg-yellow-500">Featured</Badge>
                )}
              </div>
              
              <div className="mt-6">
                <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{property.address}, {property.location}</span>
                </div>
                
                <div className="flex items-center space-x-4 mb-6">
                  <span className="font-bold text-2xl">
                    {property.status === "for-sale" ? 
                      `$${property.price.toLocaleString()}` : 
                      `$${property.price.toLocaleString()}/month`
                    }
                  </span>
                  <Badge variant="outline" className="bg-secondary/50">
                    {property.type === "house" ? "House" : property.type === "apartment" ? "Apartment" : "Commercial"}
                  </Badge>
                </div>
                
                <div className="flex flex-wrap gap-6 mb-8">
                  {property.type !== "commercial" && property.bedrooms !== undefined && (
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-1">
                        <Bed className="h-6 w-6" />
                      </div>
                      <span className="font-medium">{property.bedrooms}</span>
                      <span className="text-xs text-muted-foreground">{property.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}</span>
                    </div>
                  )}
                  
                  {property.type !== "commercial" && property.bathrooms !== undefined && (
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-1">
                        <Bath className="h-6 w-6" />
                      </div>
                      <span className="font-medium">{property.bathrooms}</span>
                      <span className="text-xs text-muted-foreground">{property.bathrooms === 1 ? 'Bathroom' : 'Bathrooms'}</span>
                    </div>
                  )}
                  
                  {property.area !== undefined && (
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-1">
                        <Square className="h-6 w-6" />
                      </div>
                      <span className="font-medium">{property.area}</span>
                      <span className="text-xs text-muted-foreground">Square Feet</span>
                    </div>
                  )}
                  
                  {property.type === "commercial" && (
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-1">
                        <Building className="h-6 w-6" />
                      </div>
                      <span className="font-medium">Commercial</span>
                      <span className="text-xs text-muted-foreground">Property</span>
                    </div>
                  )}
                </div>
                
                <Tabs defaultValue="description">
                  <TabsList>
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="location">Location</TabsTrigger>
                  </TabsList>
                  <TabsContent value="description" className="mt-4">
                    <h3 className="text-lg font-medium mb-2">About this property</h3>
                    <p className="text-muted-foreground">
                      This beautiful {property.type} is located in {property.location}. 
                      Featuring {property.bedrooms} bedrooms and {property.bathrooms} bathrooms, it spans {property.area} square feet. 
                      Perfect for anyone looking to {property.status === "for-sale" ? "buy" : "rent"} in this desirable area.
                    </p>
                  </TabsContent>
                  <TabsContent value="features" className="mt-4">
                    <h3 className="text-lg font-medium mb-2">Features and Amenities</h3>
                    <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
                      <li className="flex items-center">• Modern Kitchen</li>
                      <li className="flex items-center">• Air Conditioning</li>
                      <li className="flex items-center">• Parking Space</li>
                      <li className="flex items-center">• High-Speed Internet</li>
                      <li className="flex items-center">• Hardwood Floors</li>
                      {property.type !== "commercial" && <li className="flex items-center">• Laundry Room</li>}
                      {property.type === "house" && <li className="flex items-center">• Garden</li>}
                      {property.type === "apartment" && <li className="flex items-center">• Gym Access</li>}
                    </ul>
                  </TabsContent>
                  <TabsContent value="location" className="mt-4">
                    <h3 className="text-lg font-medium mb-2">Location</h3>
                    <p className="text-muted-foreground mb-4">
                      {property.address}, {property.location}
                    </p>
                    <div className="h-[300px] bg-muted flex items-center justify-center">
                      <p className="text-muted-foreground">Map location would be displayed here</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            <div className="bg-muted/30 p-6 rounded-lg h-fit">
              <h3 className="text-xl font-bold mb-4">Contact Agent</h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-muted overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    alt="Agent" 
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="font-medium">John Smith</p>
                  <p className="text-sm text-muted-foreground">Real Estate Agent</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <Button className="w-full">
                  Schedule a Viewing
                </Button>
                <Button variant="outline" className="w-full">
                  Request More Info
                </Button>
                <Button variant="secondary" className="w-full">
                  Call Agent
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
