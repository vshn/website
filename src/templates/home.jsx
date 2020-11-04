/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Advantages from 'components/pages/home/advantages';
import Awards from 'components/pages/home/awards';
import Hero from 'components/pages/home/hero';
import Jobs from 'components/pages/home/jobs';
import News from 'components/pages/home/news';
import Partners from 'components/pages/home/partners';
import Report from 'components/pages/home/report';
import Solutions from 'components/pages/home/solutions';
import Technologies from 'components/pages/home/technologies';
import Contact from 'components/shared/contact';
import MainLayout from 'layouts/main';

export default ({ data: { wpPage: { seo, acf: data } }, pageContext: { locale } }) => (
  <MainLayout seo={seo}>
    <Hero {...data.hero} />
    <Advantages {...data.advantages} />
    <Solutions {...data.solutions} />
    <News {...data.news} />
    <Technologies {...data.technologies} />
    <Partners {...data.partners} />
    <Jobs {...data.jobs} />
    <Report {...data.report} />
    <Awards {...data.awards} />
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
          items {
            title
            imageName
            footerText
            link {
              url
            }
          }
        }
        solutions {
          items {
            title
            description
            list {
              item
            }
            footerUrl {
              url
            }
          }
          itemFooterText
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
        technologies {
          title
          description
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
        report {
          title
          subtitle
          description
          buttonText
          buttonLink {
            url
          }
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 410) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
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
      }
      ...wpPageSeo
    }
  }
`;
