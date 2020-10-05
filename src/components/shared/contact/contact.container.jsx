import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import View from './contact.view';

const Contact = ({ localeId }) => {
  const {
    wpSharedBlock: {
      acf: original,
      translated: translations,
    },
  } = useStaticQuery(
    graphql`
      query {
        wpSharedBlock(slug: { eq: "contact" }) {
          acf {
            title
            description
            buttonText
            buttonLink {
              url
            }
          }
          translated {
            locale {
              id
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

  const data = localeId === 'de_DE' ? original : translations.find(({ locale: { id } }) => id === localeId).acf;

  const { title, description, buttonText, buttonLink } = data;

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
  localeId: PropTypes.oneOf(['de_DE', 'en_US']).isRequired,
};

export default Contact;
