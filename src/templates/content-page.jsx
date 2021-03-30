/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import backgroundImage from 'components/pages/content-page/hero/images/background-image.svg';
import Contact from 'components/shared/contact';
import Content from 'components/shared/content';
import Hero from 'components/shared/hero';
import MainLayout from 'layouts/main';

const ContentPage = ({
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
      breadcrumbs={data.acf.breadcrumbs}
      title={data.title}
      pageTitle={data.title}
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

export default ContentPage;
