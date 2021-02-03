/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import backgroundImage from 'components/pages/content-page/hero/images/background-image.svg';
import Content from 'components/shared/content';
import Hero from 'components/shared/hero';
import MainLayout from 'layouts/main';

export default ({
  data: {
    wpPage: data,
  },
  pageContext: { locale, pageUrls, menus, globalFields },
}) => (
  <MainLayout
    locale={locale}
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
