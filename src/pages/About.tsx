import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Target, 
  Users, 
  Award, 
  BarChart3, 
  BookOpen,
  Globe,
  Lightbulb,
  Heart,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Advanced analytics to track learning progress and identify improvement areas"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Exams",
      description: "Wide variety of subjects and difficulty levels for complete skill assessment"
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Connect with peers and learn together in a supportive environment"
    },
    {
      icon: Award,
      title: "Achievement System",
      description: "Earn badges and track milestones to stay motivated in your learning journey"
    }
  ];

  const stats = [
    { label: "Active Students", value: "50,000+", icon: Users },
    { label: "Exams Available", value: "1,200+", icon: BookOpen },
    { label: "Success Rate", value: "94%", icon: Target },
    { label: "Countries Served", value: "45+", icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-primary rounded-full p-4">
              <GraduationCap className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About SPAS
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Student Performance Analysis System - Empowering learners worldwide with intelligent 
            performance tracking, comprehensive assessments, and personalized learning insights.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="gradient-primary text-white" asChild>
              <Link to="/exams">
                Start Learning
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        {/* Mission Statement */}
        <Card className="gradient-card border-0 shadow-md mb-16">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <Target className="h-6 w-6 text-primary" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-center text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We believe that every student deserves access to quality education and personalized learning experiences. 
              Our mission is to democratize education by providing comprehensive performance analysis tools that help 
              students understand their strengths, identify areas for improvement, and achieve their academic goals 
              through data-driven insights and adaptive learning pathways.
            </p>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="gradient-card border-0 shadow-md text-center">
                <CardContent className="pt-6">
                  <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose SPAS?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with educational expertise to deliver 
              an unparalleled learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="gradient-card border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 rounded-lg p-2">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="gradient-card border-0 shadow-md text-center">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We continuously push the boundaries of educational technology to create 
                  innovative solutions that enhance learning outcomes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="gradient-card border-0 shadow-md text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Quality education should be accessible to everyone, regardless of 
                  background, location, or economic circumstances.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="gradient-card border-0 shadow-md text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Student-Centric</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every decision we make is guided by what's best for our students 
                  and their learning journey.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="gradient-primary text-white border-0 shadow-lg">
          <CardContent className="text-center py-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Learning?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students who have already improved their academic performance with SPAS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/">
                  Get Started Today
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                <Link to="/team">Meet Our Team</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;