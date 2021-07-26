/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/pages/jobs/content';
import Hero from 'components/pages/jobs/hero';
import t from 'i18n';
import MainLayout from 'layouts/main';

const Jobs = ({
  data: {
    wpPage: data,
  },
  pageContext: { locale, pageUrls, menus, globalFields },
}) => {
  const breadcrumbs = [t[locale].breadcrumbs.about];
  return (
    <MainLayout
      locale={locale}
      seo={data.seo}
      pageUrls={pageUrls}
      menus={menus}
      globalFields={globalFields}
    >
      <Hero
        breadcrumbs={breadcrumbs}
        title={data.title}
        image={data.acf.jobsHeroImage}
      />
      <Content
        content={data.content}
      />
    </MainLayout>
  );
};

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
      acf {
        jobsHeroImage {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1290) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
        jobForm {
          title
          formId
        }
      }
      ...wpPageSeo
    }
  }
`;

export default Jobs;
