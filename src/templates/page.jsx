/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import parse, { attributesToProps } from 'html-react-parser';
import React from 'react';

import Cards from 'components/lazy-blocks/cards';
import Content from 'components/lazy-blocks/content';
import Features from 'components/lazy-blocks/features';
import Hero from 'components/lazy-blocks/hero';
import ProminentText from 'components/lazy-blocks/prominent-text';
import RelativeLink from 'components/lazy-blocks/relative-link';
import Contact from 'components/shared/contact';
import useHubspotForm from 'hooks/use-hubspot-form';
import MainLayout from 'layouts/main';

import 'components/lazy-blocks/hubspot-form/hubspot-form.scss';
import 'components/lazy-blocks/subpage-cards/subpage-cards.scss';

const Page = ({
  data: {
    wpPage: { title, content, acf: data, seo },
  },
  pageContext: { locale, pageUrls, menus, globalFields },
}) => {
  useHubspotForm('hubspot-form');
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
          case 'relativelink': {
            const icon = JSON.parse(props.icon);
            return (
              <RelativeLink
                icon={icon}
                text={props.text}
                buttonLink={props.buttonlink}
                buttonText={props.buttontext}
              />
            );
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
      {data?.enableContactUs && <Contact locale={locale} />}
    </MainLayout>
  );
};

export default Page;

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
      acf {
        enableContactUs
      }
      ...wpPageSeo
    }
  }
`;
