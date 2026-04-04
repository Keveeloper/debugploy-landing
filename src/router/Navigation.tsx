import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Salesforce from '../components/Integrations/Salesforce';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="integrations/salesforce" element={<Salesforce />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
