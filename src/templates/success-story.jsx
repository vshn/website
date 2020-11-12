/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/pages/success-story/content';
import Hero from 'components/pages/success-story/hero';
import Contact from 'components/shared/contact';
import MainLayout from 'layouts/main';

export default ({
  data: { seo, wpSuccessStory: data },
  pageContext: { locale, pageUrls, menus },
}) => (
  <MainLayout seo={seo} pageUrls={pageUrls} menus={menus}>
    <Hero {...data} />
    <Content {...data} />
    <Contact locale={locale} />
  </MainLayout>
);

export const query = graphql`
  query($id: String!) {
    wpSuccessStory(id: { eq: $id }) {
      title
      content
      acf {
        category
        description
        partnerPost {
          ... on WpPartner {
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
            }
          }
        }
        facts {
          title
          items {
            item
          }
        }
      }
    }
  }
`;
