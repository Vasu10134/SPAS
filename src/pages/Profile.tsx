import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { 
  User, 
  Mail, 
  Calendar, 
  Award, 
  TrendingUp, 
  BookOpen,
  Clock,
  Target,
  Settings,
  LogOut,
  Edit,
  Trophy,
  Star,
  Zap
} from "lucide-react";

const Profile = () => {
  const userStats = {
    totalExams: 42,
    averageScore: 87.5,
    studyHours: 156,
    achievements: 12,
    streak: 15,
    rank: 3
  };

  const achievements = [
    { name: "First Steps", description: "Completed your first exam", icon: Target, earned: true },
    { name: "Consistent Learner", description: "7 day study streak", icon: Zap, earned: true },
    { name: "High Achiever", description: "Score above 90% in 5 exams", icon: Star, earned: true },
    { name: "Mathematics Master", description: "Complete all math exams", icon: Trophy, earned: false },
    { name: "Speed Runner", description: "Complete an exam in under 30 minutes", icon: Clock, earned: true },
    { name: "Perfect Score", description: "Achieve 100% in any exam", icon: Award, earned: false }
  ];

  const recentActivity = [
    { action: "Completed Physics Test", score: 88, date: "2 hours ago" },
    { action: "Started Chemistry Quiz", score: null, date: "1 day ago" },
    { action: "Earned 'Consistent Learner' badge", score: null, date: "3 days ago" },
    { action: "Completed Mathematics Advanced", score: 94, date: "5 days ago" }
  ];

  const subjects = [
    { name: "Mathematics", progress: 85, exams: 8, avgScore: 92 },
    { name: "Physics", progress: 70, exams: 6, avgScore: 88 },
    { name: "Chemistry", progress: 60, exams: 5, avgScore: 85 },
    { name: "Computer Science", progress: 95, exams: 12, avgScore: 96 },
    { name: "History", progress: 40, exams: 3, avgScore: 89 },
    { name: "English", progress: 55, exams: 4, avgScore: 87 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
            <User className="h-8 w-8 text-primary" />
            Student Profile
          </h1>
          <p className="text-lg text-muted-foreground">
            Manage your account and track your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <Card className="lg:col-span-1 gradient-card border-0 shadow-md">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder-user.jpg" alt="Student Avatar" />
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                    JS
                  </AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-xl text-foreground">John Smith</CardTitle>
              <CardDescription className="flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" />
                john.smith@student.edu
              </CardDescription>
              <div className="flex justify-center gap-2 mt-4">
                <Badge className="bg-primary text-primary-foreground">
                  Rank #{userStats.rank}
                </Badge>
                <Badge variant="outline">
                  {userStats.streak} day streak
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Member since</span>
                  <span className="font-medium">January 2024</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Last active</span>
                  <span className="font-medium">2 hours ago</span>
                </div>
                <Separator />
                <div className="flex flex-col gap-2">
                  <Button className="gradient-primary text-white" asChild>
                    <Link to="/edit-profile">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/settings">
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </Link>
                  </Button>
                  <Button variant="outline" className="text-destructive hover:bg-destructive/10">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats and Activity */}
          <div className="lg:col-span-2 space-y-8">
            {/* Performance Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="gradient-card border-0 shadow-md">
                <CardContent className="p-4 text-center">
                  <BookOpen className="h-8 w-8 text-chart-1 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{userStats.totalExams}</div>
                  <div className="text-sm text-muted-foreground">Total Exams</div>
                </CardContent>
              </Card>
              <Card className="gradient-card border-0 shadow-md">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="h-8 w-8 text-chart-2 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{userStats.averageScore}%</div>
                  <div className="text-sm text-muted-foreground">Avg Score</div>
                </CardContent>
              </Card>
              <Card className="gradient-card border-0 shadow-md">
                <CardContent className="p-4 text-center">
                  <Clock className="h-8 w-8 text-chart-3 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{userStats.studyHours}h</div>
                  <div className="text-sm text-muted-foreground">Study Time</div>
                </CardContent>
              </Card>
              <Card className="gradient-card border-0 shadow-md">
                <CardContent className="p-4 text-center">
                  <Award className="h-8 w-8 text-chart-4 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{userStats.achievements}</div>
                  <div className="text-sm text-muted-foreground">Achievements</div>
                </CardContent>
              </Card>
            </div>

            {/* Subject Progress */}
            <Card className="gradient-card border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Subject Progress
                </CardTitle>
                <CardDescription>Your progress across different subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {subjects.map((subject, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">{subject.name}</span>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{subject.exams} exams</span>
                          <span>•</span>
                          <span>{subject.avgScore}% avg</span>
                        </div>
                      </div>
                      <Progress value={subject.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="gradient-card border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Achievements
                </CardTitle>
                <CardDescription>Your earned badges and milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                      <div 
                        key={index} 
                        className={`p-4 rounded-lg border ${
                          achievement.earned 
                            ? 'bg-success/10 border-success/20' 
                            : 'bg-muted/50 border-border opacity-50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`h-8 w-8 ${
                            achievement.earned ? 'text-success' : 'text-muted-foreground'
                          }`} />
                          <div>
                            <h4 className="font-medium text-foreground">{achievement.name}</h4>
                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="gradient-card border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Recent Activity
                </CardTitle>
                <CardDescription>Your latest actions and achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.date}</p>
                      </div>
                      {activity.score && (
                        <Badge className={
                          activity.score >= 90 ? 'bg-success text-success-foreground' :
                          activity.score >= 70 ? 'bg-chart-3 text-white' : 
                          'bg-destructive text-destructive-foreground'
                        }>
                          {activity.score}%
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;