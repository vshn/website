require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteTitle: 'VSHN AG',
    siteDescription: 'VSHN AG is the leading Swiss partner for DevOps, Docker, Kubernetes, OpenShift and 24/7 Cloud Operations. VSHN helps software developers run their apps.',
    siteLanguage: 'en',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
        // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
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
          },
        ],
      },
    },
    'gatsby-alias-imports',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: '@import "./src/styles/variables.scss" , "./src/styles/mixins.scss";',
        cssLoaderOptions: {
          camelCase: true,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
