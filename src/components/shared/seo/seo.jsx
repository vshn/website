/* eslint-disable react/prop-types */
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import createMetaImagePath from 'utils/create-meta-image-path';

const SEO = (props) => {
  const {
    title,
    metaDesc,
    metaKeywords,
    opengraphDescription,
    opengraphTitle,
    opengraphImage,
    opengraphUrl,
    twitterTitle,
    twitterDescription,
    twitterImage,
    canonical,
  } = props;

  const {
    wp: { generalSettings: settings },
    site: {
      siteMetadata: { siteUrl },
    },
  } = useStaticQuery(graphql`
    query {
      wp {
        generalSettings {
          language
        }
      }
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  return (
    <Helmet
      title={title}
      htmlAttributes={{
        lang: settings.language,
        prefix: 'og: http://ogp.me/ns#',
      }}
    >
      {/* General */}
      <meta name="description" content={metaDesc} />
      {metaKeywords && <meta name="keywords" content={metaKeywords} />}
      {/* Open Graph */}
      <meta property="og:title" content={opengraphTitle} />
      <meta property="og:description" content={opengraphDescription} />
      <meta property="og:type" content="website" />
      {opengraphImage && (
        <meta property="og:image" content={createMetaImagePath(opengraphImage, siteUrl)} />
      )}
      {opengraphUrl.startsWith(siteUrl) && <meta property="og:url" content={opengraphUrl} />}
      {/* Twitter */}
      <meta name="twitter:title" content={twitterTitle || title} />
      <meta name="twitter:description" content={twitterDescription || metaDesc} />
      {(twitterImage || opengraphImage) && (
        <meta
          property="twitter:image"
          content={createMetaImagePath(twitterImage || opengraphImage, siteUrl)}
        />
      )}
      {canonical.startsWith(siteUrl) && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};

export default SEO;
