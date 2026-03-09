import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Loader from "./components/loader";

import "../styles/fonts.css";
import "../styles/index.css";

// A wrapper to detect location changes and show loader on navigation
function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // When location changes, show loader briefly
    setLoading(true);

    // Hide loader after short delay (simulate loading time)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return <Loader />;
  }

  return <>{children}</>;
}

export default function App() {
  return (
    <Router>
      <LoaderWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </LoaderWrapper>
    </Router>
  );
}

