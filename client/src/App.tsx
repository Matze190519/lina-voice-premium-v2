import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import BackgroundEffects from "@/components/BackgroundEffects";
import Home from "@/pages/Home";
import Autokonzept from "@/pages/Autokonzept";
import LRPartner from "@/pages/LRPartner";
import About from "@/pages/About";
import Preise from "@/pages/Preise";
import Privacy from "@/pages/Privacy";
import Impressum from "@/pages/Impressum";
import Contact from "@/pages/Contact";
function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/autokonzept" component={Autokonzept} />
      <Route path="/lr-partner" component={LRPartner} />
      <Route path="/ueber-uns" component={About} />
      <Route path="/preise" component={Preise} />
      <Route path="/kontakt" component={Contact} />
      <Route path="/impressum" component={Impressum} />
      <Route path="/privacy" component={Privacy} />
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
          <BackgroundEffects />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
