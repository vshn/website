import React from 'react';
import MainLayout from 'layouts/main';
import Contact from 'components/shared/contact';

import Hero from 'components/pages/success-story/hero';
import Content from 'components/pages/success-story/content';

const hero = {
  category: 'Success stories',
  title: 'Acrevis Bank',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard',
  facts: {
    title: 'Facts',
    items: [
      'Acrevis Bank AG, a leading regional bank between Lake Constance and Lake Zurich',
      'Acrevis Bank AG has decided to partner with VSHN after an intensive evaluation and detailing phase.',
      'Together with Puzzle ITC, a technology platform based on APPUiO was developed for the areas of implementation, realisation and operation of IT platforms.',
    ],
  },
};

const content = {
  interview: {
    avatar: ' ',
    name: 'Christian Gentsch',
    position: 'Member of the Executive Board acrevis Bank AG and CEO Finanz-Logistik AG',
    byLine: 'The interview was conducted by Markus Speth, CMO VSHN – The DevOps Company.',
  },
  facts: {
    title: 'Facts',
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
    <Content {...content} />
    <Contact />
  </MainLayout>
);
