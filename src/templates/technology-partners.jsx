/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import backgroundImage from 'components/pages/technology-partners/hero/images/background-image.svg';
import TechnologyPartnersList from 'components/pages/technology-partners/technology-partners-list';
import Contact from 'components/shared/contact';
import Hero from 'components/shared/hero';
import t from 'i18n';
import MainLayout from 'layouts/main';

export default ({
  data: {
    wpPage: data,
  },
  pageContext: { locale, pageUrls, menus, globalFields },
}) => {
  const breadcrumbs = [t[locale].breadcrumbs.partners];
  return (
    <MainLayout
      seo={data.seo}
      pageUrls={pageUrls}
      menus={menus}
      globalFields={globalFields}
    >
      <Hero
        breadcrumbs={breadcrumbs}
        title={t[locale].technologyPartners.title}
        pageTitle={data.title}
        backgroundImage={backgroundImage}
      />
      <TechnologyPartnersList technologyPartnersList={data.acf.technologyPartnersList} />
      <Contact locale={locale} />
    </MainLayout>
  );
};

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
