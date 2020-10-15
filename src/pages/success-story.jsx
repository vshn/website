import React from 'react';
import MainLayout from 'layouts/main';
import Contact from 'components/shared/contact';

import Hero from 'components/pages/success-story/hero';
import Content from 'components/pages/success-story/content';

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

const content = {
  interview: {
    avatar: ' ',
    name: 'Christian Gentsch',
    position: 'Member of the Executive Board acrevis Bank AG and CEO Finanz-Logistik AG',
    content: 'Acrevis Bank is an independent bank with a broad shareholder base and operates between Lake Constance and Lake Zurich. It has 8.4 billion assets under management, total assets of CHF 4.5 billion and 146 full-time positions. Finanz-Logistik is a BPO provider for banks with offers in the areas of digitalisation, payment transactions, securities processing, accounting and credit processing. Finanz-Logistik has 75 employees and serves 35 finnova banks.',
  },
};

export default () => (
  <MainLayout>
    <Hero {...hero} />
    <Content {...content} />
    <Contact />
  </MainLayout>
);
