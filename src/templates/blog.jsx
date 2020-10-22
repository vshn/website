/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import BlogPostsList from 'components/pages/blog/blog-posts-list';
import Categories from 'components/pages/blog/categories';
import FeaturedPost from 'components/pages/blog/featured-post';
import Pagination from 'components/pages/blog/pagination';
import Contact from 'components/shared/contact';
import MainLayout from 'layouts/main';

export default ({ data: { wpPage: { seo, acf: data } }, pageContext: { locale } }) => (
  <MainLayout seo={seo}>
    <FeaturedPost {...data.featuredPost} />
    <Categories {...data.categories} />
    <BlogPostsList {...data.blogPostsList} />
    <Pagination {...data.pagination} />
    <Contact locale={locale} />
  </MainLayout>
);

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      acf {
        featuredPost {
          post {
            ... on WpPost {
              title
              date(formatString: "YYYY-MM-DD")
              uri
              acf {
                shortDescription
              }
            }
          }
          footerText
        }
        categories {
          items {
            category {
              name
              uri
            }
          }
          activeItemSlug
        }
        blogPostsList {
          items {
            post {
              ... on WpPost {
                title
                acf {
                  shortDescription
                }
                date(formatString: "YYYY-MM-DD")
                uri
              }
            }
          }
          itemFooterText
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
        pagination {
          nextText
          nextUrl {
            url
          }
          previousText
          previousUrl {
            url
          }
        }
      }
    }  
  }
`;
