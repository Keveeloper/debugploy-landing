import React from 'react';
import HeroSection from './components/HeroSection';
import Expertise from './components/Expertise';
import Architecture from './components/Architecture';
import SuccessStory from './components/SuccessStory';

const Salesforce = () => {
  return (
    <main className="w-full min-h-screen bg-white">
      <HeroSection />
      <Expertise />
      <Architecture />
      <SuccessStory />
    </main>
  );
};

export default Salesforce;
