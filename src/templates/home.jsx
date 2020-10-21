/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Advantages from 'components/pages/home/advantages';
import Awards from 'components/pages/home/awards';
import Hero from 'components/pages/home/hero';
import Jobs from 'components/pages/home/jobs';
import News from 'components/pages/home/news';
import Partners from 'components/pages/home/partners';
import Products from 'components/pages/home/products';
import Report from 'components/pages/home/report';
import Technologies from 'components/pages/home/technologies';
import Contact from 'components/shared/contact';
import MainLayout from 'layouts/main';

export default ({ data: { wpPage: { seo, acf: data } }, pageContext: { locale } }) => {
  console.log(data);
  return (
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
};

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
            imageName
            title
            description
            link {
              url
            }
          }
          itemFooterText
        }
        technologies {
          title
          subtitle
          description
          buttonText
          buttonLink {
            url
          }
        }
        partners {
          title
          items {
            photo {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 180) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
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
                  shortDescription
                }
              }
            }
          }
          itemFooterText
        }
        report {
          title
          subtitle
          description
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
