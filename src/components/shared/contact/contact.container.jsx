import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import View from './contact.view';

const Contact = ({ locale, defaultLocale }) => {
  const {
    wpSharedBlock: {
      acf: original,
      translations,
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
          translations {
            language {
              locale
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

  const data = locale === defaultLocale ? original : translations.find(({ language }) => language.locale === locale)?.acf;

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
  locale: PropTypes.oneOf(['de_DE', 'en_US']).isRequired,
  defaultLocale: PropTypes.oneOf(['de_DE', 'en_US']).isRequired,
};

export default Contact;
