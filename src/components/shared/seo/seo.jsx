/* eslint-disable react/prop-types */
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import createMetaImagePath from 'utils/create-meta-image-path';
import unescapeHTML from 'utils/unescape-html-entities';

const SEO = (props) => {
  const {
    title,
    metaDesc,
    metaKeywords,
    metaRobotsNoindex,
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
  const unescapedTitle = unescapeHTML(title);
  const unescapedDescription = unescapeHTML(metaDesc);
  const isRobotsNoindexPage = metaRobotsNoindex === 'noindex';
  return (
    <Helmet
      title={unescapedTitle}
      htmlAttributes={{
        lang: settings.language,
        prefix: 'og: http://ogp.me/ns#',
      }}
    >
      {/* General */}
      <meta name="description" content={unescapedDescription} />
      {metaKeywords && <meta name="keywords" content={metaKeywords} />}
      {isRobotsNoindexPage && <meta name="robots" content="noindex" />}
      {/* Open Graph */}
      <meta property="og:title" content={unescapeHTML(opengraphTitle)} />
      <meta property="og:description" content={unescapeHTML(opengraphDescription)} />
      <meta property="og:type" content="website" />
      {opengraphImage && (
        <meta property="og:image" content={createMetaImagePath(opengraphImage, siteUrl)} />
      )}
      {opengraphUrl.startsWith(siteUrl) && <meta property="og:url" content={opengraphUrl} />}
      {/* Twitter */}
      <meta name="twitter:title" content={twitterTitle || unescapedTitle} />
      <meta name="twitter:description" content={twitterDescription || unescapedDescription} />
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
