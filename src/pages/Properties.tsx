
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropertyCard, Property } from "@/components/PropertyCard";

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
  },
  {
    id: "4",
    title: "Beachfront Villa",
    type: "house",
    price: 1200000,
    location: "Miami, FL",
    address: "321 Ocean Drive",
    bedrooms: 5,
    bathrooms: 4,
    area: 3500,
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    status: "for-sale",
    featured: true
  },
  {
    id: "5",
    title: "Cozy Studio Apartment",
    type: "apartment",
    price: 1200,
    location: "Seattle, WA",
    address: "654 Pine Street",
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    status: "for-rent"
  },
  {
    id: "6",
    title: "Retail Space in Shopping District",
    type: "commercial",
    price: 720000,
    location: "Austin, TX",
    address: "987 Market Street",
    area: 1800,
    imageUrl: "https://images.unsplash.com/photo-1581281863883-2469417a1668?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    status: "for-sale"
  }
];

export default function Properties() {
  const [searchParams] = useSearchParams();
  const statusFilter = searchParams.get("status");
  
  // Filter properties based on URL parameters
  const filteredProperties = statusFilter 
    ? mockProperties.filter(property => property.status === statusFilter)
    : mockProperties;
    
  const statusTitle = statusFilter === "for-sale" 
    ? "Properties For Sale" 
    : statusFilter === "for-rent" 
      ? "Properties For Rent" 
      : "All Properties";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="bg-muted/30 py-12">
          <div className="container">
            <h1 className="text-3xl font-bold mb-2">{statusTitle}</h1>
            <p className="text-muted-foreground mb-8">
              {filteredProperties.length} properties found
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
            
            {filteredProperties.length === 0 && (
              <div className="text-center py-16">
                <h2 className="text-xl font-medium mb-2">No properties found</h2>
                <p className="text-muted-foreground">
                  Try adjusting your search parameters
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
