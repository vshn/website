/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/pages/jobs/content';
import Hero from 'components/pages/jobs/hero';
import MainLayout from 'layouts/main';

const content = {
  openPositions: {
    title: 'Open positions',
    items: [
      {
        link: {
          url: '/',
          title: 'Senior Linux Engineering',
        },
      },
      {
        link: {
          url: '/',
          title: 'DevOps Engineering',
        },
      },
      {
        link: {
          url: '/',
          title: 'Business Development',
        },
      },
      {
        link: {
          url: '/',
          title: 'Service Manager',
        },
      },
      {
        link: {
          url: '/',
          title: 'Service Manager',
        },
      },
    ],
  },
  content: '<p>We’re in the comfortable situation to have hit the right nerve with our solutions: contrary to “hosters” and “outsourcers” we collaborate intensively with our customers and differently to “consultants” we take on the responsibility of 24/7 availability of our solutions – we get up at night if something fails and are available to help if mistakes happen since we know you can’t make an omelette without breaking eggs.</p><h3>Why VSHN – The DevOps Company?</h3><p>You can find many good reasons for VSHN as an employer here. Another benefit of being an open source company is that our Employee Handbook is also open source!</p>',
  companyRating: {
    title: 'Is it really fun working with us?',
    items: [
      {
        description: 'See how our employees rate us on Kununu:',
      },
      {
        description: 'We are also holders of the Transparent Company Award by Swissdevjobs.ch:',
      },
    ],
  },
};

export default ({
  data: {
    wpPage: data,
    positions,
  },
  pageContext: { locale, pageUrls, menus, globalFields },
}) => (
  <MainLayout
    seo={data.seo}
    pageUrls={pageUrls}
    menus={menus}
    globalFields={globalFields}
  >
    <Hero title={data.title} breadcrumbs={data.acf.breadcrumbs} {...data.acf.jobsHero} />
    <Content content={data.content} openPositions={data.acf.openPositions} positions={positions} />
  </MainLayout>
);

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
      acf {
        breadcrumbs {
          link {
            url
            title
            target
          }
        }
        jobsHero {
          photo {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1290) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
        openPositions {
          title
        }
      }
      ...wpPageSeo
    }
    positions: allWpJob {
      items: nodes {
        url: uri
        title
      }
    }
  }
`;
