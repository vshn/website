/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import LoginSections from 'components/pages/login/login-sections';
import Contact from 'components/shared/contact';
import MainLayout from 'layouts/main';

export default ({
  data: { wpPage: { seo, acf: data } },
  pageContext: { locale, pageUrls, menus, globalFields },
}) => (
  <MainLayout
    locale={locale}
    seo={seo}
    pageUrls={pageUrls}
    menus={menus}
    globalFields={globalFields}
  >
    <LoginSections {...data.loginSections} />
    <Contact locale={locale} />
  </MainLayout>
);

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      acf {
        loginSections {
          title
          items {
            title
            description
            buttonLink {
              url
              title
            }
            imageName
          }
        }
      }
      ...wpPageSeo
    }
  }
`;
