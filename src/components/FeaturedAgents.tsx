
import { Agent, AgentCard } from "@/components/AgentCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface FeaturedAgentsProps {
  agents: Agent[];
}

export function FeaturedAgents({ agents }: FeaturedAgentsProps) {
  // Only show first 3 agents on homepage
  const featuredAgents = agents.slice(0, 3);
  
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex flex-col items-center mb-8 text-center">
          <h2 className="text-3xl font-bold mb-2">Meet Our Top Agents</h2>
          <p className="text-muted-foreground max-w-2xl">
            Our experienced real estate professionals are here to help you find the perfect property
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link to="/agents">View All Agents</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
