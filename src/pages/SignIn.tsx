import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/contexts/AuthContext';
import { GraduationCap, Eye, EyeOff, Mail, Lock, ArrowRight, Sparkles, Shield } from 'lucide-react';
import { toast } from 'sonner';

const SignIn = () => {
  const navigate = useNavigate();
  const { LoginButton } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    if (!formData.email.trim()) {
      toast.error('Email is required');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }
    if (!formData.password.trim()) {
      toast.error('Password is required');
      return false;
    }
    return true;
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Welcome back!');
      navigate('/');
    } catch (error) {
      toast.error('Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="bg-primary rounded-2xl p-4 shadow-glow">
                <GraduationCap className="h-10 w-10 text-primary-foreground" />
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-foreground">Welcome Back</h1>
              <p className="text-muted-foreground text-lg">Sign in to continue your learning journey</p>
            </div>
          </div>

          <Card className="card-premium border-0 shadow-2xl">
            <CardHeader className="space-y-1 pb-6">
              <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Sign In
              </CardTitle>
              <CardDescription className="text-center">
                Choose your preferred sign-in method
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Google Sign In */}
              <div className="space-y-4">
                <LoginButton className="w-full justify-center py-3 text-base hover:scale-105 transition-transform duration-300" />
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>
              </div>

              {/* Email Sign In Form */}
              <form onSubmit={handleEmailSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                  <div className="relative group">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors duration-300" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="pl-10 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                  <div className="relative group">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors duration-300" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="pl-10 pr-10 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="rememberMe"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) => handleInputChange('rememberMe', checked as boolean)}
                    />
                    <Label htmlFor="rememberMe" className="text-sm">
                      Remember me
                    </Label>
                  </div>
                  <Link to="/forgot-password" className="text-sm text-primary hover:underline transition-all duration-300">
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full btn-premium group"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Signing In...
                    </div>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </Button>
              </form>

              {/* Sign Up Link */}
              <div className="text-center text-sm">
                Don't have an account?{' '}
                <Link to="/signup" className="text-primary hover:underline font-medium transition-all duration-300">
                  Sign up here
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="space-y-2 group">
              <div className="bg-primary/10 rounded-xl p-3 w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Track Progress</h3>
              <p className="text-sm text-muted-foreground">Monitor your academic performance</p>
            </div>
            <div className="space-y-2 group">
              <div className="bg-primary/10 rounded-xl p-3 w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Smart Insights</h3>
              <p className="text-sm text-muted-foreground">Get personalized recommendations</p>
            </div>
            <div className="space-y-2 group">
              <div className="bg-primary/10 rounded-xl p-3 w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Secure Access</h3>
              <p className="text-sm text-muted-foreground">Your data is always protected</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
