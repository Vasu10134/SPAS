import { Link } from "react-router-dom";
import { 
  Mail, 
  Github, 
  Twitter, 
  Linkedin, 
  Facebook,
  GraduationCap,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="footer-background mt-auto relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 left-1/4 w-1 h-1 bg-primary/30 rounded-full animate-pulse"></div>
      <div className="absolute top-10 right-1/3 w-2 h-2 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 mb-12 border border-primary/20 card-premium">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary rounded-xl p-3 shadow-glow">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-footer-foreground flex items-center gap-2">
                  Get the latest news!
                  <Sparkles className="h-4 w-4 text-primary" />
                </h3>
                <p className="text-footer-muted text-sm">
                  Stay updated with new features and performance insights.
                </p>
              </div>
            </div>
            <div className="flex gap-3 w-full md:w-auto md:min-w-80">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-background/80 border-border backdrop-blur-sm focus:ring-2 focus:ring-primary/50 transition-all duration-300"
              />
              <Button className="btn-premium px-6 group">
                SIGN UP
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-footer-foreground mb-4 relative">
              Services
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/analytics" className="text-footer-muted hover:text-footer-foreground transition-all duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Performance Analytics</span>
                </Link>
              </li>
              <li>
                <Link to="/exams" className="text-footer-muted hover:text-footer-foreground transition-all duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Exam Management</span>
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-footer-muted hover:text-footer-foreground transition-all duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Category System</span>
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-footer-muted hover:text-footer-foreground transition-all duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Student Profiles</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-footer-foreground mb-4 relative">
              Company
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-footer-muted hover:text-footer-foreground transition-all duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">About</span>
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-footer-muted hover:text-footer-foreground transition-all duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Meet the Team</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-footer-muted hover:text-footer-foreground transition-all duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Helpful Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-footer-foreground mb-4 relative">
              Helpful Links
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/support" className="text-footer-muted hover:text-footer-foreground transition-all duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Support</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-footer-muted hover:text-footer-foreground transition-all duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">FAQs</span>
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="text-footer-muted hover:text-footer-foreground transition-all duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Documentation</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-footer-foreground mb-4 relative">
              Legal
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-footer-muted hover:text-footer-foreground transition-all duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-footer-muted hover:text-footer-foreground transition-all duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Terms of Service</span>
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-footer-muted hover:text-footer-foreground transition-all duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Cookie Policy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Downloads */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-footer-foreground mb-4 relative">
              Downloads
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/mobile" className="text-footer-muted hover:text-footer-foreground transition-all duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Mobile App</span>
                </Link>
              </li>
              <li>
                <Link to="/desktop" className="text-footer-muted hover:text-footer-foreground transition-all duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Desktop App</span>
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-footer-muted hover:text-footer-foreground transition-all duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Study Resources</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-footer-muted/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 group">
              <div className="bg-primary rounded-lg p-2 group-hover:shadow-glow transition-all duration-300">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-footer-foreground group-hover:text-primary transition-colors duration-300">
                SPAS
              </span>
            </div>
            <span className="text-footer-muted text-sm">
              © 2024 Student Performance Analysis System. All rights reserved.
            </span>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            <Link to="#" className="text-footer-muted hover:text-primary transition-all duration-300 hover:scale-110">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link to="#" className="text-footer-muted hover:text-primary transition-all duration-300 hover:scale-110">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link to="#" className="text-footer-muted hover:text-primary transition-all duration-300 hover:scale-110">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link to="#" className="text-footer-muted hover:text-primary transition-all duration-300 hover:scale-110">
              <Github className="h-5 w-5" />
            </Link>
            <Link to="#" className="text-footer-muted hover:text-primary transition-all duration-300 hover:scale-110">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;