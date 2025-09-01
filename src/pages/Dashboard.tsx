import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  TrendingUp, 
  Users, 
  Award, 
  Clock,
  Target,
  BarChart3,
  Calendar,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import { usePerformanceMonitor, useLazyImage } from "@/hooks/usePerformance";
import dashboardHero from "@/assets/dashboard-hero.jpg";

const Dashboard = () => {
  // Performance monitoring
  usePerformanceMonitor('Dashboard');

  // Lazy load hero image
  const { imageSrc, isLoaded } = useLazyImage(dashboardHero);

  const stats = [
    {
      title: "Total Exams",
      value: "24",
      change: "+12%",
      trend: "up",
      icon: BookOpen,
      color: "text-chart-1",
      bgColor: "bg-chart-1/10"
    },
    {
      title: "Average Score",
      value: "87.5%",
      change: "+5.2%",
      trend: "up",
      icon: TrendingUp,
      color: "text-chart-2",
      bgColor: "bg-chart-2/10"
    },
    {
      title: "Study Hours",
      value: "156h",
      change: "+8h",
      trend: "up",
      icon: Clock,
      color: "text-chart-3",
      bgColor: "bg-chart-3/10"
    },
    {
      title: "Achievements",
      value: "12",
      change: "+3",
      trend: "up",
      icon: Award,
      color: "text-chart-4",
      bgColor: "bg-chart-4/10"
    }
  ];

  const recentExams = [
    { name: "Mathematics Quiz", score: 92, date: "2024-01-15", status: "completed" },
    { name: "Physics Test", score: 88, date: "2024-01-12", status: "completed" },
    { name: "Chemistry Lab", score: 95, date: "2024-01-10", status: "completed" },
    { name: "History Essay", score: null, date: "2024-01-20", status: "upcoming" }
  ];

  const quickActions = [
    { name: "Take Practice Test", icon: BookOpen, link: "/exams", color: "bg-chart-1", description: "Start a new practice session" },
    { name: "View Analytics", icon: BarChart3, link: "/analytics", color: "bg-chart-2", description: "Analyze your performance trends" },
    { name: "Browse Categories", icon: Target, link: "/categories", color: "bg-chart-3", description: "Explore different subjects" },
    { name: "Schedule Study", icon: Calendar, link: "/profile", color: "bg-chart-4", description: "Plan your study sessions" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-primary">Student Performance Analysis System</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Welcome to <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">SPAS</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Track your academic progress, analyze performance patterns, and achieve your learning goals with our comprehensive student performance analysis system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/exams">
                  <Button size="lg" className="gradient-primary text-white shadow-primary hover:shadow-lg transition-all duration-300 btn-enhanced">
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/analytics">
                  <Button size="lg" variant="outline" className="hover:bg-primary/10 transition-all duration-300">
                    View Analytics
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <img 
                  src={imageSrc} 
                  alt="Student Performance Dashboard" 
                  className="w-full h-auto rounded-2xl shadow-2xl shadow-dark"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent rounded-2xl"></div>
              </div>
              {!isLoaded && (
                <div className="w-full h-64 bg-muted rounded-2xl animate-pulse"></div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="card-enhanced hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                      <div className="flex items-center gap-1 mt-2">
                        <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-chart-2' : 'text-chart-4'}`}>
                          {stat.change}
                        </span>
                        <TrendingUp className={`h-4 w-4 ${stat.trend === 'up' ? 'text-chart-2' : 'text-chart-4'}`} />
                      </div>
                    </div>
                    <div className={`p-3 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Quick Actions & Recent Exams */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <Card className="card-enhanced">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Quick Actions
              </CardTitle>
              <CardDescription>Get started with your learning journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <Link key={index} to={action.link}>
                      <div className="group p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${action.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {action.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">{action.description}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Recent Exams */}
          <Card className="card-enhanced">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Recent Exams
              </CardTitle>
              <CardDescription>Your latest academic activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentExams.map((exam, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/30 transition-all duration-300">
                    <div>
                      <h3 className="font-medium text-foreground">{exam.name}</h3>
                      <p className="text-sm text-muted-foreground">{exam.date}</p>
                    </div>
                    <div className="text-right">
                      {exam.score !== null ? (
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-foreground">{exam.score}%</span>
                          <div className={`w-2 h-2 rounded-full ${exam.score >= 90 ? 'bg-chart-2' : exam.score >= 80 ? 'bg-chart-3' : 'bg-chart-4'}`}></div>
                        </div>
                      ) : (
                        <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">Upcoming</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;