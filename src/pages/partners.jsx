import React from 'react';
import MainLayout from 'layouts/main';

import Hero from 'components/pages/partners/hero';
import Partners from 'components/pages/partners/partners-list';
import Contact from 'components/shared/contact';
import SuccessStories from 'components/pages/partners/success-stories';

const hero = {
  category: 'Partners',
  title: 'We have turned our customers into satisfied partners',
  description: 'Our understanding of successful business relationships based on partnership goes beyond a pure service provider/customer relationship. We therefore regard our customers as partners. Click on the respective link to learn more about our cooperation.',
  buttonUrl: '/',
  buttonText: 'Check partners',
};

const successStories = {
  title: 'Success stories',
};

const partners = {
  title: 'Partners',
  filters: [
    {
      label: 'Provider',
    },
    {
      label: 'Technology',
    },
  ],
  partners: [
    {
      url: '/',
      name: 'Acrevis Bank',
    },
    {
      url: '/',
      name: 'Ginetta',
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
      name: 'CreditGate24',
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
      name: 'Younity / Wirz',
    },
    {
      url: '/',
      name: 'Younity / Wirz',
    },
    {
      url: '/',
      name: 'Younity / Wirz',
    },
    {
      url: '/',
      name: 'Younity / Wirz',
    },
    {
      url: '/',
      name: 'Six',
    },
    {
      url: '/',
      name: 'Six',
    },
    {
      url: '/',
      name: 'Six',
    },
    {
      url: '/',
      name: 'Six',
    },
  ],
};

export default () => (
  <MainLayout>
    <Hero {...hero} />
    <SuccessStories {...successStories} />
    <Partners {...partners} />
    <Contact />
  </MainLayout>
);
