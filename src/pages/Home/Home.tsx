import React from 'react';
import Hero from '../../components/Hero';
import Integrations from '../../components/Integrations';
import Clients from '../../components/Clients';
import Automations from '../../components/Automations';
import Cta from '../../components/Cta';

const Home = () => {
  return (
    <>
      <Hero />
      <Integrations />
      <Clients />
      <Automations />
      <Cta />
    </>
  );
};

export default Home;
