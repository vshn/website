/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/pages/content-page-with-form/content';
import backgroundImage from 'components/pages/content-page/hero/images/background-image.svg';
import Hero from 'components/shared/hero';
import MainLayout from 'layouts/main';

export default ({
  data: {
    wpPage: data,
  },
  pageContext: { pageUrls, menus, globalFields },
}) => (
  <MainLayout
    seo={data.seo}
    pageUrls={pageUrls}
    menus={menus}
    globalFields={globalFields}
  >
    <Hero
      title={data.title}
      pageTitle={data.title}
      backgroundImage={backgroundImage}
    />
    <Content
      content={data.content}
      formId={data.acf.contentPageFormId}
    />
  </MainLayout>
);

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
      acf {
        contentPageFormId
      }
      ...wpPageSeo
    }
  }
`;
