import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Users, Database, Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">How we protect and handle your data</p>
          <Badge variant="secondary" className="mt-4">Last updated: January 2024</Badge>
        </div>
        
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                At SPAS (Student Performance Analysis System), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
              </p>
              <p className="text-muted-foreground">
                By using SPAS, you consent to the data practices described in this policy. If you do not agree with our policies and practices, please do not use our service.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Personal Information</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Name, email address, and contact information</li>
                  <li>Student ID and academic institution details</li>
                  <li>Profile information and preferences</li>
                  <li>Payment information (if applicable)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Academic Data</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Exam results and performance metrics</li>
                  <li>Study progress and learning analytics</li>
                  <li>Course enrollment and completion data</li>
                  <li>Assessment responses and feedback</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Technical Information</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>IP address and device information</li>
                  <li>Browser type and operating system</li>
                  <li>Usage patterns and platform interactions</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Platform Functionality</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>Provide personalized learning experiences</li>
                    <li>Generate performance analytics and reports</li>
                    <li>Manage exam scheduling and administration</li>
                    <li>Enable communication between users</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Improvement & Research</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>Analyze usage patterns to improve services</li>
                    <li>Conduct educational research and studies</li>
                    <li>Develop new features and capabilities</li>
                    <li>Ensure platform security and reliability</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Data Protection & Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Technical Safeguards</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>End-to-end encryption for data transmission</li>
                    <li>Secure data centers with 24/7 monitoring</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Multi-factor authentication for account access</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Administrative Controls</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>Strict access controls and user permissions</li>
                    <li>Regular staff training on data protection</li>
                    <li>Incident response and breach notification procedures</li>
                    <li>Compliance with educational data privacy laws</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Your Privacy Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                You have the following rights regarding your personal information:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Access & Control</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>Access your personal data and information</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Delete your account and associated data</li>
                    <li>Export your data in a portable format</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Communication</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>Opt-out of marketing communications</li>
                    <li>Control notification preferences</li>
                    <li>Request data processing restrictions</li>
                    <li>Lodge complaints with supervisory authorities</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>Questions about this Privacy Policy?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <p className="text-sm text-muted-foreground">
                  <strong>Email:</strong> privacy@spas.edu
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Address:</strong> SPAS Privacy Team, 123 Education Street, Learning City, LC 12345
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;