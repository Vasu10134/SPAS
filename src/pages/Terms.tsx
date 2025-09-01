import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-xl text-muted-foreground">Terms and conditions for using SPAS</p>
          <Badge variant="secondary" className="mt-4">Last updated: January 2024</Badge>
        </div>
        
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5" />
                Agreement to Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                By accessing and using SPAS (Student Performance Analysis System), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-muted-foreground">
                These Terms of Service ("Terms") govern your use of our website and services. Please read these Terms carefully before using our platform.
              </p>
            </CardContent>
          </Card>

          {/* Definitions */}
          <Card className="gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle>Definitions</CardTitle>
              <CardDescription>Key terms used in this agreement</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground">"Service"</h4>
                    <p className="text-sm text-muted-foreground">Refers to the SPAS platform, website, and all related services.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">"User"</h4>
                    <p className="text-sm text-muted-foreground">Any individual or entity using our Service.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">"Content"</h4>
                    <p className="text-sm text-muted-foreground">All information, data, text, software, music, sound, photographs, graphics, video, messages, and other materials.</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground">"Account"</h4>
                    <p className="text-sm text-muted-foreground">A registered user profile with access to our Service.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">"Subscription"</h4>
                    <p className="text-sm text-muted-foreground">Any paid plan that provides access to premium features.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">"Intellectual Property"</h4>
                    <p className="text-sm text-muted-foreground">All patents, copyrights, trademarks, trade secrets, and other proprietary rights.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Accounts */}
          <Card className="gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                User Accounts and Registration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Account Responsibilities
                  </h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Notify us immediately of any unauthorized use</li>
                    <li>Accept responsibility for all activities under your account</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    Prohibited Activities
                  </h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>Creating multiple accounts for the same person</li>
                    <li>Sharing account credentials with others</li>
                    <li>Using automated systems to access the service</li>
                    <li>Attempting to gain unauthorized access</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Acceptable Use */}
          <Card className="gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Acceptable Use Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                You agree not to use the Service to:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Content Restrictions</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>Upload or transmit harmful, offensive, or inappropriate content</li>
                    <li>Violate intellectual property rights of others</li>
                    <li>Distribute spam, malware, or phishing attempts</li>
                    <li>Harass, abuse, or harm other users</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">System Security</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>Attempt to breach or compromise system security</li>
                    <li>Interfere with the proper functioning of the service</li>
                    <li>Use the service for illegal activities</li>
                    <li>Reverse engineer or attempt to extract source code</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle>Intellectual Property Rights</CardTitle>
              <CardDescription>Ownership and usage rights</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Our Rights</h4>
                  <p className="text-muted-foreground text-sm">
                    SPAS and its original content, features, and functionality are owned by SPAS Inc. and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Your Rights</h4>
                  <p className="text-muted-foreground text-sm">
                    You retain ownership of any content you submit to our Service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">License to Use</h4>
                  <p className="text-muted-foreground text-sm">
                    We grant you a limited, non-exclusive, non-transferable, and revocable license to use our Service for educational purposes, subject to these Terms.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy and Data */}
          <Card className="gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle>Privacy and Data Protection</CardTitle>
              <CardDescription>How we handle your information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Data Usage</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 text-sm">
                  <li>We collect data to provide and improve our services</li>
                  <li>Your academic data is used for performance analysis and reporting</li>
                  <li>We implement appropriate security measures to protect your data</li>
                  <li>You have rights to access, correct, and delete your personal data</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          <Card className="gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle>Payment and Subscription Terms</CardTitle>
              <CardDescription>Billing and payment information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Billing</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>Subscriptions are billed in advance on a recurring basis</li>
                    <li>All fees are non-refundable except as required by law</li>
                    <li>Prices may change with 30 days notice</li>
                    <li>Failed payments may result in service suspension</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Cancellation</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>You may cancel your subscription at any time</li>
                    <li>Cancellation takes effect at the end of the billing period</li>
                    <li>No refunds for partial billing periods</li>
                    <li>Data may be retained according to our data retention policy</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimers and Limitations */}
          <Card className="gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle>Disclaimers and Limitations of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Service Availability</h4>
                  <p className="text-muted-foreground text-sm">
                    We strive to maintain high availability but do not guarantee uninterrupted access. The Service is provided "as is" without warranties of any kind.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Limitation of Liability</h4>
                  <p className="text-muted-foreground text-sm">
                    In no event shall SPAS be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Maximum Liability</h4>
                  <p className="text-muted-foreground text-sm">
                    Our total liability to you for any claims arising from the use of our Service shall not exceed the amount you paid us in the 12 months preceding the claim.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle>Termination</CardTitle>
              <CardDescription>How accounts can be terminated</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">By You</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>You may terminate your account at any time</li>
                    <li>Contact support to request account deletion</li>
                    <li>Data will be deleted according to our retention policy</li>
                    <li>Some data may be retained for legal compliance</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">By Us</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>We may terminate accounts for Terms violations</li>
                    <li>Immediate termination for serious violations</li>
                    <li>30-day notice for other violations</li>
                    <li>Right to refuse service to anyone</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Questions about these Terms?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <p className="text-sm text-muted-foreground">
                  <strong>Email:</strong> legal@spas.edu
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Address:</strong> SPAS Legal Team, 123 Education Street, Learning City, LC 12345
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

export default Terms;