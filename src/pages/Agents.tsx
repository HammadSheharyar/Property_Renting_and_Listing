
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Agent, AgentCard } from "@/components/AgentCard";

// Mock data - in a real app, you would fetch this from an API
const mockAgents: Agent[] = [
  {
    id: "1",
    name: "John Smith",
    title: "Real Estate Broker",
    bio: "John has over 15 years of experience helping clients find their perfect homes in the Los Angeles area.",
    email: "john@dreamhouse.com",
    phone: "(123) 456-7890",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    listings: 24
  },
  {
    id: "2",
    name: "Sarah Johnson",
    title: "Senior Agent",
    bio: "Sarah specializes in luxury properties and has a keen eye for detail when it comes to high-end real estate.",
    email: "sarah@dreamhouse.com",
    phone: "(123) 456-7891",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    listings: 18
  },
  {
    id: "3",
    name: "Michael Chen",
    title: "Commercial Specialist",
    bio: "Michael has extensive knowledge of commercial real estate and helps businesses find the perfect locations.",
    email: "michael@dreamhouse.com",
    phone: "(123) 456-7892",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    listings: 15
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    title: "Rental Specialist",
    bio: "Emily helps clients navigate the competitive rental market with her extensive network and negotiation skills.",
    email: "emily@dreamhouse.com",
    phone: "(123) 456-7893",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    listings: 22
  },
  {
    id: "5",
    name: "David Wilson",
    title: "First-Time Buyer Specialist",
    bio: "David is passionate about helping first-time homebuyers navigate the complex process of purchasing their first property.",
    email: "david@dreamhouse.com",
    phone: "(123) 456-7894",
    imageUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    listings: 12
  },
  {
    id: "6",
    name: "Lisa Thompson",
    title: "Luxury Home Specialist",
    bio: "Lisa has a portfolio of high-end properties and a clientele of discerning buyers looking for their dream homes.",
    email: "lisa@dreamhouse.com",
    phone: "(123) 456-7895",
    imageUrl: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    listings: 19
  }
];

export default function Agents() {
  const [agents] = useState<Agent[]>(mockAgents);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="bg-muted/30 py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-3xl font-bold mb-2">Our Real Estate Agents</h1>
              <p className="text-muted-foreground">
                Meet our team of dedicated professionals who are committed to helping you find your perfect property
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agents.map((agent) => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
