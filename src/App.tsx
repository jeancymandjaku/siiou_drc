import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Chargement à la demande (Lazy Loading) des pages
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/ServiceAll"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NoPage = lazy(() => import("./pages/NoPage"));


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
            element=
            {
              <Home />
            }
          />
          <Route
            path="services"
            element={

              <Services />
            }
          />
          <Route
            path="about"
            element={

              <About />

            }
          />
          <Route
            path="contact"
            element={

              <Contact />

            }
          />
          <Route
            path="*"
            element={

              <NoPage />

            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;