import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/landing/Home";
import Course from "./pages/landing/Course";
import About from "./pages/landing/About";
import Contact from "./pages/landing/Contact";
import Instructor from "./pages/landing/Instructor";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/instructor" element={<Instructor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
