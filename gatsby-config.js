require('dotenv')
  .config();

const BLOG_CATEGORIES_EN = ['general', 'coronavirus-2020', 'events', 'press-en', 'project-syn', 'tech-en', 'vshn-timer', 'interna-en'];
const BLOG_CATEGORIES_DE = ['allgemein', 'coronavirus-2020', 'event', 'press', 'project-syn', 'tech', 'vshn-timer', 'interna'];
const blogFeedConfig = {
  serialize: ({ query: { site, allWpPost } }) => allWpPost.edges.map((edge) => ({
    title: edge.node.title,
    description: edge.node.excerpt,
    url: site.siteMetadata.siteUrl + edge.node.uri,
    guid: site.siteMetadata.siteUrl + edge.node.uri,
    categories: edge.node.categories.nodes.map(({ name }) => name),
    relDir: edge.relativeDirectory,
    // custom_elements: [{ 'content:encoded': edge.node.excerpt }],
  })),
  query: `
   {
     allWpPost(
       sort: { fields: date, order: DESC }
     )  {
       edges {
         node {
           excerpt
           title
           uri
           content
           categories {
             nodes {
               name
             }
           }
         }
       }
     }
   }
 `,
  output: '/rss.xml',
  title: 'VSHN - Blog',
};
const getCategoryFeedsConfig = (categories, locale) => (
  categories.map((category) => ({
    serialize: ({ query: { site, allWpPost } }) => allWpPost.edges.map((edge) => ({
      title: edge.node.title,
      description: edge.node.excerpt,
      url: site.siteMetadata.siteUrl + edge.node.uri,
      guid: site.siteMetadata.siteUrl + edge.node.uri,
      language: locale,
      categories: edge.node.categories.nodes.map(({ name }) => name),
      relDir: edge.relativeDirectory,
      custom_elements: [{ 'content:encoded': edge.node.content }],
    })),
    query: `
      {
        allWpPost(
          filter: {language: {slug: {eq: "${locale}"}}, categories: {nodes: {elemMatch: {slug: {eq: "${category}"}}}}}
          sort: { fields: date, order: DESC }
          limit: 10
        )  {
          edges {
            node {
              excerpt
              title
              uri
              content
              categories {
                nodes {
                  name
                }
              }
            }
          }
        }
      }
    `,
    output: `/${category}-rss.xml`,
    match: '^/blog/',
    title: 'VSHN - Blog',
  }))
);
const enCategoryFeed = getCategoryFeedsConfig(BLOG_CATEGORIES_EN, 'en');
const deCategoryFeed = getCategoryFeedsConfig(BLOG_CATEGORIES_DE, 'de');
const feedsConfig = [];
feedsConfig.push(blogFeedConfig);
const rssFeedsConfig = feedsConfig.concat(enCategoryFeed, deCategoryFeed);

module.exports = {
  siteMetadata: {
    siteUrl: process.env.GATSBY_DEFAULT_SITE_URL,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
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
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: rssFeedsConfig,
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
        additionalData:
          '@import "./src/styles/variables.scss" , "./src/styles/mixins.scss";',
        cssLoaderOptions: {
          modules: {
            namedExport: false,
            exportLocalsConvention: 'camelCase',
          },
        },
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        schema: {
          timeout: 60000,
        },
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
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-5FC2LLB',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
