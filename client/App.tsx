import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
// import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Openings from "./pages/Openings";
import Contact from "./pages/Contact";
import GetQuote from "./pages/GetQuote";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import IndustryExpertise from "./pages/services/IndustryExpertise";
import ExecutiveSearch from "./pages/services/ExecutiveSearch";
import StartupHiring from "./pages/services/StartupHiring";
import RPO from "./pages/services/RPO";
import TalentMapping from "./pages/services/TalentMapping";
import CompetitorAnalysis from "./pages/services/CompetitorAnalysis";
import DiversityHiring from "./pages/services/DiversityHiring";
import PlacementVision from "./pages/PlacementVision";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route
            path="/services/industry-expertise"
            element={<IndustryExpertise />}
          />
          <Route
            path="/services/executive-search"
            element={<ExecutiveSearch />}
          />
          <Route path="/services/startup-hiring" element={<StartupHiring />} />
          <Route path="/services/rpo" element={<RPO />} />
          <Route path="/services/talent-mapping" element={<TalentMapping />} />
          <Route
            path="/services/competitor-analysis"
            element={<CompetitorAnalysis />}
          />
          <Route
            path="/services/diversity-hiring"
            element={<DiversityHiring />}
          />
          <Route path="/placement-vision" element={<PlacementVision />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/openings" element={<Openings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-quote" element={<GetQuote />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
