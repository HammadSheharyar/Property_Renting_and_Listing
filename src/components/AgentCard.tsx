
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export interface Agent {
  id: string;
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  imageUrl: string;
  listings: number;
}

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <Card className="overflow-hidden h-full">
      <CardHeader className="p-0">
        <img 
          src={agent.imageUrl} 
          alt={agent.name} 
          className="w-full h-56 object-cover"
        />
      </CardHeader>
      <CardContent className="text-center pt-6">
        <h3 className="text-xl font-medium mb-1">{agent.name}</h3>
        <p className="text-muted-foreground mb-2">{agent.title}</p>
        <p className="text-sm mb-2">{agent.listings} Listings</p>
        <p className="text-sm line-clamp-3">{agent.bio}</p>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button variant="outline" className="w-full" asChild>
          <Link to={`/agents/${agent.id}`}>View Profile</Link>
        </Button>
        <div className="flex space-x-2 w-full">
          <Button variant="secondary" className="w-1/2" asChild>
            <a href={`mailto:${agent.email}`}>
              <Mail className="mr-2 h-4 w-4" /> Email
            </a>
          </Button>
          <Button variant="secondary" className="w-1/2" asChild>
            <a href={`tel:${agent.phone}`}>
              <Phone className="mr-2 h-4 w-4" /> Call
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
