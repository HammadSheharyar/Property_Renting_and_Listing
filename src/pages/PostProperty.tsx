import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function PostProperty() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast("Property submitted", {
        description: "Your property has been submitted for review.",
      });
      // Reset form
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="container py-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">List Your Property</h1>
              <p className="text-muted-foreground">
                Complete the form below to submit your property for listing
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-medium">Property Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Property Title*</Label>
                    <Input id="title" placeholder="e.g. Modern Family Home" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="type">Property Type*</Label>
                    <Select required>
                      <SelectTrigger id="type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="status">Listing Status*</Label>
                    <Select required>
                      <SelectTrigger id="status">
                        <SelectValue placeholder="For sale or rent" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="for-sale">For Sale</SelectItem>
                        <SelectItem value="for-rent">For Rent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="price">Price*</Label>
                    <Input id="price" type="number" placeholder="Enter amount" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description*</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe your property" 
                    rows={4}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-xl font-medium">Property Features</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bedrooms">Bedrooms</Label>
                    <Input id="bedrooms" type="number" placeholder="No. of bedrooms" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bathrooms">Bathrooms</Label>
                    <Input id="bathrooms" type="number" placeholder="No. of bathrooms" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="area">Area (sq ft)*</Label>
                    <Input id="area" type="number" placeholder="Total area" required />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-xl font-medium">Location</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address*</Label>
                    <Input id="address" placeholder="Enter street address" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">City, State*</Label>
                    <Input id="location" placeholder="e.g. Los Angeles, CA" required />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-xl font-medium">Contact Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name*</Label>
                    <Input id="name" placeholder="Full name" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email*</Label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number*</Label>
                  <Input id="phone" placeholder="Your phone number" required />
                </div>
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Property Listing"}
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
