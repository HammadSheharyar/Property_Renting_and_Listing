
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Find Your Perfect Property
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            We help you find the property of your dreams. Browse through our extensive selection of homes, apartments, and commercial spaces.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link to="/properties?status=for-sale">Buy</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/properties?status=for-rent">Rent</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/post-property">Sell</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
