/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/pages/job/content';
import Hero from 'components/pages/job/hero';
import Contact from 'components/shared/contact';
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
    <Hero title={data.title} breadcrumbs={data.acf.breadcrumbs} />
    <Content content={data.content} openPositions={data.acf.openPositions} positions={positions} />
    <Contact locale={locale} />
  </MainLayout>
);

export const query = graphql`
  query($id: String!, $locale: String!) {
    wpJob(id: { eq: $id }) {
      ...wpJobSeo
      title
      content
      acf {
        breadcrumbs {
          link {
            url
            title
            target
          }
        }
        openPositions {
          title
        }
      }
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
