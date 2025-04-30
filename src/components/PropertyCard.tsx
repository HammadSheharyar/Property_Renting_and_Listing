
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, MapPin, Bed, Bath, Square } from "lucide-react";

export type PropertyType = "house" | "apartment" | "commercial";

export interface Property {
  id: string;
  title: string;
  type: PropertyType;
  price: number;
  location: string;
  address: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  imageUrl: string;
  featured?: boolean;
  status: "for-sale" | "for-rent";
}

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const { id, title, type, price, location, bedrooms, bathrooms, area, imageUrl, featured, status } = property;
  
  return (
    <Link to={`/properties/${id}`}>
      <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
        <div className="relative">
          <img 
            src={imageUrl} 
            alt={title} 
            className="h-48 w-full object-cover"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://placehold.co/400x250?text=Property+Image";
            }}
          />
          {featured && (
            <Badge className="absolute top-2 right-2 bg-yellow-500">Featured</Badge>
          )}
          <Badge className="absolute top-2 left-2 bg-primary">
            {status === "for-sale" ? "For Sale" : "For Rent"}
          </Badge>
        </div>
        
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg line-clamp-1">{title}</CardTitle>
          </div>
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="truncate">{location}</span>
          </div>
        </CardHeader>
        
        <CardContent className="pb-2">
          <p className="font-bold text-lg">
            {status === "for-sale" ? 
              `$${price.toLocaleString()}` : 
              `$${price.toLocaleString()}/month`
            }
          </p>
          
          <div className="flex items-center justify-between mt-2 text-sm">
            {type !== "commercial" && bedrooms !== undefined && (
              <div className="flex items-center">
                <Bed className="h-4 w-4 mr-1" />
                <span>{bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'}</span>
              </div>
            )}
            
            {type !== "commercial" && bathrooms !== undefined && (
              <div className="flex items-center">
                <Bath className="h-4 w-4 mr-1" />
                <span>{bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
              </div>
            )}
            
            {area !== undefined && (
              <div className="flex items-center">
                <Square className="h-4 w-4 mr-1" />
                <span>{area} sq ft</span>
              </div>
            )}
            
            {type === "commercial" && (
              <div className="flex items-center">
                <Building className="h-4 w-4 mr-1" />
                <span>Commercial</span>
              </div>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="pt-0">
          <Badge variant="outline" className="bg-secondary/50">
            {type === "house" ? "House" : type === "apartment" ? "Apartment" : "Commercial"}
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
}
