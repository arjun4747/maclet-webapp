import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AccessoriesPage from './pages/AccessoriesPage';
import { ProductProvider } from './context/ProductContext';
import LaptopsPage from './pages/LaptopsPage';
import LaptopDetailsPage from './pages/LaptopDetailsPage';
import AccessoryDetailsPage from './pages/AccessoryDetailsPage';
import AboutPage from './pages/AboutPage';
import AdminPage from './pages/AdminPage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/laptops" element={<LaptopsPage />} />
        <Route path="/laptops/:slug" element={<LaptopDetailsPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/accessories/:slug" element={<AccessoryDetailsPage />} />
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
  );
}

export default App;
