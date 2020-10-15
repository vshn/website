import React from 'react';
import MainLayout from 'layouts/main';

import Hero from 'components/pages/partners/hero';
import Content from 'components/pages/partners/content';
import Contact from 'components/shared/contact';

const hero = {
  category: 'Partners',
  title: 'We have turned our customers into satisfied partners',
  description: 'Our understanding of successful business relationships based on partnership goes beyond a pure service provider/customer relationship. We therefore regard our customers as partners. Click on the respective link to learn more about our cooperation.',
  buttonUrl: '/',
  buttonText: 'Learn more',
};

const content = {
  title: 'Our partners',
  filters: [
    {
      label: 'Industry',
    },
    {
      label: 'Provider',
    },
    {
      label: 'Technology',
    },
  ],
  items: [
    {
      url: '/',
      name: 'Acrevis Bank',
      type: 'isFeatured',
      successStoryLabel: 'Read success story',
      successStoryUrl: '/',
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
      type: 'isFeatured',
      successStoryLabel: 'Read success story',
      successStoryUrl: '/',
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
      type: 'isFeatured',
      successStoryLabel: 'Read success story',
      successStoryUrl: '/',
    },
    {
      url: '/',
      name: 'Migros',
    },
    {
      url: '/',
      name: 'Skribble',
      type: 'isFeatured',
      successStoryLabel: 'Read success story',
      successStoryUrl: '/',
    },
    {
      url: '/',
      name: 'Gbanga',
    },
    {
      url: '/',
      name: 'Neon',
      type: 'isFeatured',
      successStoryLabel: 'Read success story',
      successStoryUrl: '/',
    },
    {
      url: '/',
      name: 'Sobrado',
      type: 'isFeatured',
      successStoryLabel: 'Read success story',
      successStoryUrl: '/',
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
