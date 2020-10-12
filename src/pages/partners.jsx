import React from 'react';
import MainLayout from 'layouts/main';

import Hero from 'components/pages/partners/hero';
import Content from 'components/pages/partners/content';
import Contact from 'components/shared/contact';

const hero = {
  title: 'Partners',
  description: 'We have turned our customers into satisfied partners',
  text: 'Our understanding of successful business relationships based on partnership goes beyond a pure service provider/customer relationship. We therefore regard our customers as partners. Click on the respective link to learn more about our cooperation.',
  buttonUrl: '/',
  buttonText: 'Learn more',
};

const content = {
  title: 'Our partners',
  filters: [
    {
      name: 'Industry',
    },
    {
      name: 'Provider',
    },
    {
      name: 'Technology',
    },
  ],
  items: [
    {
      url: '/',
      name: 'Acrevis Bank',
      type: 'featured',
      storyUrl: '/',
      info: 'Read success story',
    },
    {
      url: '/',
      name: 'Ginetta',
      type: 'basic',
    },
    {
      url: '/',
      name: 'Tyk',
    },
    {
      url: '/',
      name: 'Spryker',
    },
    {
      url: '/',
      name: 'Amazee',
    },
    {
      url: '/',
      name: 'HRM Systems',
      type: 'featured',
      storyUrl: '/',
      info: 'Read success story',
    },
    {
      url: '/',
      name: 'Sherpany',
    },
    {
      url: '/',
      name: 'Starticket',
    },
    {
      url: '/',
      name: 'Cinerent',
    },
    {
      url: '/',
      name: 'Komed Health',
    },
    {
      url: '/',
      name: 'Six',
    },
    {
      url: '/',
      name: 'Younity / Wirz',
    },
    {
      url: '/',
      name: 'Esurance',
      type: 'featured',
      storyUrl: '/',
      info: 'Read success story',
    },
    {
      url: '/',
      name: 'Migros',
    },
    {
      url: '/',
      name: 'Skribble',
      type: 'featured',
      storyUrl: '/',
      info: 'Read success story',
    },
    {
      url: '/',
      name: 'Gbanga',
    },
    {
      url: '/',
      name: 'Neon',
      type: 'featured',
      storyUrl: '/',
      info: 'Read success story',
    },
    {
      url: '/',
      name: 'Sobrado',
      type: 'featured',
      storyUrl: '/',
      info: 'Read success story',
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
