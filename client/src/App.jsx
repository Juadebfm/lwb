import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/landing/Home";
import Course from "./pages/landing/Course";
import About from "./pages/landing/About";
import Contact from "./pages/landing/Contact";
import Instructor from "./pages/landing/Instructor";
import { AuthProvider } from "./context/AuthContext";
import ComingSoon from "./pages/landing/ComingSoon";
import Navbar from "./pages/landing/components/Navbar";
import Footer from "./pages/landing/components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Course />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/instructor" element={<Instructor />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
