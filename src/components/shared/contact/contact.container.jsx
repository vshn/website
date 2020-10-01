import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import View from './contact.view';

const Contact = ({ language }) => {
  const {
    wpSharedBlock: {
      acf: data,
    },
  } = useStaticQuery(
    graphql`
      query {
        wpSharedBlock(slug: { eq: "contact" }) {
          acf {
            de {
              title
              description
              buttonText
              buttonLink {
                url
              }
            }
            en {
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

  const { title, description, buttonText, buttonLink } = data[language];

  return (
    <View
      title={title}
      description={description}
      buttonText={buttonText}
      buttonUrl={buttonLink.url}
    />
  );
};

Contact.propTypes = {
  language: PropTypes.oneOf(['de', 'en']).isRequired,
};

export default Contact;
