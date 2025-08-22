import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Headphones,
  Users
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      contact: "support@spas.edu",
      action: "mailto:support@spas.edu"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our support team",
      contact: "+1 (555) 123-SPAS",
      action: "tel:+15551237727"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help through our live chat",
      contact: "Available 24/7",
      action: "#"
    },
    {
      icon: Headphones,
      title: "Support Center",
      description: "Browse our comprehensive help documentation",
      contact: "help.spas.edu",
      action: "/support"
    }
  ];

  const officeLocations = [
    {
      city: "San Francisco",
      address: "123 Education Street, Suite 400",
      zipCode: "San Francisco, CA 94105",
      phone: "+1 (555) 123-7727",
      hours: "Mon-Fri: 9AM-6PM PST"
    },
    {
      city: "New York",
      address: "456 Learning Avenue, Floor 12",
      zipCode: "New York, NY 10001",
      phone: "+1 (555) 456-7727",
      hours: "Mon-Fri: 9AM-6PM EST"
    },
    {
      city: "London",
      address: "789 Knowledge Lane",
      zipCode: "London, EC1A 1BB, UK",
      phone: "+44 20 7946 0958",
      hours: "Mon-Fri: 9AM-5PM GMT"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      category: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-primary rounded-full p-4">
              <Mail className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about SPAS? Need help with your account? We're here to help! 
            Reach out to us through any of the channels below.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card key={index} className="gradient-card border-0 shadow-md hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-foreground mb-3">{method.contact}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Contact Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5 text-primary" />
                Send us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => handleSelectChange('category', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing & Accounts</SelectItem>
                        <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="careers">Careers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief subject of your message"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please provide details about your inquiry..."
                    required
                  />
                </div>

                <Button type="submit" disabled={isLoading} className="w-full gradient-primary text-white">
                  <Send className="h-4 w-4 mr-2" />
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Office Locations & Hours */}
          <div className="space-y-8">
            <Card className="gradient-card border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Our Offices
                </CardTitle>
                <CardDescription>
                  Visit us at any of our global locations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {officeLocations.map((office, index) => (
                    <div key={index} className="border-b border-border last:border-0 pb-4 last:pb-0">
                      <h4 className="font-semibold text-foreground mb-2">{office.city}</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                          <span>
                            {office.address}<br />
                            {office.zipCode}
                          </span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-primary" />
                          {office.phone}
                        </p>
                        <p className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          {office.hours}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQ Quick Links */}
            <Card className="gradient-card border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Quick Help
                </CardTitle>
                <CardDescription>
                  Find answers to common questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="ghost" className="w-full justify-start h-auto p-3 text-left">
                    <div>
                      <p className="font-medium">How do I reset my password?</p>
                      <p className="text-sm text-muted-foreground">Learn about account recovery</p>
                    </div>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start h-auto p-3 text-left">
                    <div>
                      <p className="font-medium">How are exams scored?</p>
                      <p className="text-sm text-muted-foreground">Understanding our scoring system</p>
                    </div>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start h-auto p-3 text-left">
                    <div>
                      <p className="font-medium">Can I retake an exam?</p>
                      <p className="text-sm text-muted-foreground">Exam retake policies</p>
                    </div>
                  </Button>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <Button variant="outline" className="w-full">
                    <Users className="h-4 w-4 mr-2" />
                    Visit Full FAQ
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;