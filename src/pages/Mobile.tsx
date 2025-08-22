import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone } from "lucide-react";

const Mobile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-4">Mobile App</h1>
          <p className="text-xl text-muted-foreground">Download SPAS for mobile devices</p>
        </div>
        
        <Card className="gradient-card border-0 shadow-md">
          <CardHeader>
            <CardTitle>SPAS Mobile App</CardTitle>
            <CardDescription>Take your learning on the go</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Our mobile app is coming soon to iOS and Android...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Mobile;