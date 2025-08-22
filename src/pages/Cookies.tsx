import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cookie } from "lucide-react";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Cookie className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-4">Cookie Policy</h1>
          <p className="text-xl text-muted-foreground">How we use cookies on our platform</p>
        </div>
        
        <Card className="gradient-card border-0 shadow-md">
          <CardHeader>
            <CardTitle>Cookie Policy</CardTitle>
            <CardDescription>Information about our cookie usage</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">We use cookies to improve your experience on SPAS...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cookies;