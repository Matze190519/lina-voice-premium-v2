import { Suspense, lazy } from 'react';
import { Route, Switch } from 'wouter';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import TrustBar from './components/TrustBar';
import LiveTicker from './components/LiveTicker';
import ExitIntent from './components/ExitIntent';

// Lazy Loading für Performance
const Home = lazy(() => import('./pages/Home'));
const Technologie = lazy(() => import('./pages/Technologie'));
const Preise = lazy(() => import('./pages/Preise'));

function App() {
  return (
    <div className="min-h-screen bg-deep-navy text-white relative overflow-x-hidden font-inter">
      {/* Background Effects */}
      <BackgroundEffects />

      {/* Navigation - Fixed Top */}
      <Navigation />

      {/* Main Content Wrapper - Add padding-top to account for fixed nav */}
      <div className="pt-20">
        
        {/* Trust Bar - Now part of the flow, below nav */}
        <TrustBar />

        {/* Main Content with Lazy Loading */}
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-neon-cyan"></div>
          </div>
        }>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/technologie" component={Technologie} />
            <Route path="/preise" component={Preise} />
            {/* Fallback route */}
            <Route path="/:rest*" component={Home} />
          </Switch>
        </Suspense>
      </div>

      {/* Footer */}
      <Footer />

      {/* Conversion Booster */}
      <LiveTicker />
      <ExitIntent />
    </div>
  );
}

export default App;
