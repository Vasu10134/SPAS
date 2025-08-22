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
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";
import dashboardHero from "@/assets/dashboard-hero.jpg";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Exams",
      value: "24",
      change: "+12%",
      trend: "up",
      icon: BookOpen,
      color: "text-chart-1"
    },
    {
      title: "Average Score",
      value: "87.5%",
      change: "+5.2%",
      trend: "up",
      icon: TrendingUp,
      color: "text-chart-2"
    },
    {
      title: "Study Hours",
      value: "156h",
      change: "+8h",
      trend: "up",
      icon: Clock,
      color: "text-chart-3"
    },
    {
      title: "Achievements",
      value: "12",
      change: "+3",
      trend: "up",
      icon: Award,
      color: "text-chart-4"
    }
  ];

  const recentExams = [
    { name: "Mathematics Quiz", score: 92, date: "2024-01-15", status: "completed" },
    { name: "Physics Test", score: 88, date: "2024-01-12", status: "completed" },
    { name: "Chemistry Lab", score: 95, date: "2024-01-10", status: "completed" },
    { name: "History Essay", score: null, date: "2024-01-20", status: "upcoming" }
  ];

  const quickActions = [
    { name: "Take Practice Test", icon: BookOpen, link: "/exams", color: "bg-chart-1" },
    { name: "View Analytics", icon: BarChart3, link: "/analytics", color: "bg-chart-2" },
    { name: "Browse Categories", icon: Target, link: "/categories", color: "bg-chart-3" },
    { name: "Schedule Study", icon: Calendar, link: "/profile", color: "bg-chart-4" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Welcome to <span className="text-primary">SPAS</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Track your academic progress, analyze performance patterns, and achieve your learning goals with our comprehensive student performance analysis system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/exams">
                  <Button size="lg" className="gradient-primary text-white shadow-primary">
                    Start Learning
                  </Button>
                </Link>
                <Link to="/analytics">
                  <Button size="lg" variant="outline">
                    View Analytics
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={dashboardHero} 
                alt="Student Performance Dashboard" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="gradient-card border-0 shadow-md hover:shadow-lg transition-smooth">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <p className="text-xs text-success flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3" />
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Exams */}
          <Card className="lg:col-span-2 gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Recent Exams
              </CardTitle>
              <CardDescription>Your latest exam performances and upcoming tests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentExams.map((exam, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        exam.status === 'completed' ? 'bg-success' : 'bg-chart-3'
                      }`} />
                      <div>
                        <p className="font-medium text-foreground">{exam.name}</p>
                        <p className="text-sm text-muted-foreground">{exam.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      {exam.score ? (
                        <span className={`font-semibold ${
                          exam.score >= 90 ? 'text-success' : 
                          exam.score >= 70 ? 'text-chart-3' : 'text-destructive'
                        }`}>
                          {exam.score}%
                        </span>
                      ) : (
                        <span className="text-muted-foreground">Pending</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Quick Actions
              </CardTitle>
              <CardDescription>Access key features instantly</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <Link key={index} to={action.link}>
                      <Button
                        variant="outline"
                        className="h-20 flex flex-col items-center justify-center gap-2 hover:shadow-md transition-smooth"
                      >
                        <div className={`p-2 rounded-lg ${action.color} text-white`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-xs text-center">{action.name}</span>
                      </Button>
                    </Link>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;