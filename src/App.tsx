import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import WorkPage from './pages/WorkPage';
import PrismXCaseStudy from './pages/PrismXCaseStudy';
import UnityOneOverviewPage from './pages/UnityOneOverviewPage';
import UnityOneComplexITCaseStudy from './pages/UnityOneComplexITCaseStudy';
import UnityOneAIAssistantCaseStudy from './pages/UnityOneAIAssistantCaseStudy';
import UnityOneReportingCaseStudy from './pages/UnityOneReportingCaseStudy';
import FispokeCaseStudy from './pages/FispokeCaseStudy';
import HireMePage from './pages/HireMePage';
import AboutPage from './pages/AboutPage';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { BrandSplash } from './components/ui/BrandSplash';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { RouteProgressIndicator } from './components/ui/RouteProgressIndicator';

function NotFound() {
  return (
    <div className="container mx-auto py-32 px-5 text-center flex-1 flex flex-col items-center justify-center">
      <h1 className="font-display text-6xl font-medium mb-4 text-ink">404</h1>
      <p className="mb-8 text-muted">Looks like this page took a different path.</p>
      <Link to="/" className="text-sm font-medium text-ink hover:text-muted transition-colors">Back to Home</Link>
    </div>
  );
}

function AnimatedRoutes({ splashFinished }: { splashFinished: boolean }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="w-full flex-1 flex flex-col"
      >
        <Routes location={location}>
          <Route path="/" element={<Home splashFinished={splashFinished} />} />
          
          {/* Work & Case Study Routes */}
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/prismx" element={<PrismXCaseStudy />} />
          <Route path="/work/prism" element={<Navigate to="/work/prismx" replace />} />
          
          {/* UnityOne Project Area */}
          <Route path="/work/unityone" element={<UnityOneOverviewPage />} />
          <Route path="/work/unityone/complex-it-operations" element={<UnityOneComplexITCaseStudy />} />
          <Route path="/work/unityone/ai-assistant" element={<UnityOneAIAssistantCaseStudy />} />
          <Route path="/work/unityone/reporting-data" element={<UnityOneReportingCaseStudy />} />
          <Route path="/work/unitedlayer" element={<Navigate to="/work/unityone" replace />} />
          
          <Route path="/work/fispoke" element={<FispokeCaseStudy />} />

          {/* Global Nav Routes */}
          <Route path="/hire-me" element={<HireMePage />} />
          <Route path="/product-thinking" element={<div className="container mx-auto py-32 px-5"><h1 className="font-display text-4xl text-ink">Product Thinking</h1></div>} />
          <Route path="/ux-tools" element={<div className="container mx-auto py-32 px-5"><h1 className="font-display text-4xl text-ink">UX Tools Lab</h1></div>} />
          <Route path="/learning" element={<div className="container mx-auto py-32 px-5"><h1 className="font-display text-4xl text-ink">Learning</h1></div>} />
          <Route path="/content" element={<div className="container mx-auto py-32 px-5"><h1 className="font-display text-4xl text-ink">Content</h1></div>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const [splashFinished, setSplashFinished] = useState(false);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <RouteProgressIndicator />
      <BrandSplash onComplete={() => setSplashFinished(true)} />
      <div className="min-h-screen flex flex-col bg-background selection:bg-ink selection:text-dark-text">
        <Navbar />
        <main className="flex-1 pt-[72px] lg:pt-[88px] flex flex-col">
          <AnimatedRoutes splashFinished={splashFinished} />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
