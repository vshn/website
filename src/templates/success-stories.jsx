/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Hero from 'components/pages/success-stories/hero';
import Items from 'components/pages/success-stories/items';
import Contact from 'components/shared/contact';
import t from 'i18n';
import MainLayout from 'layouts/main';

export default ({
  data: {
    wpPage: data,
    allWpSuccessStory,
  },
  pageContext: { locale, pageUrls, menus, globalFields },
}) => (
  <MainLayout
    seo={data.seo}
    pageUrls={pageUrls}
    menus={menus}
    globalFields={globalFields}
  >
    <Hero
      title={t[locale].successStories.title}
      breadcrumbSlug={t[locale].successStories.breadcrumbSlug}
      breadcrumbRoot={t[locale].successStories.breadcrumbRoot}
      subtitle={data.title}
    />
    <Items
      {...allWpSuccessStory}
      itemFooterText={t[locale].successStories.itemFooterText}
    />
    <Contact locale={locale} />
  </MainLayout>
);

export const query = graphql`
  query($id: String!, $locale: String!) {
    wpPage(id: { eq: $id }) {
      title
      ...wpPageSeo
    }
    allWpSuccessStory(
      filter: { language: { slug: { eq: $locale } } }
      sort: { fields: title, order: ASC }
    ) {
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
  }
`;
