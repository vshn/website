/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import BlogPostsList from 'components/pages/blog/blog-posts-list';
import Categories from 'components/pages/blog/categories';
import FeaturedPost from 'components/pages/blog/featured-post';
import Pagination from 'components/pages/blog/pagination';
import Contact from 'components/shared/contact';
import MainLayout from 'layouts/main';

export default ({
  data: {
    wpPage: {
      seo,
      uri: pageRootUri,
      acf: data,
    },
    posts,
  },
  pageContext: {
    locale,
    pageUrls,
    menus,
    globalFields,
    categories,
    pageCount,
    currentPageIndex,
    categoryId,
  },
}) => (
  <MainLayout
    seo={seo}
    pageUrls={pageUrls}
    menus={menus}
    globalFields={globalFields}
  >
    <FeaturedPost {...data.featuredPost} />
    <Categories
      locale={locale}
      rootPath={pageRootUri}
      categories={categories}
      activeCategoryId={categoryId}
    />
    <BlogPostsList locale={locale} posts={posts.nodes} banner={data.banner} />
    <Pagination
      locale={locale}
      pageCount={pageCount}
      currentPageIndex={currentPageIndex}
      rootPath={pageRootUri}
    />
    <Contact locale={locale} />
  </MainLayout>
);

export const query = graphql`
  query($id: String!, $featuredPostId: String!, $categoryId: String, $skip: Int!, $limit: Int!, $locale: String!) {
    wpPage(id: { eq: $id }) {
      uri
      acf {
        banner {
          bannerCover {
            localFile {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          bannerTitle
          bannerLink
        }
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
       }
      ...wpPageSeo
    }
    posts: allWpPost(
      filter: {
        id: { ne: $featuredPostId }
        categories: { nodes: { elemMatch: { id: { eq: $categoryId } } } }
        language: { slug: { eq: $locale } }
      }
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        title
        uri
        acf {
          shortDescription
        }
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`;
