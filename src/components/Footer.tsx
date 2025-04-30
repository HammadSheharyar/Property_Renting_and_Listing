
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { House, Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <House className="h-6 w-6 mr-2" />
              <span className="font-bold text-xl">DreamHouse</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              We help you find the perfect property for your needs. Whether you're looking to buy, rent, or sell, we've got you covered.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/properties?status=for-sale" className="text-muted-foreground hover:text-foreground">Properties for Sale</Link></li>
              <li><Link to="/properties?status=for-rent" className="text-muted-foreground hover:text-foreground">Properties for Rent</Link></li>
              <li><Link to="/post-property" className="text-muted-foreground hover:text-foreground">List Your Property</Link></li>
              <li><Link to="/agents" className="text-muted-foreground hover:text-foreground">Our Agents</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-foreground">Blog & Insights</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact Us</Link></li>
              <li><Link to="/faqs" className="text-muted-foreground hover:text-foreground">FAQs</Link></li>
              <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest property updates and market insights.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Your email" type="email" />
              <Button>
                <Mail className="h-4 w-4 mr-2" /> Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DreamHouse Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
