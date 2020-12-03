/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Hero from 'components/pages/clients/hero';
import PartnersList from 'components/pages/clients/partners-list';
import Contact from 'components/shared/contact';
import t from 'i18n';
import MainLayout from 'layouts/main';

export default ({
  data: {
    wpPage: data,
    allWpPartner,
    allWpIndustry: { industries },
    allWpInfrastructure: { infrastructures },
    allWpTechnology: { technologies },

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
      breadcrumbSlug={t[locale].clients.breadcrumbSlug}
      breadcrumbRoot={t[locale].clients.breadcrumbRoot}
      title={t[locale].clients.title}
      subtitle={data.title}
    />
    <PartnersList
      {...allWpPartner}
      filters={{ industries, infrastructures, technologies }}
      locale={locale}
    />
    <Contact locale={locale} />
  </MainLayout>
);

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
