/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/pages/success-story/content';
import Hero from 'components/pages/success-story/hero';
import Contact from 'components/shared/contact';
import MainLayout from 'layouts/main';

const SuccessStory = ({
  data: {
    wpSuccessStory: data,
  },
  pageContext: { locale, pageUrls, menus, globalFields },
}) => (
  <MainLayout
    locale={locale}
    seo={data.seo}
    pageUrls={pageUrls}
    menus={menus}
    globalFields={globalFields}
  >
    <Hero
      title={data.title}
      locale={locale}
    />
    <Content
      content={data.content}
      partnerPost={data.acf.partnerPost}
      facts={data.acf.facts}
    />
    <Contact locale={locale} />
  </MainLayout>
);

export const query = graphql`
  query($id: String!) {
    wpSuccessStory(id: { eq: $id }) {
      ...wpSuccessStorySeo
      title
      content
      acf {
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
                  target
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

export default SuccessStory;
