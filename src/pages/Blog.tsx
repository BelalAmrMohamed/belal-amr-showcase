import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications in 2024",
      excerpt: "Discover the latest patterns and best practices for creating maintainable and scalable React applications that can grow with your business needs.",
      content: "Full article content would go here...",
      author: "Belal Amr",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "JavaScript", "Frontend", "Architecture"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "The Power of TypeScript: Why You Should Make the Switch",
      excerpt: "Explore how TypeScript can improve your development workflow, catch bugs early, and make your code more maintainable and robust.",
      content: "Full article content would go here...",
      author: "Belal Amr",
      publishDate: "2024-01-08",
      readTime: "6 min read",
      category: "TypeScript",
      tags: ["TypeScript", "JavaScript", "Development"],
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
      featured: true
    },
    {
      id: 3,
      title: "Modern CSS Techniques Every Developer Should Know",
      excerpt: "From CSS Grid to Custom Properties, learn the modern CSS techniques that will make your styling more efficient and maintainable.",
      content: "Full article content would go here...",
      author: "Belal Amr",
      publishDate: "2024-01-01",
      readTime: "10 min read",
      category: "CSS",
      tags: ["CSS", "Frontend", "Design", "Web Development"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "API Design Best Practices for Modern Applications",
      excerpt: "Learn how to design robust, scalable APIs that provide excellent developer experience and can evolve with your application's needs.",
      content: "Full article content would go here...",
      author: "Belal Amr",
      publishDate: "2023-12-20",
      readTime: "12 min read",
      category: "Backend",
      tags: ["API", "Backend", "REST", "GraphQL"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "Optimizing Web Performance: A Complete Guide",
      excerpt: "Comprehensive guide to web performance optimization, covering everything from image optimization to code splitting and caching strategies.",
      content: "Full article content would go here...",
      author: "Belal Amr",
      publishDate: "2023-12-15",
      readTime: "15 min read",
      category: "Performance",
      tags: ["Performance", "Optimization", "Web Development"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "Getting Started with Docker for Web Developers",
      excerpt: "A beginner-friendly guide to containerization with Docker, helping web developers streamline their development and deployment processes.",
      content: "Full article content would go here...",
      author: "Belal Amr",
      publishDate: "2023-12-10",
      readTime: "7 min read",
      category: "DevOps",
      tags: ["Docker", "DevOps", "Containerization"],
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335a?w=800&h=400&fit=crop",
      featured: false
    }
  ];

  const categories = ["All", "React", "TypeScript", "CSS", "Backend", "Performance", "DevOps"];
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            My <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing insights, tutorials, and thoughts on web development, 
            technology trends, and software engineering best practices.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-section-bg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Articles</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                    <Calendar className="w-4 h-4 ml-4 mr-1" />
                    {formatDate(post.publishDate)}
                    <Clock className="w-4 h-4 ml-4 mr-1" />
                    {post.readTime}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3 h-3 mr-1" />
                    {formatDate(post.publishDate)}
                    <Clock className="w-3 h-3 ml-3 mr-1" />
                    {post.readTime}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80">
                    Read More <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-section-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to my newsletter to get the latest articles and updates 
            directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border bg-background"
            />
            <Button className="bg-primary hover:bg-primary/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Belal Amr. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;