/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/pages/success-story/content';
import Hero from 'components/pages/success-story/hero';
import Contact from 'components/shared/contact';
import MainLayout from 'layouts/main';

export default ({
  data: {
    wpSuccessStory: data,
    wpPage: { slug },
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
      slug={slug}
      title={data.title}
      description={data.acf.description}
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
  query($id: String!, $locale: String!) {
    wpSuccessStory(id: { eq: $id }) {
      ...wpSuccessStorySeo
      title
      content
      acf {
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
    wpPage(template: {templateName: {eq: "Partners"}}, language: {slug: {eq: $locale}}) {
      slug: uri
    }
  }
`;