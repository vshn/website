/* eslint-disable react/prop-types */
import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({
  title, description,
}) => {
  const {
    site: {
      siteMetadata: {
        siteTitle,
        siteDescription,
        siteLanguage,
      },
    },
  } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          siteTitle
          siteDescription
          siteLanguage
        }
      }
    }
  `);

  const currentTitle = title || siteTitle;
  const currentDescription = description || siteDescription;

  return (
    <Helmet
      title={currentTitle}
      htmlAttributes={{
        lang: siteLanguage,
        prefix: 'og: http://ogp.me/ns#',
      }}
    >
      {/* General */}
      <meta name="description" content={currentDescription} />
      {/* Open Graph */}
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDescription} />
      {/* Twitter */}
      <meta name="twitter:title" content={currentTitle} />
      <meta name="twitter:description" content={currentDescription} />
    </Helmet>
  );
};

export default SEO;
