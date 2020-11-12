/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Hero from 'components/pages/contact/hero';
import MainLayout from 'layouts/main';

const hero = {
  title: 'Contact us',
};

export default ({
  data: { wpPage: { seo, acf: data } },
  pageContext: { pageUrls, menus },
}) => (
  <MainLayout seo={seo} pageUrls={pageUrls} menus={menus}>
    <Hero {...hero} />
  </MainLayout>
);

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
    }
  }
`;
