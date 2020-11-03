/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/pages/success-story/content';
import Hero from 'components/pages/success-story/hero';
import Contact from 'components/shared/contact';
import MainLayout from 'layouts/main';

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

export default ({ data: { seo, wpSuccessStory: data }, pageContext: { locale } }) => (
  <MainLayout seo={seo}>
    <Hero {...data} />
    <Content {...data} />
    <Contact locale={locale} />
  </MainLayout>
);

export const query = graphql`
  query($id: String!) {
    wpSuccessStory(id: { eq: $id }) {
      title
      acf {
        category
        description
        facts {
          title
          items {
            item
          }
        }
      }
    }
  }
`;
