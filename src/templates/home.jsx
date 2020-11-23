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
import SolutionsProducts from 'components/pages/home/solutions-products';
import Technologies from 'components/pages/home/technologies';
import Contact from 'components/shared/contact';
import MainLayout from 'layouts/main';

export default ({
  data: {
    wpPage: { seo, acf: data },
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
    <Hero {...data.hero} />
    <Advantages {...data.advantages} />
    <SolutionsProducts {...data.solutionsProducts} />
    <News {...data.news} {...allWpPost} />
    <Technologies {...data.technologies} />
    <Partners {...data.partners} />
    <Jobs {...data.jobs} />
    <Report {...data.report} />
    <Awards {...data.awards} />
    <Contact locale={locale} />
  </MainLayout>
);

export const query = graphql`
  query($id: String!, $locale: String!) {
    wpPage(id: { eq: $id }) {
      acf {
        hero {
          title
          description
          buttonLink {
            url
            title
          }
        }
        advantages {
          title
          items {
            title
            imageName
            link {
              url
              title
            }
          }
        }
        solutionsProducts {
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
          itemFooterText
        }
        technologies {
          title
          description
        }
        partners {
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
          itemButtonText
        }
        jobs {
          title
          description
          buttonLink {
            url
            title
          }
        }
        report {
          title
          description
          buttonLink {
            url
            title
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
    allWpPost(
      filter: {language: {slug: {eq: $locale}}}, 
      limit: 9, 
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