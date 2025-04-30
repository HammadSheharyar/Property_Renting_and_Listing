
import { PropertyCard, Property } from "@/components/PropertyCard";

interface FeaturedListingsProps {
  properties: Property[];
}

export function FeaturedListings({ properties }: FeaturedListingsProps) {
  const featuredProperties = properties.filter(property => property.featured);
  
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex flex-col items-center mb-8 text-center">
          <h2 className="text-3xl font-bold mb-2">Featured Properties</h2>
          <p className="text-muted-foreground max-w-2xl">
            Explore our handpicked selection of premium properties available for sale and rent
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
