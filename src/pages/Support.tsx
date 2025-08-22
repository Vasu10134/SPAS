import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Headphones, 
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone,
  Mail,
  Clock,
  CheckCircle,
  AlertTriangle,
  Info,
  Video,
  FileText,
  Users,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const Support = () => {
  const supportCategories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Learn the basics of using SPAS",
      articles: 12,
      color: "bg-chart-1"
    },
    {
      icon: Users,
      title: "Account Management",
      description: "Profile, settings, and account issues",
      articles: 8,
      color: "bg-chart-2"
    },
    {
      icon: FileText,
      title: "Exams & Assessments",
      description: "How exams work and troubleshooting",
      articles: 15,
      color: "bg-chart-3"
    },
    {
      icon: MessageCircle,
      title: "Technical Issues",
      description: "Resolve technical problems",
      articles: 10,
      color: "bg-chart-4"
    }
  ];

  const popularArticles = [
    {
      title: "How to Create Your Student Profile",
      category: "Getting Started",
      readTime: "3 min",
      status: "popular"
    },
    {
      title: "Understanding Your Performance Analytics",
      category: "Analytics",
      readTime: "5 min",
      status: "popular"
    },
    {
      title: "Troubleshooting Exam Loading Issues",
      category: "Technical",
      readTime: "2 min",
      status: "updated"
    },
    {
      title: "How to Reset Your Password",
      category: "Account",
      readTime: "1 min",
      status: "popular"
    },
    {
      title: "Exam Scoring and Grading System",
      category: "Exams",
      readTime: "4 min",
      status: "new"
    }
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "Available 24/7",
      action: "Start Chat",
      color: "bg-success text-success-foreground"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      availability: "Response within 4-6 hours",
      action: "Send Email",
      color: "bg-primary text-primary-foreground"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      availability: "Mon-Fri, 9AM-6PM EST",
      action: "Call Now",
      color: "bg-chart-3 text-white"
    },
    {
      icon: Video,
      title: "Screen Share",
      description: "Get personalized assistance",
      availability: "By appointment",
      action: "Schedule",
      color: "bg-chart-5 text-white"
    }
  ];

  const systemStatus = [
    { service: "Main Platform", status: "operational", uptime: "99.9%" },
    { service: "Exam System", status: "operational", uptime: "99.8%" },
    { service: "Analytics Dashboard", status: "operational", uptime: "99.9%" },
    { service: "User Authentication", status: "operational", uptime: "100%" },
    { service: "Mobile App API", status: "maintenance", uptime: "99.5%" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return <CheckCircle className="h-4 w-4 text-success" />;
      case 'maintenance': return <AlertTriangle className="h-4 w-4 text-chart-3" />;
      case 'down': return <AlertTriangle className="h-4 w-4 text-destructive" />;
      default: return <Info className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'popular': return <Badge className="bg-success text-success-foreground">Popular</Badge>;
      case 'new': return <Badge className="bg-primary text-primary-foreground">New</Badge>;
      case 'updated': return <Badge className="bg-chart-3 text-white">Updated</Badge>;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-primary rounded-full p-4">
              <Headphones className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Support Center
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Find answers to your questions, browse our help documentation, or get in touch with our support team.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search for help articles, guides, or FAQs..." 
              className="pl-12 h-12 text-base"
            />
          </div>
        </div>

        {/* Support Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="gradient-card border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <div className={`${category.color} rounded-lg p-3 w-fit mx-auto mb-4 text-white group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge variant="outline">{category.articles} articles</Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Popular Articles */}
          <div className="lg:col-span-2">
            <Card className="gradient-card border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Popular Help Articles
                </CardTitle>
                <CardDescription>
                  Most viewed articles from our help documentation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {popularArticles.map((article, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors cursor-pointer">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="font-medium text-foreground">{article.title}</h4>
                          {getStatusBadge(article.status)}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{article.category}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {article.readTime}
                          </span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Read
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    Browse All Articles
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Support & System Status */}
          <div className="space-y-8">
            {/* Contact Options */}
            <Card className="gradient-card border-0 shadow-md">
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>
                  Need personalized help? Our team is here for you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactOptions.map((option, index) => {
                    const Icon = option.icon;
                    return (
                      <div key={index} className="p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="h-5 w-5 text-primary" />
                          <h4 className="font-medium text-foreground">{option.title}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{option.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{option.availability}</span>
                          <Button size="sm" className={option.color}>
                            {option.action}
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card className="gradient-card border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  System Status
                </CardTitle>
                <CardDescription>
                  Real-time status of all SPAS services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {systemStatus.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(service.status)}
                        <span className="text-sm font-medium text-foreground">{service.service}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-foreground">{service.uptime}</div>
                        <div className="text-xs text-muted-foreground capitalize">{service.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <Button variant="outline" size="sm" className="w-full">
                    View Status Page
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16">
          <Card className="gradient-primary text-white border-0 shadow-lg">
            <CardContent className="text-center py-12">
              <Headphones className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Our dedicated support team is available around the clock to help you succeed with SPAS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/contact">
                    Contact Support Team
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Schedule a Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Support;