/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import AuthorInfo from 'components/pages/blog-post/author-info';
import Content from 'components/pages/blog-post/content';
import Hero from 'components/pages/blog-post/hero';
import News from 'components/pages/blog-post/news';
import Contact from 'components/shared/contact';
import useHubspotForm from 'hooks/use-hubspot-form';
import translations from 'i18n';
import MainLayout from 'layouts/main';
import 'components/lazy-blocks/hubspot-form/hubspot-form.scss';

export default ({
  data: { wpPost: data, allWpPost },
  pageContext: { locale, pageUrls, menus, globalFields },
}) => {
  useHubspotForm('hubspot-form');
  return (
    <MainLayout
      locale={locale}
      seo={data.seo}
      pageUrls={pageUrls}
      menus={menus}
      globalFields={globalFields}
    >
      <Hero {...data} />
      <Content {...data} />
      <AuthorInfo {...data.author.node} />
      <News
        {...data.acf}
        {...allWpPost}
        title={translations[locale].blogPost.latestNews}
        readMoreText={translations[locale].blog.postCtaButton}
      />
      <Contact locale={locale} />
    </MainLayout>
  );
};

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
      author {
        node {
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
          }
          firstName
          lastName
          description
        }
      }
      ...wpPostSeo
    }
    allWpPost(
      filter: { language: { slug: { eq: $locale } } }
      limit: 9
      sort: { fields: date, order: DESC }
    ) {
      items: nodes {
        title
        shortDescription: excerpt
        uri
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`;
