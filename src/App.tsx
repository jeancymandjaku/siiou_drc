import  { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Chargement à la demande (Lazy Loading) des pages
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/ServiceAll"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NoPage = lazy(() => import("./pages/NoPage"));

// Un loader léger et épuré pour combler l'attente du réseau (Moins de 10ms à s'afficher)
const PageLoader = () => (
  <div style={{ 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    minHeight: "50vh",
    fontFamily: "sans-serif",
    color: "#666"
  }}>
    <div className="animate-pulse">Chargement en cours...</div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* 
            Le Suspense intercepte le chargement des sous-pages. 
            La structure globale (Layout) reste visible, évitant un écran blanc total.
          */}
          <Route
            index
            element={
              <Suspense fallback={<PageLoader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="services"
            element={
              <Suspense fallback={<PageLoader />}>
                <Services />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<PageLoader />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<PageLoader />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<PageLoader />}>
                <NoPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;