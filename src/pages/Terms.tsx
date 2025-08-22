import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-xl text-muted-foreground">Terms and conditions for using SPAS</p>
        </div>
        
        <Card className="gradient-card border-0 shadow-md">
          <CardHeader>
            <CardTitle>Terms of Service</CardTitle>
            <CardDescription>Last updated: January 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">By using SPAS, you agree to these terms and conditions...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;