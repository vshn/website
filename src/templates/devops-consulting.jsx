/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/pages/devops-consulting/content';
import Hero from 'components/pages/devops-consulting/hero';
import Contact from 'components/shared/contact';
import MainLayout from 'layouts/main';

export default ({
  data: {
    seo,
    wpPage: data,
  },
  pageContext: { locale, pageUrls, menus, globalFields },
}) => (
  <MainLayout
    seo={seo}
    pageUrls={pageUrls}
    menus={menus}
    globalFields={globalFields}
  >
    <Hero {...data} />
    <Content {...data} />
    <Contact locale={locale} />
  </MainLayout>
);
export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
      ...wpPageSeo
    }
  }
`;
