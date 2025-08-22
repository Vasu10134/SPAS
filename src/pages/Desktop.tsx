import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor } from "lucide-react";

const Desktop = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Monitor className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-4">Desktop App</h1>
          <p className="text-xl text-muted-foreground">Download SPAS for your desktop</p>
        </div>
        
        <Card className="gradient-card border-0 shadow-md">
          <CardHeader>
            <CardTitle>SPAS Desktop Application</CardTitle>
            <CardDescription>Enhanced desktop experience</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Desktop application for Windows, Mac, and Linux coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Desktop;