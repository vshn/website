/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import parse, { attributesToProps } from 'html-react-parser';
import React from 'react';

import Cards from 'components/lazy-blocks/cards';
import Content from 'components/lazy-blocks/content';
import Features from 'components/lazy-blocks/features';
import Hero from 'components/lazy-blocks/hero';
import ProminentText from 'components/lazy-blocks/prominent-text';
import MainLayout from 'layouts/main';

const Page = ({
  data: {
    wpPage: { title, content, seo },
  },
  pageContext: { locale, pageUrls, menus, globalFields },
}) => {
  // https://github.com/remarkablemark/html-react-parser#htmlparser2
  // The library does parsing on client side differently from server side
  // it results in having a need of passing htmlparser2 to adjust behavior
  // according to the client side behavior
  const reactedContent = parse(content, {
    htmlparser2: {
      lowerCaseAttributeNames: true,
    },
    replace: (domNode) => {
      const props = attributesToProps(domNode.attribs);
      if (domNode.type === 'tag') {
        switch (domNode.name) {
          case 'prominenttext':
            return <ProminentText text={props.text} />;
          case 'features': {
            const items = JSON.parse(props.items);
            return <Features items={items} columns={props.columns} />;
          }
          case 'cards': {
            const items = JSON.parse(props.items);
            return <Cards items={items} />;
          }
          default:
            return undefined;
        }
      }
    },
  });
  return (
    <MainLayout
      locale={locale}
      seo={seo}
      pageUrls={pageUrls}
      menus={menus}
      globalFields={globalFields}
    >
      <Hero title={title} />
      <Content>{reactedContent}</Content>
    </MainLayout>
  );
};

export default Page;

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
      ...wpPageSeo
    }
  }
`;
