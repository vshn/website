/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Hero from 'components/pages/parent-category/hero';
import Options from 'components/pages/parent-category/options';
import OtherOptions from 'components/pages/parent-category/other-options';
import Contact from 'components/shared/contact';
import MainLayout from 'layouts/main';

const hero = {
  title: 'Solutions',
  subtitle: 'Solutions VSHN provides',
  description: '<p>DevOps is the industrial revolution in the software industry. VSHN helps you solve the problems when software is transformed into an online-service.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s</p>',
};

const options = {
  items: [
    {
      title: 'DevOps Enablement',
      footerText: 'Learn more',
      link: '/',
    },
    {
      title: 'Managed Container Platforms',
      footerText: 'Learn more',
      link: '/',
    },
    {
      title: 'Managed Application Services',
      footerText: 'Learn more',
      link: '/',
    },
  ],
};

const otherOptions = {
  title: 'Also see',
  items: [
    'Why DevOps?',
    'Our products',
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
