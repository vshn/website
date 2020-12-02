/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/pages/job/content';
import Hero from 'components/pages/job/hero';
import Contact from 'components/shared/contact';
import translations from 'i18n';
import MainLayout from 'layouts/main';

export default ({
  data: {
    wpJob: data,
    positions,
  },
  pageContext: { locale, pageUrls, menus, globalFields },
}) => (
  <MainLayout
    seo={data.seo}
    pageUrls={pageUrls}
    menus={menus}
    globalFields={globalFields}
  >
    <Hero title={data.title} locale={locale} />
    <Content
      content={data.content}
      title={translations[locale].job.openPositionsTitle}
      positions={positions}
    />
    <Contact locale={locale} />
  </MainLayout>
);

export const query = graphql`
  query($id: String!, $locale: String!) {
    wpJob(id: { eq: $id }) {
      ...wpJobSeo
      title
      content
    }
    positions: allWpJob(
      filter: {language: {slug: {eq: $locale}}},
      sort: {order: ASC, fields: title}) {
      items: nodes {
        url: uri
        title
      }
    }
  }
`;
