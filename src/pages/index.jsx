import React from 'react';
import MainLayout from 'layouts/main';

import Hero from 'components/pages/home/hero';
import Advantages from 'components/pages/home/advantages';

const hero = {
  title: 'We run your <strong>application</strong>',
  description: 'VSHN automates the operation of applications in the cloud or on-premise, so that software developers can focus on their business.',
  buttonText: 'Show Me How',
  buttonUrl: '/',
};

const advantages = {
  title: 'Advantages',
  description: '<strong>We are experts</strong> in Container, Kubernetes, Openshift',
  items: [
    {
      title: 'Get Back Time',
      description: 'Our automation accelerates development, deployment and operations processes',
      url: '/',
    },
    {
      title: 'Increase Security',
      description: 'Our processes are ISO 27001 certified and we operate according to the Swiss banking standards',
      url: '/',
    },
    {
      title: 'Reduce Cost',
      description: 'DevOps is the industrial revolution in the software industry',
      url: '/',
    },
  ],
};

const HomePage = () => (
  <MainLayout>
    <Hero {...hero} />
    <Advantages {...advantages} />
  </MainLayout>
);

export default HomePage;
