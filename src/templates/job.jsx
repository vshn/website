/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useInView } from 'react-intersection-observer';

import Content from 'components/pages/job/content';
import backgroundImage from 'components/pages/job/hero/images/background-image.svg';
import Hero from 'components/shared/hero';
import t from 'i18n';
import MainLayout from 'layouts/main';

export default ({
  data: {
    wpJob: data,
    positions,
    allWpPage,
  },
  pageContext: { locale, pageUrls, menus, globalFields },
}) => {
  const links = t[locale].breadcrumbs;
  const breadcrumbs = [links.about, links.jobs];
  return (
    <MainLayout
      seo={data.seo}
      pageUrls={pageUrls}
      menus={menus}
      globalFields={globalFields}
    >
      <Hero
        breadcrumbs={breadcrumbs}
        title={data.title}
        subtitle={data.title}
        backgroundImage={backgroundImage}
      />
      <Content
        content={data.content}
        title={t[locale].job.openPositionsTitle}
        positions={positions}
        form={allWpPage.nodes[0].acf.jobForm}
        locale={locale}
      />
    </MainLayout>
  );
};

export const query = graphql`
  query($id: String!, $locale: String!) {
    wpJob(id: { eq: $id }) {
      ...wpJobSeo
      title
      content
    }
    positions: allWpJob(
      filter: {language: {slug: {eq: $locale}}},
      sort: {order: ASC, fields: title}) {
      items: nodes {
        url: uri
        title
      }
    }
    allWpPage(filter: { template: { templateName: { eq: "Jobs" } }, language: { slug: { eq: $locale } }  }) {
      nodes {
        acf {
          jobForm {
            title
            formId
          }
        }
      }
    }
  }
`;
