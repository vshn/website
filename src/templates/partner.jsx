/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/pages/partner/content';
import Hero from 'components/pages/partner/hero/';
import Contact from 'components/shared/contact';
import MainLayout from 'layouts/main';

const Partner = ({
  data: {
    wpPartner: data,
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
    <Content content={data.content} {...data.acf} locale={locale} />
    <Contact locale={locale} />
  </MainLayout>
);

export const query = graphql`
  query($id: String!) {
    wpPartner(id: { eq: $id }) {
      ...wpPartnerSeo
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
              publicURL
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
            target
            title
          }
        }
        successStoryCard {
          successStory {
            ... on WpSuccessStory {    
              title
              acf {
                description
              }
              footerUrl: uri
            }
          }
          footerText
        }
      }
    }
  }
`;

export default Partner;
