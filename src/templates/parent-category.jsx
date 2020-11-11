/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Hero from 'components/pages/parent-category/hero';
import Options from 'components/pages/parent-category/options';
import OtherOptions from 'components/pages/parent-category/other-options';
import Contact from 'components/shared/contact';
import MainLayout from 'layouts/main';

const hero = {
  title: 'Products',
  subtitle: 'VSHN products',
  description: '<p>Our products help you get the most out of your DevOps journey, become Cloud Native and implement your cloud or on-premise container environment.</p><p>DevOps stands for a new culture and approach in the collaboration of traditionally separated departments. Our products help Development and Operations to work together to increase software quality and availability and ultimately customer satisfaction.</p>',
};

const options = {
  items: [
    {
      title: 'APPUiO',
      footerText: 'Learn more',
      link: '/',
    },
    {
      title: 'Managed Services',
      footerText: 'Learn more',
      link: '/',
    },
    {
      title: 'VSHN Syn Support',
      footerText: 'Learn more',
      link: '/',
    },
    {
      title: 'Open Source',
      footerText: 'Learn more',
      link: '/',
    },
  ],
};

const otherOptions = {
  title: 'Also see',
  items: [
    'Our solutions',
  ],
};

export default ({
  data: {
    wpPage: { seo, acf: data },
  },
  pageContext: { locale, pageUrls },
}) => (
  <MainLayout seo={seo} pageUrls={pageUrls}>
    <Hero {...hero} />
    <Options {...options} />
    <OtherOptions {...otherOptions} />
    <Contact locale={locale} />
  </MainLayout>
);

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      ...wpPageSeo
    }
  }
`;
