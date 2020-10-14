import React from 'react';
import MainLayout from 'layouts/main';
import Contact from 'components/shared/contact';
import Hero from 'components/pages/success-story/hero';

const hero = {
  category: 'Success stories',
  title: 'Acrevis Bank <strong>&</strong> VSHN',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard',
  facts: {
    title: 'Interesting facts',
    items: [
      'Acrevis Bank AG, a leading regional bank between Lake Constance and Lake Zurich',
      'Acrevis Bank AG has decided to partner with VSHN after an intensive evaluation and detailing phase.',
      'Together with Puzzle ITC, a technology platform based on APPUiO was developed for the areas of implementation, realisation and operation of IT platforms.',
    ],
  },
};

export default () => (
  <MainLayout>
    <Hero {...hero} />
    <Contact />
  </MainLayout>
);
