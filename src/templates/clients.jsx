/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import backgroundImage from 'components/pages/clients/hero/images/background-image.svg';
import PartnersList from 'components/pages/clients/partners-list';
import Contact from 'components/shared/contact';
import Hero from 'components/shared/hero';
import t from 'i18n';
import MainLayout from 'layouts/main';

const Clients = ({
  data: {
    wpPage: data,
    allWpPartner,
    allWpIndustry: { industries },
    allWpInfrastructure: { infrastructures },
    allWpTechnology: { technologies },

  },
  pageContext: { locale, pageUrls, menus, globalFields },
}) => {
  const breadcrumbs = [t[locale].breadcrumbs.partners];
  return (
    <MainLayout
      locale={locale}
      seo={data.seo}
      pageUrls={pageUrls}
      menus={menus}
      globalFields={globalFields}
    >
      <Hero
        breadcrumbs={breadcrumbs}
        title={t[locale].clients.title}
        pageTitle={data.title}
        backgroundImage={backgroundImage}
      />
      <PartnersList
        {...allWpPartner}
        filters={{ industries, infrastructures, technologies }}
        locale={locale}
      />
      <Contact locale={locale} />
    </MainLayout>
  );
};

export const query = graphql`
  query($id: String!, $locale: String!) {
    wpPage(id: { eq: $id }) {
      title
      ...wpPageSeo
    }
    allWpIndustry(filter: { language: { slug: { eq: $locale } } }) {
      industries: nodes {
        name
        slug
      }
    }
    allWpInfrastructure(filter: { language: { slug: { eq: $locale } } }) {
      infrastructures:  nodes {
        name
        slug
      }
    }
    allWpTechnology(filter: { language: { slug: { eq: $locale } } }) {
      technologies:nodes {
        name
        slug
      }
    }
    allWpPartner(
      filter: { language: { slug: { eq: $locale } } }
      sort: { fields: title, order: ASC }
    ) {
      partners: nodes {
        uri
        title
        content
        acf {
          partnerInfo {
            partnerLink {
              url
              title
              target
            }
          }
        }
        industries {
          nodes {
            slug
          }
        }
        infrastructures {
          nodes {
            slug
          }
        }
        technologies {
          nodes {
            slug
          }
        }
      }
    }
  }
`;

export default Clients;
