import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">How we protect and handle your data</p>
        </div>
        
        <Card className="gradient-card border-0 shadow-md">
          <CardHeader>
            <CardTitle>Privacy Policy</CardTitle>
            <CardDescription>Last updated: January 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">We take your privacy seriously and are committed to protecting your personal information...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;