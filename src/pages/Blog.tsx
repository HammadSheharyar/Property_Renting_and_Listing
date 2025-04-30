
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Tips for First-Time Home Buyers",
    excerpt: "Navigating the process of buying your first home can be daunting. Here are ten essential tips to help you make informed decisions and enjoy the journey.",
    date: "April 15, 2023",
    author: "Sarah Johnson",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
    category: "Buying"
  },
  {
    id: "2",
    title: "How to Stage Your Home for a Quick Sale",
    excerpt: "Proper staging can significantly impact how quickly your home sells and the price it commands. Learn effective staging techniques from the experts.",
    date: "March 22, 2023",
    author: "Michael Chen",
    imageUrl: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Selling"
  },
  {
    id: "3",
    title: "The Future of Commercial Real Estate Post-Pandemic",
    excerpt: "The pandemic has transformed how businesses view office spaces. Discover the emerging trends that are reshaping commercial real estate.",
    date: "February 8, 2023",
    author: "Emily Rodriguez",
    imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    category: "Commercial"
  },
  {
    id: "4",
    title: "5 Home Renovation Projects with the Best ROI",
    excerpt: "Not all renovations are created equal when it comes to return on investment. Learn which projects give you the most bang for your buck.",
    date: "January 17, 2023",
    author: "David Wilson",
    imageUrl: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1092&q=80",
    category: "Renovation"
  },
  {
    id: "5",
    title: "Understanding Real Estate Market Cycles",
    excerpt: "Real estate markets move in cycles. Learn how to identify where the market is in its cycle and what that means for buyers and sellers.",
    date: "December 5, 2022",
    author: "Lisa Thompson",
    imageUrl: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Market Analysis"
  },
  {
    id: "6",
    title: "Navigating Rental Laws: What Landlords Need to Know",
    excerpt: "Rental laws vary by location and are constantly evolving. Stay informed about the key legal considerations for property owners and landlords.",
    date: "November 11, 2022",
    author: "John Smith",
    imageUrl: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Renting"
  }
];

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="container py-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl font-bold mb-2">Real Estate Blog & Insights</h1>
            <p className="text-muted-foreground">
              Stay informed with the latest trends, tips, and news in real estate
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/400x250?text=Blog+Image";
                    }}
                  />
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardContent>
                
                <CardFooter>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="h-4 w-4 mr-1" />
                    <span>By {post.author}</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
