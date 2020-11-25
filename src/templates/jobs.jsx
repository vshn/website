/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Hero from 'components/pages/jobs/hero';
import Contact from 'components/shared/contact';
import MainLayout from 'layouts/main';

export default ({
  data: {
    wpPage: data,
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
    <Contact locale={locale} />
  </MainLayout>
);

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
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
      }
      ...wpPageSeo
    }
  }
`;
