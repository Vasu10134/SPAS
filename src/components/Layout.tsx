import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { usePerformanceMonitor } from "@/hooks/usePerformance";

const Layout = () => {
  // Performance monitoring
  usePerformanceMonitor('Layout');

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-muted/20">
      {/* Smooth scroll container */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 relative">
          {/* Page transition overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 opacity-0 animate-pulse"></div>
          </div>
          
          {/* Main content with enhanced animations */}
          <div className="relative z-10">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;