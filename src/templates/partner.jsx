/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/pages/partner/content';
import Hero from 'components/pages/partner/hero/';
import Contact from 'components/shared/contact';
import MainLayout from 'layouts/main';

export default ({
  data: {
    seo,
    wpPartner: data,
  },
  pageContext: { locale, pageUrls, menus, globalFields },
}) => (
  <MainLayout
    seo={seo}
    pageUrls={pageUrls}
    menus={menus}
    globalFields={globalFields}
  >
    <Hero {...data} locale={locale} />
    <Content {...data} />
    <Contact locale={locale} />
  </MainLayout>
);

export const query = graphql`
  query($id: String!) {
    wpPartner(id: { eq: $id }) {
      title
      content
      acf {
        logo {
          logoBackgroundColor
          logoImage {
            localFile {
              childImageSharp {
                fluid(maxHeight: 30) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
        category {
          title
          url
        }
        description
        partnerInfo {
          items {
            value
            text
          }
          partnerLink {
            url
            title
          }
        }
        successStoryCard {
          successStory {
            ... on WpSuccessStory {    
              title
              acf {
                category 
                description
              }
              uri
            }
          }
          footerText
        }
      }
    }
  }
`;
