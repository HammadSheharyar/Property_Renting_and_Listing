
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Facebook, Twitter, Linkedin, ArrowLeft } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  authorTitle: string;
  imageUrl: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Tips for First-Time Home Buyers",
    excerpt: "Navigating the process of buying your first home can be daunting. Here are ten essential tips to help you make informed decisions and enjoy the journey.",
    content: `
      <p>Buying your first home is an exciting milestone, but it can also be overwhelming. Here are ten essential tips to help you navigate the process:</p>
      
      <h3>1. Get your finances in order</h3>
      <p>Before you start looking at properties, assess your financial situation. Check your credit score, pay down existing debt, and save for a down payment. Most experts recommend having at least 20% of the home's purchase price saved for a down payment to avoid private mortgage insurance.</p>
      
      <h3>2. Get pre-approved for a mortgage</h3>
      <p>A pre-approval letter shows sellers that you're serious and gives you a clear idea of what you can afford. It's different from pre-qualification; pre-approval involves submitting financial documents and getting a conditional commitment from a lender.</p>
      
      <h3>3. Determine what you can afford</h3>
      <p>Just because a bank approves you for a certain amount doesn't mean you should spend that much. Consider your lifestyle, future plans, and ongoing expenses when deciding on a budget.</p>
      
      <h3>4. Make a list of must-haves</h3>
      <p>Differentiate between what you need and what you want in a home. This will help you narrow down options and make decisions when viewing properties.</p>
      
      <h3>5. Research neighborhoods</h3>
      <p>Look beyond the home itself. Consider factors like school districts, proximity to work, local amenities, crime rates, and future development plans.</p>
      
      <h3>6. Hire a reputable real estate agent</h3>
      <p>A good buyer's agent will represent your interests, help you find suitable properties, and negotiate on your behalf. Ask for recommendations and interview multiple agents before deciding.</p>
      
      <h3>7. Don't skip the home inspection</h3>
      <p>Even if a property looks perfect, a professional inspection can uncover hidden issues like structural problems, outdated electrical systems, or water damage.</p>
      
      <h3>8. Consider all costs</h3>
      <p>The purchase price is just part of the equation. Budget for closing costs, moving expenses, immediate repairs, maintenance, property taxes, homeowners insurance, and possible HOA fees.</p>
      
      <h3>9. Don't make major financial changes</h3>
      <p>Once you've applied for a mortgage, avoid making large purchases, changing jobs, or applying for new credit until after closing, as these can affect your loan approval.</p>
      
      <h3>10. Look to the future</h3>
      <p>Consider how long you plan to stay in the home and how your needs might change over time. A starter home might be perfect for now, but think about whether it will accommodate future life changes.</p>
      
      <p>Remember, buying a home is a significant financial decision, but it's also an emotional one. Take your time, do your research, and don't rush the process. With careful planning and the right team supporting you, finding your first home can be a rewarding experience.</p>
    `,
    date: "April 15, 2023",
    author: "Sarah Johnson",
    authorTitle: "Senior Real Estate Agent",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
    category: "Buying"
  },
  {
    id: "2",
    title: "How to Stage Your Home for a Quick Sale",
    excerpt: "Proper staging can significantly impact how quickly your home sells and the price it commands. Learn effective staging techniques from the experts.",
    content: `
      <p>When it comes to selling your home, first impressions matter. Professional staging can help potential buyers envision themselves living in the space and can significantly impact your sale price and time on market. Here's how to stage your home effectively:</p>
      
      <h3>Declutter and Depersonalize</h3>
      <p>Start by removing personal items like family photos, collections, and memorabilia. Pack away excess furniture and belongings to make rooms appear larger and more inviting. Aim for a clean, neutral space that allows buyers to envision their own belongings in the home.</p>
      
      <h3>Deep Clean Everything</h3>
      <p>A spotless home signals to buyers that the property has been well-maintained. Pay special attention to kitchens and bathrooms, cleaning grout, removing soap scum, and ensuring fixtures shine. Don't forget often overlooked areas like baseboards, ceiling fans, and inside cabinets.</p>
      
      <h3>Make Necessary Repairs</h3>
      <p>Address any minor issues that might detract from your home's appeal. Fix leaky faucets, replace burned-out light bulbs, patch holes in walls, and touch up paint where needed. Small problems can signal neglect to potential buyers.</p>
      
      <h3>Focus on Curb Appeal</h3>
      <p>Many buyers decide whether they're interested before they even step inside. Ensure your home's exterior makes a positive impression by maintaining the lawn, trimming bushes, power washing siding and walkways, and adding fresh mulch and flowers to garden beds.</p>
      
      <h3>Optimize Furniture Placement</h3>
      <p>Arrange furniture to showcase the room's purpose and flow. Create conversation areas in living spaces, ensure pathways are clear, and remove excess pieces that make rooms feel cramped. Consider renting furniture if yours is outdated or oversized.</p>
      
      <h3>Use Strategic Lighting</h3>
      <p>Good lighting can transform a space. Open curtains and blinds to maximize natural light, increase wattage in fixtures where needed, and add lamps to dark corners. Aim for a layered lighting approach with ambient, task, and accent lighting.</p>
      
      <h3>Add Thoughtful Accents</h3>
      <p>Strategic accessories can add warmth and style. Consider fresh flowers, coordinated towels in bathrooms, a few tasteful decorative items, and perhaps a bowl of fresh fruit in the kitchen. Choose a cohesive color palette that complements your home's features.</p>
      
      <h3>Don't Neglect Storage Areas</h3>
      <p>Buyers will look in closets, pantries, and cabinets. Organize these spaces to showcase their capacity. Remove some items if needed to prevent an overcrowded appearance.</p>
      
      <h3>Consider Professional Help</h3>
      <p>If your budget allows, hiring a professional stager can be a worthwhile investment. These experts understand buyer psychology and current trends, and they often have an inventory of furniture and accessories to enhance your home's appeal.</p>
      
      <p>Remember, the goal of staging is not to showcase your personal style but to create a neutral, appealing space that allows potential buyers to connect emotionally with your home. With thoughtful staging, you can help buyers see your property's potential and increase your chances of a quick, profitable sale.</p>
    `,
    date: "March 22, 2023",
    author: "Michael Chen",
    authorTitle: "Home Staging Specialist",
    imageUrl: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Selling"
  }
];

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(post => post.id === id);
  
  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center px-4 py-16">
            <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The blog post you are looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="bg-muted/30 py-6">
          <div className="container">
            <Link to="/blog" className="flex items-center text-muted-foreground hover:text-foreground mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{post.title}</h1>
            <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground mb-4">
              <Badge variant="outline">{post.category}</Badge>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>By {post.author}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/800x400?text=Blog+Image";
                  }}
                />
              </div>
              
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
              
              <div className="mt-8 border-t pt-6">
                <h3 className="text-lg font-bold mb-4">Share this article</h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4">About the Author</h3>
                <div className="flex items-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-muted overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" 
                      alt={post.author} 
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{post.author}</p>
                    <p className="text-sm text-muted-foreground">{post.authorTitle}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  An experienced real estate professional with a passion for helping clients navigate the property market with confidence and success.
                </p>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Related Articles</h3>
                <ul className="space-y-4">
                  {blogPosts
                    .filter(relatedPost => relatedPost.id !== post.id)
                    .slice(0, 3)
                    .map(relatedPost => (
                      <li key={relatedPost.id}>
                        <Link 
                          to={`/blog/${relatedPost.id}`} 
                          className="hover:text-primary transition-colors"
                        >
                          {relatedPost.title}
                        </Link>
                        <p className="text-xs text-muted-foreground mt-1">{relatedPost.date}</p>
                      </li>
                    ))
                  }
                </ul>
              </div>
              
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest real estate tips and insights delivered to your inbox.
                </p>
                <div className="space-y-2">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="w-full px-4 py-2 border rounded-md"
                  />
                  <Button className="w-full">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
