import React from 'react';
import MainLayout from 'layouts/main';

import Hero from '../components/pages/blog-post/hero';
import Content from '../components/pages/blog-post/content';
import Author from '../components/pages/blog-post/author';

const hero = {
  title: 'VSHN announces Red Hat OpenShift 4 services',
  categories: [
    'General',
    'Press releases',
  ],
  date: new Date('2020-08-24'),
};

const author = {
  name: 'Markus Speth',
  email: 'markus.spethvshn@vshn.ch',
  number: '+41 44 545 53 00',
  description: 'Markus ist CMO bei der VSHN AG und kümmert sich um Marketingthemen und Partner.',
};

export default () => (
  <MainLayout>
    <Hero {...hero} />
    <Content />
    <Author {...author} />
  </MainLayout>
);
