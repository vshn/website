/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/pages/jobs/content';
import Hero from 'components/pages/jobs/hero';
import MainLayout from 'layouts/main';

export default ({
  data: {
    wpPage: data,
    positions,
  },
  pageContext: { pageUrls, menus, globalFields },
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
  query($id: String!, $locale: String!) {
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
    positions: allWpJob(filter: { language: { slug: { eq: $locale } } }) {
      items: nodes {
        url: uri
        title
      }
    }
  }
`;
