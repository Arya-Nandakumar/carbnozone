import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import HomePage from './components/homepage/homepage';
import ProductsPage from './components/productspage/productspage';
import ServicesPage from './components/servicespage/servicespage';
import InvestmentPage from './components/investmentspage/investmentpage';

import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/investment" element={<InvestmentPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
