// import React from 'react';
import React, { lazy, Suspense } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css'; // Import your CSS file
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const EuropeTours = lazy(() => import("./pages/tours/EuropeTours"));
const AsiaTours = lazy(() => import("./pages/tours/AsiaTours"));
const AfricaTours = lazy(() => import("./pages/tours/AfricaTours"));
const TourDetails = lazy(() => import("./pages/tours/Tourdetails"));


function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="tours">
              <Route path="europe" element={<EuropeTours />}>
                <Route path=":tourId" element={<TourDetails />} />
              </Route>
              <Route path="asia" element={<AsiaTours />} />
              <Route path="africa" element={<AfricaTours />} />
            </Route>
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
