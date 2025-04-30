
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { House, Menu, MapPin, Building, User, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  
  const NavItems = () => (
    <ul className={isMobile ? "flex flex-col space-y-4" : "flex items-center space-x-6"}>
      <li>
        <Link to="/" className="font-medium hover:text-primary">Home</Link>
      </li>
      <li>
        <Link to="/properties?status=for-sale" className="font-medium hover:text-primary">Buy</Link>
      </li>
      <li>
        <Link to="/properties?status=for-rent" className="font-medium hover:text-primary">Rent</Link>
      </li>
      <li>
        <Link to="/post-property" className="font-medium hover:text-primary">Sell</Link>
      </li>
      <li>
        <Link to="/agents" className="font-medium hover:text-primary">Agents</Link>
      </li>
      <li>
        <Link to="/blog" className="font-medium hover:text-primary">Blog</Link>
      </li>
      <li>
        <Link to="/contact" className="font-medium hover:text-primary">Contact</Link>
      </li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center">
          <House className="h-6 w-6 mr-2" />
          <span className="font-bold text-xl">DreamHouse</span>
        </Link>
        
        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>DreamHouse</SheetTitle>
              </SheetHeader>
              <div className="mt-8">
                <NavItems />
              </div>
              <div className="mt-8 flex flex-col space-y-2">
                <Button asChild variant="outline">
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <User className="mr-2 h-4 w-4" /> Login
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/signup" onClick={() => setIsOpen(false)}>
                    <User className="mr-2 h-4 w-4" /> Sign Up
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <>
            <nav>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavItems />
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
            <div className="flex items-center space-x-2">
              <Button asChild variant="ghost">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
