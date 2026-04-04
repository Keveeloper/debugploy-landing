import React from 'react';
import HeroSection from './components/HeroSection';
import Expertise from './components/Expertise';
import SuccessStory from './components/SuccessStory';

const Salesforce = () => {
  return (
    <main className="w-full min-h-screen bg-white">
      <HeroSection />
      <Expertise />
      <SuccessStory />
    </main>
  );
};

export default Salesforce;
