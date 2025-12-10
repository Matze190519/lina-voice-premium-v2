import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Concept from "@/pages/Concept";
import Autokonzept from "@/pages/Autokonzept";
import LRPartner from "@/pages/LRPartner";
import About from "./pages/About";
import Process from "./pages/Process";
import Privacy from "./pages/Privacy";
import Impressum from "./pages/Impressum";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/technologie" component={Technology} />
        <Route path="/konzept" component={Concept} />
      <Route path="/autokonzept" component={Autokonzept} />
      <Route path="/lr-partner" component={LRPartner} />
        <Route path="/ueber-uns" component={About} />
          <Route path="/process" component={Process} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/impressum" component={Impressum} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
