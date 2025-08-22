import { Link } from "react-router-dom";
import { 
  Mail, 
  Github, 
  Twitter, 
  Linkedin, 
  Facebook,
  GraduationCap 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="footer-background mt-auto">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-primary/10 rounded-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary rounded-lg p-2">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-footer-foreground">Get the latest news!</h3>
                <p className="text-footer-muted text-sm">
                  Stay updated with new features and performance insights.
                </p>
              </div>
            </div>
            <div className="flex gap-3 w-full md:w-auto md:min-w-80">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-background border-border"
              />
              <Button className="bg-primary hover:bg-primary-hover text-primary-foreground px-6">
                SIGN UP
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-footer-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/analytics" className="text-footer-muted hover:text-footer-foreground transition-smooth">Performance Analytics</Link></li>
              <li><Link to="/exams" className="text-footer-muted hover:text-footer-foreground transition-smooth">Exam Management</Link></li>
              <li><Link to="/categories" className="text-footer-muted hover:text-footer-foreground transition-smooth">Category System</Link></li>
              <li><Link to="/profile" className="text-footer-muted hover:text-footer-foreground transition-smooth">Student Profiles</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-footer-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-footer-muted hover:text-footer-foreground transition-smooth">About</Link></li>
              <li><Link to="/team" className="text-footer-muted hover:text-footer-foreground transition-smooth">Meet the Team</Link></li>
              <li><Link to="/contact" className="text-footer-muted hover:text-footer-foreground transition-smooth">Contact</Link></li>
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <h4 className="text-lg font-semibold text-footer-foreground mb-4">Helpful Links</h4>
            <ul className="space-y-3">
              <li><Link to="/support" className="text-footer-muted hover:text-footer-foreground transition-smooth">Support</Link></li>
              <li><Link to="/faq" className="text-footer-muted hover:text-footer-foreground transition-smooth">FAQs</Link></li>
              <li><Link to="/documentation" className="text-footer-muted hover:text-footer-foreground transition-smooth">Documentation</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-footer-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-footer-muted hover:text-footer-foreground transition-smooth">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-footer-muted hover:text-footer-foreground transition-smooth">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-footer-muted hover:text-footer-foreground transition-smooth">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Downloads */}
          <div>
            <h4 className="text-lg font-semibold text-footer-foreground mb-4">Downloads</h4>
            <ul className="space-y-3">
              <li><Link to="/mobile" className="text-footer-muted hover:text-footer-foreground transition-smooth">Mobile App</Link></li>
              <li><Link to="/desktop" className="text-footer-muted hover:text-footer-foreground transition-smooth">Desktop App</Link></li>
              <li><Link to="/resources" className="text-footer-muted hover:text-footer-foreground transition-smooth">Study Resources</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-footer-muted/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-footer-foreground">SPAS</span>
            </div>
            <span className="text-footer-muted text-sm">
              © 2024 Student Performance Analysis System. All rights reserved.
            </span>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            <Link to="#" className="text-footer-muted hover:text-primary transition-smooth">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link to="#" className="text-footer-muted hover:text-primary transition-smooth">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link to="#" className="text-footer-muted hover:text-primary transition-smooth">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link to="#" className="text-footer-muted hover:text-primary transition-smooth">
              <Github className="h-5 w-5" />
            </Link>
            <Link to="#" className="text-footer-muted hover:text-primary transition-smooth">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;