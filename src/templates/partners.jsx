/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import PartnersHero from 'components/pages/partners/partners-hero';
import PartnersList from 'components/pages/partners/partners-list';
import SuccessStories from 'components/pages/partners/success-stories';
import Contact from 'components/shared/contact';
import MainLayout from 'layouts/main';

export default ({
  data: {
    wpPage: { seo, acf: data },
    allWpSuccessStory,
    allWpPartner,
  },
  pageContext: { locale, pageUrls, menus, globalFields },
}) => (
  <MainLayout
    seo={seo}
    pageUrls={pageUrls}
    menus={menus}
    globalFields={globalFields}
  >
    <PartnersHero {...data.partnersHero} />
    <SuccessStories {...data.successStories} {...allWpSuccessStory} />
    <PartnersList {...data.partnersList} {...allWpPartner} />
    <Contact locale={locale} />
  </MainLayout>
);

export const query = graphql`
  query($id: String!, $locale: String!) {
    wpPage(id: { eq: $id }) {
      acf {
        partnersHero {
          title
          subtitle
          description
          buttonText
        }
        successStories {
          title
          itemFooterText
        }
        partnersList {
          title
          filters {
            label
            items {
              item
            }
          }
        }
      }
      ...wpPageSeo
    }
    allWpSuccessStory(
      filter: { language: { slug: { eq: $locale } } }
      sort: { fields: title, order: ASC }
    ) {
      successStories: nodes {
        uri
        title
        acf {
          logo {
            localFile {
              childImageSharp {
                fluid(maxHeight: 135) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    }
    allWpPartner(
      filter: { language: { slug: { eq: $locale } } }
      sort: { fields: title, order: ASC }
    ) {
      partners: nodes {
        uri
        title
      }
    }
  }
`;
