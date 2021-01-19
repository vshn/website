/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/pages/contact/content';
import Hero from 'components/pages/contact/hero';
import MainLayout from 'layouts/main';

export default ({
  data: { wpPage: data },
  pageContext: { locale, pageUrls, menus, globalFields },
}) => (
  <MainLayout
    locale={locale}
    seo={data.seo}
    pageUrls={pageUrls}
    menus={menus}
    globalFields={globalFields}
  >
    <Hero title={data.title} />
    <Content
      formId={data.acf.contactFormId}
      contactInfo={data.acf.contactInfo}
    />
  </MainLayout>
);

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      acf {
        contactFormId
        contactInfo {
          items {
            icon {
              localFile {
                publicURL
              }
            }
            title
            description
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
