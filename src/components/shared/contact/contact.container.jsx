import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import View from './contact.view';

const Contact = ({ locale }) => {
  const {
    allWpSharedBlock: { nodes },
  } = useStaticQuery(
    graphql`
      query {
        allWpSharedBlock(filter: { slug: { eq: "contact" } }) {
          nodes {
            language {
              slug
            }
            acf {
              title
              description
              buttonText
              buttonLink {
                url
              }
            }
          }
        }
      }
    `,
  );

  const data = nodes.find(({ language }) => language.slug === locale)?.acf;

  const {
    title,
    description,
    buttonText,
    buttonLink: { url: buttonUrl },
  } = data;

  return (
    <View
      title={title}
      description={description}
      buttonText={buttonText}
      buttonUrl={buttonUrl}
    />
  );
};

Contact.propTypes = {
  locale: PropTypes.oneOf(['de', 'en']).isRequired,
};

export default Contact;
