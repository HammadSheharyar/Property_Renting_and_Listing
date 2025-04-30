
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { PropertyType } from "./PropertyCard";
import { Search } from "lucide-react";

export function PropertySearch() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState<PropertyType | "">("");
  const [status, setStatus] = useState<"for-sale" | "for-rent" | "">("");
  const [priceRange, setPriceRange] = useState([0, 2000000]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    if (location) params.append("location", location);
    if (propertyType) params.append("type", propertyType);
    if (status) params.append("status", status);
    params.append("minPrice", priceRange[0].toString());
    params.append("maxPrice", priceRange[1].toString());
    
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <section className="bg-card shadow-lg rounded-lg -mt-6 md:-mt-12 relative z-10 mx-4 md:mx-auto max-w-5xl">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Find Your Property</h2>
        
        <form onSubmit={handleSearch}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="text-sm font-medium mb-1 block">Location</label>
              <Input 
                placeholder="City, neighborhood..." 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">Property Type</label>
              <Select value={propertyType} onValueChange={(value) => setPropertyType(value as PropertyType)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All types</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">Status</label>
              <Select value={status} onValueChange={(value) => setStatus(value as "for-sale" | "for-rent" | "")}>
                <SelectTrigger>
                  <SelectValue placeholder="Buy or Rent" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All</SelectItem>
                  <SelectItem value="for-sale">For Sale</SelectItem>
                  <SelectItem value="for-rent">For Rent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">Price Range</label>
              <div className="px-3">
                <Slider
                  defaultValue={[0, 2000000]}
                  max={2000000}
                  step={50000}
                  minStepsBetweenThumbs={1}
                  onValueChange={setPriceRange}
                />
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>${priceRange[0].toLocaleString()}</span>
                  <span>${priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
          
          <Button type="submit" className="w-full">
            <Search className="mr-2 h-4 w-4" /> Search Properties
          </Button>
        </form>
      </div>
    </section>
  );
}
