/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/pages/content-page/content';
import backgroundImage from 'components/pages/content-page/hero/images/background-image.svg';
import Contact from 'components/shared/contact';
import Hero from 'components/shared/hero';
import MainLayout from 'layouts/main';

export default ({
  data: {
    wpPage: data,
  },
  pageContext: { locale, pageUrls, menus, globalFields },
}) => (
  <MainLayout
    seo={data.seo}
    pageUrls={pageUrls}
    menus={menus}
    globalFields={globalFields}
  >
    <Hero
      breadcrumbs={data.acf.breadcrumbs}
      title={data.title}
      subtitle={data.title}
      backgroundImage={backgroundImage}
    />
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
