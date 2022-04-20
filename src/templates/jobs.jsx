/* eslint-disable react/prop-types */
import { graphql } from "gatsby";
import React from "react";

import Content from "components/pages/jobs/content";
import Hero from "components/pages/jobs/hero";
import t from "i18n";
import MainLayout from "layouts/main";

const Jobs = ({
  data: { wpPage: data },
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
        ratingCards={data.acf.ratingCards}
        ratingCards2={data.acf.ratingCards2}
      />
    </MainLayout>
  );
};

export const query = graphql`
  query ($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
      acf {
        jobsHeroImage {
          gatsbyImage(width: 1290, placeholder: NONE)
        }
        ratingCards {
          title
          description
          items {
            description
            image {
              mediaItemUrl
            }
            link {
              url
              target
              title
            }
          }
        }
        ratingCards2 {
          title
          description
          items {
            description
            image {
              mediaItemUrl
            }
            link {
              url
              target
              title
            }
          }
        }
      }
      ...wpPageSeo
    }
  }
`;

export default Jobs;
