import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Exams from "./pages/Exams";
import Analytics from "./pages/Analytics";
import Categories from "./pages/Categories";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

// Footer pages
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import FAQ from "./pages/FAQ";
import Documentation from "./pages/Documentation";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import Mobile from "./pages/Mobile";
import Desktop from "./pages/Desktop";
import Resources from "./pages/Resources";
import EditProfile from "./pages/EditProfile";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="spas-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="exams" element={<Exams />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="categories" element={<Categories />} />
              <Route path="profile" element={<Profile />} />
              <Route path="edit-profile" element={<EditProfile />} />
              <Route path="settings" element={<Settings />} />
              
              {/* Footer pages */}
              <Route path="about" element={<About />} />
              <Route path="team" element={<Team />} />
              <Route path="contact" element={<Contact />} />
              <Route path="support" element={<Support />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="documentation" element={<Documentation />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="terms" element={<Terms />} />
              <Route path="cookies" element={<Cookies />} />
              <Route path="mobile" element={<Mobile />} />
              <Route path="desktop" element={<Desktop />} />
              <Route path="resources" element={<Resources />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
