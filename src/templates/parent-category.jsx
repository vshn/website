/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Hero from 'components/pages/parent-category/hero';
import SubPages from 'components/pages/parent-category/sub-pages';
import Contact from 'components/shared/contact';
import RelatedItems from 'components/shared/related-items';
import MainLayout from 'layouts/main';

const ParentCategory = ({
  data: {
    wpPage: { seo, acf: data, title },
  },
  pageContext: { locale, pageUrls, menus, globalFields },
}) => (
  <MainLayout
    locale={locale}
    seo={seo}
    pageUrls={pageUrls}
    menus={menus}
    globalFields={globalFields}
  >
    <Hero title={title} {...data.parentCategoryHero} />
    <SubPages {...data.subPages} />
    {data.relatedItems.items && <RelatedItems {...data.relatedItems} />}
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

export default ParentCategory;
