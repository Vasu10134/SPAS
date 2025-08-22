import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";

const Resources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Download className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-4">Study Resources</h1>
          <p className="text-xl text-muted-foreground">Download study materials and guides</p>
        </div>
        
        <Card className="gradient-card border-0 shadow-md">
          <CardHeader>
            <CardTitle>Study Resources</CardTitle>
            <CardDescription>Free downloads to enhance your learning</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Study guides, practice materials, and resources available for download...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resources;