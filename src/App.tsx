import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./pages/ServiceAll";
import NoPage from "./pages/NoPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App