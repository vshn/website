/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import AuthorInfo from 'components/pages/blog-post/author-info';
import Content from 'components/pages/blog-post/content';
import Hero from 'components/pages/blog-post/hero';
import News from 'components/pages/blog-post/news';
import Contact from 'components/shared/contact';
import MainLayout from 'layouts/main';

export default ({
  data: {
    seo,
    wpPost: data,
    allWpPost,
  },
  pageContext: { locale, pageUrls, menus, globalFields },
}) => (
  <MainLayout
    seo={seo}
    pageUrls={pageUrls}
    menus={menus}
    globalFields={globalFields}
  >
    <Hero {...data} />
    <Content {...data} />
    <AuthorInfo {...data.acf.authorInfo} />
    <News {...data.acf} {...allWpPost} />
    <Contact locale={locale} />
  </MainLayout>
);

export const query = graphql`
  query($id: String!, $locale: String!) {
    wpPost(id: { eq: $id }) {
      title
      categories {
        nodes {
          name
        }
      }
      date(formatString: "YYYY-MM-DD")
      content
      acf {
        authorInfo {
          acf {
            avatar {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 100) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
            fullName
            email
            number
          }
          description
        }
        news {
          title
        }
        itemFooterText
      }
      ...wpPostSeo
    }
    allWpPost(
      filter: {language: {slug: {eq: $locale}}}, 
      limit: 12, 
      sort: {fields: date, order: DESC}
      ) {
      items: nodes {
        title
        uri
        categories {
          nodes {
            name
          }
        }
        acf {
          shortDescription
        }
      }
    }
  }
`;
