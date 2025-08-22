import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-4">Documentation</h1>
          <p className="text-xl text-muted-foreground">Complete guide to using SPAS platform</p>
        </div>
        
        <Card className="gradient-card border-0 shadow-md">
          <CardHeader>
            <CardTitle>Platform Documentation</CardTitle>
            <CardDescription>Comprehensive guides and API references</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Documentation content coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Documentation;