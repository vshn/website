/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from 'layouts/main';
import Contact from 'components/shared/contact';

import Hero from 'components/pages/home/hero';
import Advantages from 'components/pages/home/advantages';
import Products from 'components/pages/home/products';
import Awards from 'components/pages/home/awards';
import Technologies from 'components/pages/home/technologies';
import Partners from 'components/pages/home/partners';
import Jobs from 'components/pages/home/jobs';
import News from 'components/pages/home/news';
import Report from 'components/pages/home/report';

export default ({ data: { wpPage: { seo, acf: data } }, pageContext: { locale } }) => (
  <MainLayout seo={seo}>
    <Hero {...data.hero} />
    <Advantages {...data.advantages} />
    <Products {...data.products} />
    <Awards {...data.awards} />
    <Technologies {...data.technologies} />
    <Partners {...data.partners} />
    <Jobs {...data.jobs} />
    <News {...data.news} />
    <Report {...data.report} />
    <Contact locale={locale} />
  </MainLayout>
);

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      acf {
        hero {
          title
          description
          buttonText
          buttonLink {
            url
          }
        }
        advantages {
          title
          subtitle
          items {
            title
            imageName
            footerText
            description
            link {
              url
            }
          }
        }
        products {
          title
          subtitle
          items {
            name
            detailsTitle
            detailsContent
          }
        }
        awards {
          title
          subtitle
          items {
            title
            description
            link {
              url
            }
          }
        }
        technologies {
          title
          subtitle
          text
          buttonText
          buttonLink {
            url
          }
        }
        partners {
          title
          items {
            name
            position
            text
            buttonLink {
              url
            }
          }
        }
        jobs {
          title
          description
          buttonText
          buttonLink {
            url
          }
        }
        news {
          title
          items {
            post {
              ... on WpPost {
                title
                uri
                categories {
                  nodes {
                    name
                  }
                }
                acf {
                  text
                  footerText
                }
              }
            }
          }
        }
        report {
          title
          subtitle
          text
          buttonText
          buttonLink {
            url
          }
        }
      }
      ...wpPageSeo
    }
  }
`;
