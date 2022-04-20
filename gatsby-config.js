require("dotenv").config();
// gatsby-plugin-feed doesn't support dynamic multiple feeds (https://github.com/gatsbyjs/gatsby/issues/12184)
// so there is need to list all categories to generate rss feeds
const BLOG_CATEGORIES_EN = [
  { title: "General", slug: "general" },
  { title: "Coronavirus 2020", slug: "coronavirus-2020" },
  { title: "Events", slug: "events" },
  { title: "Press releases", slug: "press-en" },
  { title: "Project Syn", slug: "project-syn" },
  { title: "Technical", slug: "tech-en" },
  { title: "VSHN.timer", slug: "vshn-timer" },
  { title: "VSHNinternal", slug: "interna-en" },
  { title: "APPUiO Cloud", slug: "appuio-cloud" },
];

const BLOG_CATEGORIES_DE = [
  { title: "Allgemein", slug: "allgemein" },
  { title: "Coronavirus 2020", slug: "coronavirus-2020" },
  { title: "Event", slug: "event" },
  { title: "Pressemitteilungen", slug: "press" },
  { title: "Project Syn", slug: "project-syn" },
  { title: "Technisches", slug: "tech" },
  { title: "VSHN.timer", slug: "vshn-timer" },
  { title: "VSHNintern", slug: "interna" },
  { title: "APPUiO Cloud", slug: "appuio-cloud" },
];
const getBlogFeedConfig = (locale) => ({
  serialize: ({ query: { site, allWpPost } }) =>
    allWpPost.edges.map((edge) => ({
      title: edge.node.title,
      description: edge.node.excerpt,
      url: site.siteMetadata.siteUrl + edge.node.uri,
      guid: site.siteMetadata.siteUrl + edge.node.uri,
      date: edge.node.dateGmt,
      categories: edge.node.categories.nodes.map(({ name }) => name),
      relDir: edge.relativeDirectory,
      custom_elements: [{ "content:encoded": edge.node.content }],
    })),
  query: `
   {
     allWpPost(
      filter: {language: {slug: {eq: "${locale}"}}} 
      sort: { fields: date, order: DESC }
      limit: 20
     )  {
       edges {
         node {
           dateGmt
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
  output: `/${locale === "de" ? "" : "en-"}rss.xml`,
  title: "VSHN - Blog",
});
const getCategoryFeedsConfig = (categories, locale) =>
  categories.map(({ title, slug }) => ({
    serialize: ({ query: { site, allWpPost } }) =>
      allWpPost.edges.map((edge) => ({
        title: edge.node.title,
        description: edge.node.excerpt,
        url: site.siteMetadata.siteUrl + edge.node.uri,
        guid: site.siteMetadata.siteUrl + edge.node.uri,
        date: edge.node.dateGmt,
        categories: edge.node.categories.nodes.map(({ name }) => name),
        relDir: edge.relativeDirectory,
        custom_elements: [{ "content:encoded": edge.node.content }],
      })),
    query: `
      {
        allWpPost(
          filter: {language: {slug: {eq: "${locale}"}}, categories: {nodes: {elemMatch: {slug: {eq: "${slug}"}}}}}
          sort: { fields: date, order: DESC }
          limit: 10
        )  {
          edges {
            node {
              dateGmt
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
    output: `/${slug}-rss.xml`,
    title: `VSHN ${title} - Blog`,
  }));

const enBlogFeed = getBlogFeedConfig("en");
const deBlogFeed = getBlogFeedConfig("de");
const enCategoryFeed = getCategoryFeedsConfig(BLOG_CATEGORIES_EN, "en");
const deCategoryFeed = getCategoryFeedsConfig(BLOG_CATEGORIES_DE, "de");
const feedsConfig = [];
const rssFeedsConfig = feedsConfig.concat(
  enBlogFeed,
  deBlogFeed,
  enCategoryFeed,
  deCategoryFeed
);

module.exports = {
  siteMetadata: {
    siteUrl: process.env.GATSBY_DEFAULT_SITE_URL,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-gatsby-cloud",
      options: {
        headers: {
          "/.well-known/matrix/client": ["Access-Control-Allow-Origin: *"],
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaultQuality: 85,
        defaults: {
          placeholder: "none",
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "VSHN AG",
        short_name: "VSHN AG",
        start_url: "/",
        background_color: "#4cc3ff",
        theme_color: "#4cc3ff",
        display: "minimal-ui",
        icon: "src/images/favicon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-feed",
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
      resolve: "gatsby-plugin-svgr-svgo",
      options: {
        inlineSvgOptions: [
          {
            test: /\.inline.svg$/,
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
                "prefixIds",
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
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
                "prefixIds",
              ],
            },
            urlLoaderOptions: {
              limit: 512,
            },
          },
        ],
      },
    },
    "gatsby-alias-imports",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        additionalData:
          '@import "./src/styles/variables.scss" , "./src/styles/mixins.scss";',
        cssLoaderOptions: {
          modules: {
            namedExport: false,
            exportLocalsConvention: "camelCase",
          },
        },
      },
    },
    {
      resolve: "gatsby-source-wordpress",
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
          generateWebpImages: true,
          fallbackImageMaxWidth: 1920,
          imageQuality: 80,
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === "development"
                ? Number(process.env.WP_POSTS_LIMIT)
                : undefined,
          },
          MediaItem: {
            createFileNodes: false,
          },
        },
        develop: {
          nodeUpdateInterval: process.env.WP_NODE_UPDATE_INTERVAL || 5000,
          hardCacheMediaFiles: process.env.WP_HARD_CACHE_MEDIA === "true",
          hardCacheData: process.env.WP_HARD_CACHE_DATA === "true",
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5FC2LLB",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
