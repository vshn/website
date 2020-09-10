import React from 'react';
import MainLayout from 'layouts/main';
import Hero from 'components/pages/home/hero';

const hero = {
  title: 'We run your <strong>application</strong>',
  description: 'VSHN automates the operation of applications in the cloud or on-premise, so that software developers can focus on their business.',
  buttonText: 'Show Me How',
  buttonUrl: '/',
};

const HomePage = () => (
  <MainLayout>
    <Hero {...hero} />
  </MainLayout>
);

export default HomePage;
