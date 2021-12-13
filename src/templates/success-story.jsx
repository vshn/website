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
      logo={data.acf.logo}
      partnerInfo={data.acf.partnerInfo}
      logoBackgroundColor={data.acf.logoBackgroundColor}
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
        logo: logoInCard {
          localFile {
            childImageSharp {
              fluid(maxHeight: 135) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
            publicURL
          }
        }
        logoBackgroundColor
        partnerInfo {
          items {
            text
            value
          }
          partnerLink {
            url
            title
            target
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
