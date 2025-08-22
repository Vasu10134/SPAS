import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell,
  ResponsiveContainer
} from "recharts";
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Award, 
  BookOpen,
  Clock,
  Trophy,
  BarChart3
} from "lucide-react";

const Analytics = () => {
  const performanceData = [
    { month: 'Jan', score: 78, tests: 5 },
    { month: 'Feb', score: 82, tests: 7 },
    { month: 'Mar', score: 85, tests: 6 },
    { month: 'Apr', score: 88, tests: 8 },
    { month: 'May', score: 87, tests: 6 },
    { month: 'Jun', score: 91, tests: 9 }
  ];

  const subjectData = [
    { subject: 'Mathematics', score: 92, improvement: 8 },
    { subject: 'Physics', score: 88, improvement: 5 },
    { subject: 'Chemistry', score: 85, improvement: -2 },
    { subject: 'History', score: 94, improvement: 12 },
    { subject: 'English', score: 89, improvement: 3 },
    { subject: 'Computer Science', score: 96, improvement: 15 }
  ];

  const difficultyData = [
    { name: 'Easy', value: 35, color: '#10b981' },
    { name: 'Medium', value: 45, color: '#f59e0b' },
    { name: 'Hard', value: 20, color: '#ef4444' }
  ];

  const studyTimeData = [
    { day: 'Mon', hours: 3.5 },
    { day: 'Tue', hours: 4.2 },
    { day: 'Wed', hours: 2.8 },
    { day: 'Thu', hours: 5.1 },
    { day: 'Fri', hours: 3.9 },
    { day: 'Sat', hours: 6.5 },
    { day: 'Sun', hours: 4.7 }
  ];

  const insights = [
    {
      title: "Strong Performance Trend",
      description: "Your scores have improved by 16% over the last 6 months",
      icon: TrendingUp,
      color: "text-success",
      bg: "bg-success/10"
    },
    {
      title: "Chemistry Needs Attention",
      description: "Consider focusing more on chemistry topics",
      icon: Target,
      color: "text-chart-3",
      bg: "bg-chart-3/10"
    },
    {
      title: "Consistent Study Pattern",
      description: "You maintain good study habits throughout the week",
      icon: Clock,
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      title: "Achievement Unlocked",
      description: "You've reached the top 10% in Computer Science",
      icon: Award,
      color: "text-chart-4",
      bg: "bg-chart-4/10"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
            <BarChart3 className="h-8 w-8 text-primary" />
            Analytics Dashboard
          </h1>
          <p className="text-lg text-muted-foreground">
            Track your academic progress and identify areas for improvement
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="gradient-card border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Overall Score</p>
                  <p className="text-2xl font-bold text-foreground">87.5%</p>
                  <p className="text-xs text-success flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3" />
                    +5.2% from last month
                  </p>
                </div>
                <Trophy className="h-8 w-8 text-chart-1" />
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-card border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Tests Completed</p>
                  <p className="text-2xl font-bold text-foreground">42</p>
                  <p className="text-xs text-success flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3" />
                    +7 this month
                  </p>
                </div>
                <BookOpen className="h-8 w-8 text-chart-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-card border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Study Hours</p>
                  <p className="text-2xl font-bold text-foreground">156h</p>
                  <p className="text-xs text-success flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3" />
                    +8h this week
                  </p>
                </div>
                <Clock className="h-8 w-8 text-chart-3" />
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-card border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Class Rank</p>
                  <p className="text-2xl font-bold text-foreground">#3</p>
                  <p className="text-xs text-success flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3" />
                    +2 positions
                  </p>
                </div>
                <Award className="h-8 w-8 text-chart-4" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Performance Trend */}
          <Card className="gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle>Performance Trend</CardTitle>
              <CardDescription>Your average scores over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="hsl(var(--chart-1))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--chart-1))', strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Subject Performance */}
          <Card className="gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle>Subject Performance</CardTitle>
              <CardDescription>Your latest scores by subject</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={subjectData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="subject" angle={-45} textAnchor="end" height={60} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="score" fill="hsl(var(--chart-2))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Difficulty Distribution */}
          <Card className="gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle>Test Difficulty</CardTitle>
              <CardDescription>Distribution of completed tests by difficulty</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={difficultyData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {difficultyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Study Time */}
          <Card className="gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle>Weekly Study Time</CardTitle>
              <CardDescription>Hours spent studying each day this week</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={studyTimeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="hours" fill="hsl(var(--chart-3))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Insights */}
          <Card className="gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle>Key Insights</CardTitle>
              <CardDescription>AI-powered analysis of your performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {insights.map((insight, index) => {
                  const Icon = insight.icon;
                  return (
                    <div key={index} className={`p-3 rounded-lg ${insight.bg}`}>
                      <div className="flex items-start gap-3">
                        <Icon className={`h-5 w-5 ${insight.color} mt-0.5`} />
                        <div>
                          <h4 className="font-medium text-foreground text-sm">{insight.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{insight.description}</p>
                        </div>
                      </div>
                    </div>
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

export default Analytics;