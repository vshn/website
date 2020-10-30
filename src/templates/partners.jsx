/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import PartnersHero from 'components/pages/partners/partners-hero';
import PartnersList from 'components/pages/partners/partners-list';
import SuccessStories from 'components/pages/partners/success-stories';
import Contact from 'components/shared/contact';
import MainLayout from 'layouts/main';

const partnersList = {
  title: 'Partners',
  filters: [
    {
      label: 'Provider',
    },
    {
      label: 'Technology',
    },
  ],
  partners: [
    {
      url: '/',
      name: 'Acrevis Bank',
    },
    {
      url: '/',
      name: 'Ginetta',
    },
    {
      url: '/',
      name: 'Tyk',
    },
    {
      url: '/',
      name: 'Spryker',
    },
    {
      url: '/',
      name: 'Amazee',
    },
    {
      url: '/',
      name: 'HRM Systems',
    },
    {
      url: '/',
      name: 'Sherpany',
    },
    {
      url: '/',
      name: 'Starticket',
    },
    {
      url: '/',
      name: 'CreditGate24',
    },
    {
      url: '/',
      name: 'Komed Health',
    },
    {
      url: '/',
      name: 'Six',
    },
    {
      url: '/',
      name: 'Younity / Wirz',
    },
    {
      url: '/',
      name: 'Younity / Wirz',
    },
    {
      url: '/',
      name: 'Younity / Wirz',
    },
    {
      url: '/',
      name: 'Younity / Wirz',
    },
    {
      url: '/',
      name: 'Younity / Wirz',
    },
    {
      url: '/',
      name: 'Six',
    },
    {
      url: '/',
      name: 'Six',
    },
    {
      url: '/',
      name: 'Six',
    },
    {
      url: '/',
      name: 'Six',
    },
  ],
};

export default (
  {
    data: { wpPage: { seo, acf: data }, allWpSuccessStory, allWpPartner },
    pageContext: { locale },
  },
) => (
  <MainLayout seo={seo}>
    <PartnersHero {...data.partnersHero} />
    <SuccessStories {...data.successStories} {...allWpSuccessStory} />
    <PartnersList {...data.partnersList} {...allWpPartner} />
    <Contact locale={locale} />
  </MainLayout>
);

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      acf {
        partnersHero {
          title
          subtitle
          description
          buttonLink {
            url
          }
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
    allWpSuccessStory(sort: {fields: title, order: ASC}) {
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
  allWpPartner(sort: {fields: title, order: ASC}) {
    partners: nodes {
      uri
      title
    }
  }
}
`;
