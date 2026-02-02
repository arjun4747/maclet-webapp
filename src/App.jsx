import React from 'react';
<<<<<<< HEAD
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
    </div>
=======
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AccessoriesPage from './pages/AccessoriesPage';
import { ProductProvider } from './context/ProductContext';
import LaptopsPage from './pages/LaptopsPage';
import AboutPage from './pages/AboutPage';
import AdminPage from './pages/AdminPage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/laptops" element={<LaptopsPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ProductProvider>
      <Router>
        <div className="app">
          <Navbar />
          <AnimatedRoutes />
        </div>
      </Router>
    </ProductProvider>
>>>>>>> friend/main
  );
}

export default App;
