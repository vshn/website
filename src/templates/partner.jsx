/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/pages/partner/content';
import Hero from 'components/pages/partner/hero/';
import Contact from 'components/shared/contact';
import MainLayout from 'layouts/main';

export default ({ data: { seo, wpPartner: data }, pageContext: { locale } }) => (
  <MainLayout seo={seo}>
    <Hero {...data} />
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
          category
          successStory {
            ... on WpSuccessStory {    
              title
              acf {
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
