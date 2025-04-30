
import { Property } from "@/components/PropertyCard";
import { Agent } from "@/components/AgentCard";

// Define the Testimonial type here since it's not exported from the component
export interface Testimonial {
  id: string;
  name: string;
  position: string;
  content: string;
  imageUrl: string;
}

// Mock Properties
export const properties: Property[] = [
  {
    id: "1",
    title: "Modern Apartment with Ocean View",
    type: "apartment",
    price: 350000,
    location: "Miami, FL",
    address: "123 Ocean Drive, Miami, FL 33139",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    featured: true,
    status: "for-sale"
  },
  {
    id: "2",
    title: "Luxury Villa with Pool",
    type: "house",
    price: 1250000,
    location: "Beverly Hills, CA",
    address: "456 Luxury Lane, Beverly Hills, CA 90210",
    bedrooms: 5,
    bathrooms: 4,
    area: 3800,
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    featured: true,
    status: "for-sale"
  },
  {
    id: "3",
    title: "Downtown Office Space",
    type: "commercial",
    price: 8500,
    location: "New York, NY",
    address: "789 Business Ave, New York, NY 10001",
    area: 2500,
    imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    status: "for-rent"
  },
  {
    id: "4",
    title: "Cozy Family Home",
    type: "house",
    price: 3200,
    location: "Portland, OR",
    address: "321 Family Street, Portland, OR 97205",
    bedrooms: 4,
    bathrooms: 3,
    area: 2200,
    imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    featured: true,
    status: "for-rent"
  },
  {
    id: "5",
    title: "Penthouse with City Views",
    type: "apartment",
    price: 1500000,
    location: "Chicago, IL",
    address: "555 Skyline Blvd, Chicago, IL 60611",
    bedrooms: 3,
    bathrooms: 3.5,
    area: 2800,
    imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    status: "for-sale"
  },
  {
    id: "6",
    title: "Retail Space in Shopping Center",
    type: "commercial",
    price: 5700,
    location: "Seattle, WA",
    address: "987 Mall Road, Seattle, WA 98101",
    area: 1800,
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    status: "for-rent"
  }
];

// Mock Agents
export const agents: Agent[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    title: "Senior Real Estate Agent",
    bio: "Sarah has over 15 years of experience in luxury real estate. She specializes in high-end properties and has closed over $100 million in sales.",
    email: "sarah.johnson@dreamhouse.com",
    phone: "+1 (555) 123-4567",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    listings: 32
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    title: "Commercial Property Specialist",
    bio: "Michael focuses on commercial real estate with expertise in office spaces and retail properties. He has helped numerous businesses find their perfect location.",
    email: "michael.rodriguez@dreamhouse.com",
    phone: "+1 (555) 987-6543",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    listings: 28
  },
  {
    id: "3",
    name: "Emily Chen",
    title: "Residential Sales Expert",
    bio: "Emily is known for her personal approach to finding clients their dream homes. She is consistently ranked in the top 1% of residential agents nationwide.",
    email: "emily.chen@dreamhouse.com",
    phone: "+1 (555) 456-7890",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    listings: 45
  },
  {
    id: "4",
    name: "Daniel Wilson",
    title: "Luxury Property Consultant",
    bio: "Daniel specializes in luxury properties and has extensive knowledge of high-end real estate markets across the country.",
    email: "daniel.wilson@dreamhouse.com",
    phone: "+1 (555) 789-0123",
    imageUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    listings: 23
  }
];

// Mock Testimonials
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Robert Thompson",
    position: "Homebuyer",
    content: "Sarah Johnson was amazing throughout our entire home buying process. She understood exactly what we were looking for and found us the perfect home within our budget. Highly recommended!",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "2",
    name: "Jennifer Adams",
    position: "Property Seller",
    content: "We sold our house in just two weeks thanks to Michael's expertise and marketing strategy. The process was smooth, and we got an offer above asking price!",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "3",
    name: "David Chen",
    position: "Business Owner",
    content: "Emily helped us find the perfect location for our new restaurant. Her knowledge of commercial properties and lease negotiations saved us thousands of dollars.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];
