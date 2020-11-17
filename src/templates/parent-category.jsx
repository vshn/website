/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Hero from 'components/pages/parent-category/hero';
import Options from 'components/pages/parent-category/options';
import OtherOptions from 'components/pages/parent-category/other-options';
import Contact from 'components/shared/contact';
import MainLayout from 'layouts/main';

export default ({
  data: {
    wpPage: { seo, acf: data, title },
  },
  pageContext: { locale, pageUrls, menus, globalFields },
}) => (
  <MainLayout
    seo={seo}
    pageUrls={pageUrls}
    menus={menus}
    globalFields={globalFields}
  >
    <Hero title={title} {...data.parentCategoryHero} />
    <Options {...data.subPages} />
    {data.relatedItems.items && <OtherOptions {...data.relatedItems} />}
    <Contact locale={locale} />
  </MainLayout>
);

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      acf {
        parentCategoryHero {
          description
          subtitle
          image {
            localFile {
              publicURL
            }
          }
        }
        subPages {
          items {
            title
            link {
              url
            }
            icon {
              localFile {
                publicURL
              }
            }
          }
          itemFooterText
        }
        relatedItems {
          title
          items {
            link {
              url
              title
              target
            }
          }
        }
      }
      ...wpPageSeo
    }
  }
`;
