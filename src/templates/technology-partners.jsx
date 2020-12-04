/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Hero from 'components/pages/technology-partners/hero';
import TechnologyPartnersList from 'components/pages/technology-partners/technology-partners-list';
import Contact from 'components/shared/contact';
import t from 'i18n';
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
      breadcrumbSlug={t[locale].technologyPartners.breadcrumbSlug}
      breadcrumbRoot={t[locale].technologyPartners.breadcrumbRoot}
      title={t[locale].technologyPartners.title}
      subtitle={data.title}
    />
    <TechnologyPartnersList technologyPartnersList={data.acf.technologyPartnersList} />
    <Contact locale={locale} />
  </MainLayout>
);

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      acf {
        technologyPartnersList {
          url
          logo {
            localFile {
              publicURL
            }
          }
          name
        }
      }
      ...wpPageSeo
    }
  }
`;
