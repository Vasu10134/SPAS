import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star,
  Search,
  Filter,
  Play,
  Trophy
} from "lucide-react";

const Exams = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const exams = [
    {
      id: 1,
      title: "Advanced Mathematics",
      description: "Comprehensive test covering calculus, algebra, and geometry",
      difficulty: "hard",
      category: "Mathematics",
      duration: 120,
      questions: 50,
      participants: 1247,
      rating: 4.8,
      completed: false
    },
    {
      id: 2,
      title: "Physics Fundamentals",
      description: "Basic physics principles and problem-solving",
      difficulty: "medium",
      category: "Physics",
      duration: 90,
      questions: 35,
      participants: 892,
      rating: 4.6,
      completed: true,
      score: 88
    },
    {
      id: 3,
      title: "Chemistry Lab Basics",
      description: "Essential chemistry laboratory procedures and safety",
      difficulty: "easy",
      category: "Chemistry",
      duration: 60,
      questions: 25,
      participants: 654,
      rating: 4.9,
      completed: false
    },
    {
      id: 4,
      title: "World History Survey",
      description: "Major historical events and their significance",
      difficulty: "medium",
      category: "History",
      duration: 75,
      questions: 40,
      participants: 1156,
      rating: 4.5,
      completed: true,
      score: 92
    },
    {
      id: 5,
      title: "Programming Logic",
      description: "Algorithms, data structures, and programming concepts",
      difficulty: "hard",
      category: "Computer Science",
      duration: 150,
      questions: 60,
      participants: 2341,
      rating: 4.7,
      completed: false
    },
    {
      id: 6,
      title: "English Literature",
      description: "Classic literature analysis and interpretation",
      difficulty: "medium",
      category: "English",
      duration: 90,
      questions: 30,
      participants: 756,
      rating: 4.4,
      completed: false
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-success text-success-foreground';
      case 'medium': return 'bg-chart-3 text-white';
      case 'hard': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const filteredExams = exams.filter(exam => {
    const matchesSearch = exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exam.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = difficultyFilter === 'all' || exam.difficulty === difficultyFilter;
    const matchesCategory = categoryFilter === 'all' || exam.category === categoryFilter;
    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  const categories = [...new Set(exams.map(exam => exam.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Exams</h1>
          <p className="text-lg text-muted-foreground">
            Challenge yourself with our comprehensive exam collection
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8 gradient-card border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-primary" />
              Filter Exams
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search exams..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Difficulties</SelectItem>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Exam Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExams.map((exam) => (
            <Card key={exam.id} className="gradient-card border-0 shadow-md hover:shadow-lg transition-smooth">
              <CardHeader>
                <div className="flex justify-between items-start gap-2">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-foreground mb-2">
                      {exam.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getDifficultyColor(exam.difficulty)}>
                        {exam.difficulty.toUpperCase()}
                      </Badge>
                      <Badge variant="outline">
                        {exam.category}
                      </Badge>
                    </div>
                  </div>
                  {exam.completed && (
                    <div className="flex items-center gap-1 text-success">
                      <Trophy className="h-4 w-4" />
                      <span className="text-sm font-semibold">{exam.score}%</span>
                    </div>
                  )}
                </div>
                <CardDescription className="text-sm">
                  {exam.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{exam.duration} min</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span>{exam.questions} questions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{exam.participants.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-chart-3" />
                      <span>{exam.rating}</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full gradient-primary text-white"
                    disabled={exam.completed}
                  >
                    <Play className="h-4 w-4 mr-2" />
                    {exam.completed ? 'Completed' : 'Start Exam'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredExams.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No exams found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or filters
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Exams;