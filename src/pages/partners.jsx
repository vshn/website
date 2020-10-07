import React from 'react';
import MainLayout from 'layouts/main';

import Hero from 'components/pages/partners/hero';
import Content from 'components/pages/partners/content';
import Contact from 'components/shared/contact';

const hero = {
  category: 'Partners',
  title: 'We have turned our customers into <strong>satisfied partners</strong>',
  description: 'Our understanding of successful business relationships based on partnership goes beyond a pure service provider/customer relationship. We therefore regard our customers as partners. Click on the respective link to learn more about our cooperation.',
};

const content = {
  title: 'Our partners',
  items: [
    {
      url: '/',
      name: 'Acrevis Bank',
      type: 'high',
      info: 'Read success story',
    },
    {
      url: '/',
      name: 'Amazee',
      type: 'basic',
    },
    {
      url: '/',
      name: 'Cinerent',
      type: 'basic',
    },
    {
      url: '/',
      name: 'Esurance',
      type: 'medium',
      info: 'Read success story',
    },
    {
      url: '/',
      name: 'Gbanga',
      type: 'basic',
    },
    {
      url: '/',
      name: 'Ginetta',
      type: 'basic',
    },
    {
      url: '/',
      name: 'HRM Systems',
      type: 'medium',
      info: 'Read success story',
    },
    {
      url: '/',
      name: 'Komed Health',
      type: 'basic',
    },
    {
      url: '/',
      name: 'Migros',
      type: 'basic',
    },
    {
      url: '/',
      name: 'Neon',
      type: 'medium',
      info: 'Read success story',
    },
    {
      url: '/',
      name: 'Tyk',
      type: 'basic',
    },
    {
      url: '/',
      name: 'Sherpany',
      type: 'basic',
    },
    {
      url: '/',
      name: 'Six',
      type: 'basic',
    },
    {
      url: '/',
      name: 'Skribble',
      type: 'medium',
      info: 'Read success story',
    },
    {
      url: '/',
      name: 'Sobrado',
      type: 'medium',
    },
    {
      url: '/',
      name: 'Spryker',
      type: 'basic',
    },
    {
      url: '/',
      name: 'Starticket',
      type: 'basic',
    },
    {
      url: '/',
      name: 'Younity / Wirz',
      type: 'basic',
    },
  ],
};

export default () => (
  <MainLayout>
    <Hero {...hero} />
    <Content {...content} />
    <Contact />
  </MainLayout>
);
