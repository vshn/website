/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/pages/content-page/content';
import Hero from 'components/pages/content-page/hero';
import Contact from 'components/shared/contact';
import RelatedItems from 'components/shared/related-items/';
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
    <Hero title={data.title} breadcrumbs={data.acf.breadcrumbs} />
    <Content content={data.content} relatedItems={data.acf.relatedItems} />
    <Contact locale={locale} />
  </MainLayout>
);
export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
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
        relatedItems {
          title
          items {
            link {
              url
              title
              target
            }
          }
        }
      }
      ...wpPageSeo
    }
  }
`;
