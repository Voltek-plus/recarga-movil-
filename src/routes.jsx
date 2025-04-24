import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopUpPage from './pages/TopUpPage';
import TransactionsPage from './pages/TransactionsPage';
import ServiceDescriptionPage from './pages/ServiceDescriptionPage';
import CustomerServicePage from './pages/CustomerServicePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TopUpPage />} />
      <Route path="/transactions" element={<TransactionsPage />} />
      <Route path="/service-description" element={<ServiceDescriptionPage />} />
      <Route path="/customer-service" element={<CustomerServicePage />} />
    </Routes>
  );
};

export default AppRoutes;