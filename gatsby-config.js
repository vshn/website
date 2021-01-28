require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: process.env.GATSBY_DEFAULT_SITE_URL,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaultQuality: 85,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'VSHN AG',
        short_name: 'VSHN AG',
        start_url: '/',
        background_color: '#4cc3ff',
        theme_color: '#4cc3ff',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-svgr-svgo',
      options: {
        inlineSvgOptions: [
          {
            test: /\.inline.svg$/,
            svgoConfig: {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          },
        ],
        urlSvgOptions: [
          {
            test: /\.svg$/,
            svgoConfig: {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
            urlLoaderOptions: {
              limit: 512,
            },
          },
        ],
      },
    },
    'gatsby-alias-imports',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data:
          '@import "./src/styles/variables.scss" , "./src/styles/mixins.scss";',
        cssLoaderOptions: {
          camelCase: true,
        },
      },
    },
    {
      resolve: 'gatsby-source-wordpress-experimental',
      options: {
        url: process.env.WP_GRAPHQL_URL,
        auth: {
          htaccess: {
            username: process.env.WP_HTACCESS_USERNAME,
            password: process.env.WP_HTACCESS_PASSWORD,
          },
        },
        html: {
          fallbackImageMaxWidth: 1920,
          imageQuality: 80,
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === 'development'
                ? Number(process.env.WP_POSTS_LIMIT)
                : undefined,
          },
          MediaItem: {
            localFile: {
              requestConcurrency: process.env.WP_MEDIA_REQUEST_CONCURRENCY
                ? Number(process.env.WP_MEDIA_REQUEST_CONCURRENCY)
                : 100,
            },
          },
        },
        develop: {
          nodeUpdateInterval: process.env.WP_NODE_UPDATE_INTERVAL || 5000,
          hardCacheMediaFiles: process.env.WP_HARD_CACHE_MEDIA === 'true',
          hardCacheData: process.env.WP_HARD_CACHE_DATA === 'true',
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
