import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  FolderOpen, 
  BookOpen, 
  Calculator, 
  Atom, 
  Globe, 
  Code, 
  Palette,
  Music,
  Heart,
  Briefcase,
  ChevronRight,
  Users,
  Clock
} from "lucide-react";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    {
      id: "mathematics",
      name: "Mathematics",
      icon: Calculator,
      description: "Numbers, equations, and problem-solving",
      examCount: 24,
      color: "bg-chart-1",
      subcategories: [
        { name: "Algebra", exams: 8, difficulty: "Medium", participants: 1234 },
        { name: "Calculus", exams: 6, difficulty: "Hard", participants: 892 },
        { name: "Geometry", exams: 5, difficulty: "Easy", participants: 1456 },
        { name: "Statistics", exams: 5, difficulty: "Medium", participants: 987 }
      ]
    },
    {
      id: "science",
      name: "Science",
      icon: Atom,
      description: "Physics, chemistry, and natural sciences",
      examCount: 18,
      color: "bg-chart-2",
      subcategories: [
        { name: "Physics", exams: 7, difficulty: "Hard", participants: 1123 },
        { name: "Chemistry", exams: 6, difficulty: "Medium", participants: 945 },
        { name: "Biology", exams: 5, difficulty: "Easy", participants: 1567 }
      ]
    },
    {
      id: "language",
      name: "Language & Literature",
      icon: BookOpen,
      description: "English, literature, and communication",
      examCount: 15,
      color: "bg-chart-3",
      subcategories: [
        { name: "Grammar", exams: 5, difficulty: "Easy", participants: 1678 },
        { name: "Literature", exams: 6, difficulty: "Medium", participants: 1234 },
        { name: "Creative Writing", exams: 4, difficulty: "Medium", participants: 876 }
      ]
    },
    {
      id: "history",
      name: "History & Social Studies",
      icon: Globe,
      description: "World history and social sciences",
      examCount: 12,
      color: "bg-chart-4",
      subcategories: [
        { name: "World History", exams: 4, difficulty: "Medium", participants: 1345 },
        { name: "Geography", exams: 4, difficulty: "Easy", participants: 1098 },
        { name: "Civics", exams: 4, difficulty: "Medium", participants: 892 }
      ]
    },
    {
      id: "computer-science",
      name: "Computer Science",
      icon: Code,
      description: "Programming, algorithms, and technology",
      examCount: 20,
      color: "bg-chart-5",
      subcategories: [
        { name: "Programming Basics", exams: 6, difficulty: "Easy", participants: 2341 },
        { name: "Data Structures", exams: 7, difficulty: "Hard", participants: 1456 },
        { name: "Web Development", exams: 4, difficulty: "Medium", participants: 1789 },
        { name: "Algorithms", exams: 3, difficulty: "Hard", participants: 987 }
      ]
    },
    {
      id: "arts",
      name: "Arts & Creativity",
      icon: Palette,
      description: "Visual arts, music, and creative expression",
      examCount: 8,
      color: "bg-gradient-to-r from-pink-500 to-purple-500",
      subcategories: [
        { name: "Art History", exams: 3, difficulty: "Easy", participants: 567 },
        { name: "Digital Design", exams: 3, difficulty: "Medium", participants: 789 },
        { name: "Music Theory", exams: 2, difficulty: "Medium", participants: 445 }
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-success text-success-foreground';
      case 'Medium': return 'bg-chart-3 text-white';
      case 'Hard': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
            <FolderOpen className="h-8 w-8 text-primary" />
            Exam Categories
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore exams organized by subjects and topics
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.id} className="gradient-card border-0 shadow-md hover:shadow-lg transition-smooth group cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg ${category.color} text-white group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.examCount} exams
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {category.name}
                  </CardTitle>
                  <CardDescription>
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    Explore Category
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Detailed Category View */}
        <Card className="gradient-card border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderOpen className="h-5 w-5 text-primary" />
              Category Details
            </CardTitle>
            <CardDescription>
              Click on a category above to view its subcategories and available exams
            </CardDescription>
          </CardHeader>
          <CardContent>
            {selectedCategory ? (
              (() => {
                const category = categories.find(c => c.id === selectedCategory);
                if (!category) return null;
                const Icon = category.icon;
                
                return (
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-lg ${category.color} text-white`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{category.name}</h3>
                        <p className="text-muted-foreground">{category.description}</p>
                        <Badge variant="outline" className="mt-2">
                          {category.examCount} total exams
                        </Badge>
                      </div>
                    </div>

                    <Accordion type="single" collapsible className="space-y-2">
                      {category.subcategories.map((subcategory, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg">
                          <AccordionTrigger className="px-4 hover:no-underline">
                            <div className="flex items-center justify-between w-full mr-4">
                              <div className="flex items-center gap-3">
                                <BookOpen className="h-5 w-5 text-primary" />
                                <span className="font-medium text-foreground">{subcategory.name}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge className={getDifficultyColor(subcategory.difficulty)}>
                                  {subcategory.difficulty}
                                </Badge>
                                <Badge variant="outline">
                                  {subcategory.exams} exams
                                </Badge>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <BookOpen className="h-4 w-4" />
                                <span>{subcategory.exams} available exams</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Users className="h-4 w-4" />
                                <span>{subcategory.participants.toLocaleString()} participants</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock className="h-4 w-4" />
                                <span>Avg. 90 min duration</span>
                              </div>
                            </div>
                            <div className="mt-4">
                              <Button className="gradient-primary text-white">
                                Start {subcategory.name} Exams
                              </Button>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                );
              })()
            ) : (
              <div className="text-center py-12">
                <FolderOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Select a Category</h3>
                <p className="text-muted-foreground">
                  Choose a category from above to explore its subcategories and available exams
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Categories;