import React from 'react';
import MainLayout from 'layouts/main';
import Contact from 'components/shared/contact';

import Hero from 'components/pages/partner/hero/';
import Content from 'components/pages/partner/content';

const hero = {
  category: 'Partners',
  title: 'Acrevis Bank',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard',
  details: [
    { value: '99.9%', text: 'uptime' },
    { value: '105', text: 'running servers' },
    { value: '3', text: 'years partnership' },
  ],
  url: 'acrevis.ch',
};

export default () => (
  <MainLayout>
    <Hero {...hero} />
    <Content />
    <Contact />
  </MainLayout>
);
