import React from 'react';
import MainLayout from 'layouts/main';

import Hero from '../components/pages/blog-post/hero';

const hero = {
  title: 'VSHN announces Red Hat OpenShift 4 services',
  categories: [
    'General',
    'Press releases',
  ],
  date: new Date('2020-08-24'),
};

export default () => (
  <MainLayout>
    <Hero {...hero} />
  </MainLayout>
);
