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
    seo={data.seo}
    pageUrls={pageUrls}
    menus={menus}
    globalFields={globalFields}
  >
    <Hero title={data.title} />
    <Content
      form={data.acf.contactForm}
      locale={locale}
      contactInfo={data.acf.contactInfo}
    />
  </MainLayout>
);

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      acf {
        contactForm {
          formId
        }
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
