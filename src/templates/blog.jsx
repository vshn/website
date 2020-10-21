/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import BlogPostsList from 'components/pages/blog/blog-posts-list';
import Categories from 'components/pages/blog/categories';
import FeaturedPost from 'components/pages/blog/featured-post';
import Pagination from 'components/pages/blog/pagination';
import Contact from 'components/shared/contact';
import MainLayout from 'layouts/main';

const blogPostsList = {
  items: [
    {
      title: 'VSHN announces Red Hat OpenShift 4 services',
      text: 'VSHN announces Red Hat OpenShift 4 services. We’re very happy to announce Red Hat OpenShift 4 services on APPUiO! The whole VSHN team has been working hard on making OpenShift 4 a reality for our customers. We are fully committed on the strategic...',
      date: new Date('2020-08-24'),
      buttonUrl: '/',
      buttonText: 'Read more',
    },
    {
      title: 'VSHN.timer #57: Highlights of KubeCon + CloudNativeCon Europe...',
      text: 'Welcome to another VSHN.timer! Every Monday, 5 links related to Kubernetes, OpenShift, CI / CD, and DevOps; all stuff coming out of our own chat system, making us think, laugh, or simply work better. This week we’re going to talk about the most important...',
      date: new Date('2020-08-24'),
      buttonUrl: '/',
      buttonText: 'Read more',
    },
    {
      title: 'VSHN.timer #56: Getting Ready for KubeCon + CloudNativeCon Europe...',
      text: 'Welcome to another VSHN.timer! Every Monday, 5 links related to Kubernetes, OpenShift, CI / CD, and DevOps; all stuff coming out of our own chat system, making us think, laugh, or simply work better. This week we’re going to talk about random interesting things...',
      date: new Date('2020-08-17'),
      buttonUrl: '/',
      buttonText: 'Read more',
    },
    {
      title: 'VSHN.timer #55: The Future Of Linux',
      text: 'Welcome to another VSHN.timer! Every Monday, 5 links related to Kubernetes, OpenShift, CI / CD, and DevOps; all stuff coming out of our own chat system, making us think, laugh, or simply work better. This week we’re going to talk about what’s in store for that little sid...',
      date: new Date('2020-08-10'),
      buttonUrl: '/',
      buttonText: 'Read more',
    },
    {
      title: 'Welcome Finn!',
      text: 'Hi everyone, my name is Finn. Last year I was in school in Hirschengraben. I learned a little bit of English, maths, and other interesting things. In my spare time I play three to four times a week football, where I meet a lot of friends; I play video games sometimes, too. M...',
      date: new Date('2020-08-10'),
      buttonUrl: '/',
      buttonText: 'Read more',
    },
  ],
};

const pagination = {
  previousText: 'Older posts',
  previousUrl: '/',
  nextText: 'Newer posts',
  nextUrl: '/',
};

export default ({ data: { wpPage: { seo, acf: data } }, pageContext: { locale } }) => (
  <MainLayout seo={seo}>
    <FeaturedPost {...data.featuredPost} />
    <Categories {...data.categories} />
    <BlogPostsList {...blogPostsList} />
    <Pagination {...pagination} />
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
      }
    }  
  }
`;
