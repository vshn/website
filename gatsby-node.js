const fs = require("fs");
const path = require("path");

const slash = require("slash");

const redirects = require("./redirects.json");
const filterNonRootItems = require("./src/utils/filter-non-root-items");

/* Constants */
const DEFAULT_LOCALE = "de";
const SUPPORTED_LOCALES = ["en", "de"];
const SUPPORTED_MENU_TYPES = ["main", "top", "mobile", "footer"];
const POSTS_PER_PAGE = 20;

/* Local helper fns */

// removes all the spaces from a string
// stripSpaces(string: String) -> String
const stripSpaces = (string) => string.replace(/\s+/g, " ");

// fetches global fields
// getGlobalFields() -> Object: {socialLinks, footerMeta}
const getGlobalFields = async (graphql) => {
  const {
    data: {
      wp: {
        globalFields: { socialLinksAcf, footerMetaAcf },
      },
    },
  } = await graphql(`
    {
      wp {
        globalFields {
          socialLinksAcf {
            mastodonLink
            twitterLink
            linkedinLink
            githubLink
            gitlabLink
            facebookLink
            instagramLink
            youtubeLink
          }
          footerMetaAcf {
            copyright
            praiseBody
          }
        }
      }
    }
  `);
  return {
    socialLinks: socialLinksAcf,
    footerMeta: footerMetaAcf,
  };
};

// fetches all vshn menus for both locales
// getAllMenusByLocale(graphql: GatsbyGraphQlInstance) -> Object
const getAllMenusByLocale = async (graphql) => {
  const {
    data: {
      mainMenuEn,
      mainMenuDe,
      topMenuEn,
      topMenuDe,
      mobileMenuEn,
      mobileMenuDe,
      footerMenuEn,
      footerMenuDe,
    },
  } = await graphql(`
    {
      mainMenuEn: wpMenu(slug: { eq: "main-menu-english" }) {
        menuItems {
          nodes {
            label
            path
            parentId
            childItems {
              nodes {
                label
                path
                childItems {
                  nodes {
                    label
                    path
                  }
                }
              }
            }
          }
        }
      }
      topMenuEn: wpMenu(slug: { eq: "top-menu-english" }) {
        menuItems {
          nodes {
            label
            path
            target
          }
        }
      }
      mobileMenuEn: wpMenu(slug: { eq: "mobile-menu-english" }) {
        menuItems {
          nodes {
            label
            path
            target
          }
        }
      }
      footerMenuEn: wpMenu(slug: { eq: "footer-menu-english" }) {
        menuItems {
          nodes {
            label
            path
          }
        }
      }
      mainMenuDe: wpMenu(slug: { eq: "main-menu-deutsch" }) {
        menuItems {
          nodes {
            label
            path
            parentId
            childItems {
              nodes {
                label
                path
                childItems {
                  nodes {
                    label
                    path
                  }
                }
              }
            }
          }
        }
      }
      topMenuDe: wpMenu(slug: { eq: "top-menu-deutsch" }) {
        menuItems {
          nodes {
            label
            path
            target
          }
        }
      }
      mobileMenuDe: wpMenu(slug: { eq: "mobile-menu-deutsch" }) {
        menuItems {
          nodes {
            label
            path
            target
          }
        }
      }
      footerMenuDe: wpMenu(slug: { eq: "footer-menu-deutsch" }) {
        menuItems {
          nodes {
            label
            path
          }
        }
      }
    }
  `);

  return {
    en: {
      mainMenu: mainMenuEn,
      topMenu: topMenuEn,
      mobileMenu: mobileMenuEn,
      footerMenu: footerMenuEn,
    },
    de: {
      mainMenu: mainMenuDe,
      topMenu: topMenuDe,
      mobileMenu: mobileMenuDe,
      footerMenu: footerMenuDe,
    },
  };
};

// takes current locale, url of a being generated page and a translations
// and return an object with locales of type { en: String, de: String}
// getUrlsForLocales(locale: String, url: String,
// translations: Object[{language: {locale: oneOf(SUPPORTED_LOCALES)}}]) -> Object
function getUrlsForLocales(locale, url, translations, index = null) {
  const urls = {};
  const isActiveIndex = index && index >= 1;
  urls[locale] = `${url}${isActiveIndex ? index + 1 : ""}`;

  const remainingLocales = SUPPORTED_LOCALES.filter((item) => item !== locale);
  remainingLocales.forEach((remainingLocale) => {
    const matchedTranslation = translations.find(
      (translation) => translation.language.locale === remainingLocale
    );
    if (matchedTranslation) {
      urls[remainingLocale] = `${matchedTranslation.uri}${
        isActiveIndex ? index + 1 : ""
      }`;
    } else {
      urls[remainingLocale] =
        remainingLocale === DEFAULT_LOCALE ? "/" : `/${remainingLocale}`;
    }
  });
  return urls;
}

// takes an url of a being generated page
// and makes a dictionary based on SUPPORTED_LOCALES of type
// { [locale]: url }
// buildUrlsForLocales(url: String!) -> Object<{[locale]: url}>
const buildUrlsForLocales = (url) => {
  // urls dictionary
  const urls = {};
  // get default url
  const stripLocaleRegex = new RegExp(
    `^/?(${SUPPORTED_LOCALES.join("|")})?(/.*?)$`
  );
  const defaultUrl = url.replace(stripLocaleRegex, "$2");
  // assign default url to default locale
  urls[DEFAULT_LOCALE] = defaultUrl;

  // build every other localized url
  SUPPORTED_LOCALES.filter((item) => item !== DEFAULT_LOCALE).forEach(
    (remainingLocale) => {
      urls[remainingLocale] = `/${remainingLocale}${defaultUrl}`;
    }
  );
  return urls;
};

/* Main logic */

// Create Redirects
// this function is not working at the moment, it is here in case the redirects will be generated using Yoast SEO Pro plugin on wordpress
async function createRedirects({ graphql, actions }) {
  const { createRedirect } = actions;
  const result = await graphql(`
    {
      wp {
        seo {
          redirects {
            origin
            target
            type
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }

  const { redirects } = result.data.wp.seo;
  // Add slash at the beginning of the string if not present to adjust it for Netlify's format
  // eg. blog/the-ultimate-guide-to-buying-intercom-systems-for-offices -> /blog/the-ultimate-guide-to-buying-intercom-systems-for-offices

  const formatPath = (path) =>
    /^\/|^http|^https|^www/.test(path) ? path : `/${path}`;
  redirects.forEach(({ origin, target, type }) => {
    createRedirect({
      fromPath: formatPath(origin),
      toPath: formatPath(target),
      statusCode: parseInt(type, 10),
      force: true,
    });
  });
}

// Create Pages
async function createPages({
  graphql,
  actions,
  reporter,
  getMenus,
  globalFields,
}) {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allWpPage(filter: { template: { templateName: { ne: "Blog" } } }) {
        pages: nodes {
          id
          uri
          language {
            locale: slug
          }
          translations {
            language {
              locale: slug
            }
            uri
          }
          template {
            templateName
          }
        }
      }
      allWpEvent(sort: { order: DESC, fields: acf___schedule___startDate }) {
        events: nodes {
          id
          url: uri
          language {
            locale: slug
          }
          title
          acf {
            link
            logo {
              mediaItemUrl
              gatsbyImage(width: 600)
            }
            description
            schedule {
              startDate
              time
              endDate
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }
  const {
    data: {
      allWpPage: { pages },
      allWpEvent: { events },
    },
  } = result;

  pages.forEach(
    ({
      id,
      uri,
      language: { locale },
      translations,
      template: { templateName },
    }) => {
      const templateNamePath = templateName.toLowerCase().replace(/\s/g, "-");
      const isDefaultTemplate = templateName === "Default";

      const templatePath = path.resolve(
        `./src/templates/${
          isDefaultTemplate ? "content-page" : templateNamePath
        }.jsx`
      );

      const filteredEventsByLocale = events.filter(
        (event) => event.language.locale === locale
      );
      const upcomingEvents = filteredEventsByLocale.filter(
        (event) => new Date(event.acf.schedule.startDate) >= new Date()
      );

      const context = {
        id,
        locale,
        menus: getMenus(locale),
        globalFields,
        pageUrls: getUrlsForLocales(locale, uri, translations),
        upcomingEvents,
      };

      if (fs.existsSync(templatePath)) {
        createPage({
          path: uri,
          component: slash(templatePath),
          context,
        });
      } else {
        reporter.error(`Template "${templateName}" was not found`);
      }
    }
  );
}

const createBlogPages = async ({
  graphql,
  actions,
  getMenus,
  globalFields,
}) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      blog: allWpPage(filter: { template: { templateName: { eq: "Blog" } } }) {
        nodes {
          id
          uri
          language {
            locale: slug
          }
          translations {
            language {
              locale: slug
            }
            uri
          }
          acf {
            featuredPost {
              post {
                ... on WpPost {
                  id
                }
              }
            }
          }
        }
      }
      posts: allWpPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            id
            categories {
              nodes {
                id
                uri
                language {
                  locale: slug
                }
                translations {
                  language {
                    locale: slug
                  }
                  uri
                }
              }
            }
          }
        }
      }
      categories: allWpCategory(
        filter: { slug: { nin: ["all-post", "uncategorized"] } }
        sort: { order: ASC, fields: name }
      ) {
        nodes {
          id
          uri
          slug
          name
          language {
            locale: slug
          }
          translations {
            language {
              locale: slug
            }
            uri
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }

  const {
    data: { blog, posts, categories },
  } = result;

  const blogPages = blog.nodes;

  const postPages = posts.edges;

  // make sure category list includes no duplicates
  const postCategories = categories.nodes;

  const template = path.resolve("./src/templates/blog.jsx");

  blogPages.forEach((blogPage) => {
    const context = {
      id: blogPage.id,
      featuredPostId: blogPage.acf.featuredPost.post.id,
      menus: getMenus(blogPage.language.locale),
      globalFields,
      locale: blogPage.language.locale,
      categories: postCategories.filter(
        ({ language: { locale } }) => locale === blogPage.language.locale
      ),
    };

    // Omit feature post since it is not included in posts list
    const localizedPostsWithoutFeaturedPost = postPages
      .filter((post) => post.node.id !== blogPage.acf.featuredPost.post.id)
      // omit posts whose locale doesn't match current blogPage's one
      .filter(
        (post) =>
          post.node.categories.nodes[0].language.locale ===
          blogPage.language.locale
      );

    const pageCount = Math.ceil(
      localizedPostsWithoutFeaturedPost.length / POSTS_PER_PAGE
    );

    const makePath = (i) =>
      i === 0 ? blogPage.uri : `${blogPage.uri}${i + 1}`;

    Array.from({ length: pageCount }).forEach((_, i) => {
      createPage({
        path: makePath(i),
        component: slash(template),
        context: {
          ...context,
          limit: POSTS_PER_PAGE,
          skip: i * POSTS_PER_PAGE,
          pageCount,
          currentPageIndex: i,
          pageUrls: buildUrlsForLocales(makePath(i)),
        },
      });
    });

    postCategories
      // filter categories based on blogPage locale
      .filter(
        (category) => category.language.locale === blogPage.language.locale
      )
      .forEach((category) => {
        // then count posts based on category id
        const postsForCategory = localizedPostsWithoutFeaturedPost.filter(
          (post) => {
            const postCategoryId = post.node.categories.nodes[0].id;
            return postCategoryId === category.id;
          }
        );

        const pageCount = Math.ceil(postsForCategory.length / POSTS_PER_PAGE);

        const makePath = (i) =>
          i === 0
            ? `${blogPage.uri}${category.slug}`
            : `${blogPage.uri}${category.slug}/${i + 1}`;

        // create paginated blog pages
        Array.from({ length: pageCount || 1 }).forEach((_, i) => {
          createPage({
            path: makePath(i),
            component: slash(template),
            context: {
              ...context,
              limit: POSTS_PER_PAGE,
              skip: i * POSTS_PER_PAGE,
              pageCount,
              currentPageIndex: i,
              categoryId: category.id,
              currentCategory: category.slug,
              pageUrls: getUrlsForLocales(
                category.language.locale,
                category.uri,
                category.translations,
                i
              ),
            },
          });
        });
      });
  });
};

// Create Posts
async function createPosts({
  graphql,
  actions,
  reporter,
  getMenus,
  globalFields,
}) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allWpPost {
        nodes {
          id
          content
          uri
          language {
            locale: slug
          }
          translations {
            language {
              locale: slug
            }
            uri
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }
  const posts = result.data.allWpPost.nodes;

  posts.forEach(({ id, content, uri, language: { locale }, translations }) => {
    const templatePath = path.resolve("./src/templates/blog-post.jsx");

    const context = {
      id,
      locale,
      menus: getMenus(locale),
      globalFields,
      pageUrls: getUrlsForLocales(locale, uri, translations),
    };

    if (content) {
      context.content = stripSpaces(content);
    }

    if (fs.existsSync(templatePath)) {
      createPage({
        path: uri,
        component: slash(templatePath),
        context,
      });
    } else {
      reporter.error("Template Blog Post was not found");
    }
  });
}

// Create Partners
async function createPartners({
  graphql,
  actions,
  reporter,
  getMenus,
  globalFields,
}) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allWpPartner {
        nodes {
          id
          content
          uri
          language {
            locale: slug
          }
          translations {
            language {
              locale: slug
            }
            uri
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }
  const partners = result.data.allWpPartner.nodes;

  partners.forEach(
    ({ id, content, uri, language: { locale }, translations }) => {
      const templatePath = path.resolve("./src/templates/partner.jsx");

      const context = {
        id,
        locale,
        menus: getMenus(locale),
        globalFields,
        pageUrls: getUrlsForLocales(locale, uri, translations),
      };

      if (content) {
        context.content = stripSpaces(content);
      }

      if (fs.existsSync(templatePath)) {
        createPage({
          path: uri,
          component: slash(templatePath),
          context,
        });
      } else {
        reporter.error("Template Partner was not found");
      }
    }
  );
}

// Create Success Stories
async function createSuccessStories({
  graphql,
  actions,
  reporter,
  getMenus,
  globalFields,
}) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allWpSuccessStory {
        nodes {
          id
          content
          uri
          language {
            locale: slug
          }
          translations {
            language {
              locale: slug
            }
            uri
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }
  const successStories = result.data.allWpSuccessStory.nodes;

  successStories.forEach(
    ({ id, content, uri, language: { locale }, translations }) => {
      const templatePath = path.resolve("./src/templates/success-story.jsx");

      const context = {
        id,
        locale,
        menus: getMenus(locale),
        globalFields,
        pageUrls: getUrlsForLocales(locale, uri, translations),
      };

      if (content) {
        context.content = stripSpaces(content);
      }

      if (fs.existsSync(templatePath)) {
        createPage({
          path: uri,
          component: slash(templatePath),
          context,
        });
      } else {
        reporter.error("Template Success Story was not found");
      }
    }
  );
}

// Create Event Pages
const createEventPages = async ({
  graphql,
  actions,
  getMenus,
  globalFields,
}) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allWpPage(filter: { template: { templateName: { eq: "Events" } } }) {
        nodes {
          id
          uri
          title
          language {
            locale: slug
          }
          translations {
            language {
              locale: slug
            }
            uri
          }
          acf {
            upcomingEvents {
              title
            }
          }
          seo {
            title
            metaDesc
            metaKeywords
            opengraphDescription
            opengraphTitle
            opengraphUrl
            opengraphImage {
              localFile {
                childImageSharp {
                  fixed(toFormat: JPG, width: 1200, height: 630) {
                    src
                  }
                }
              }
            }
            canonical
            twitterTitle
            twitterDescription
            twitterImage {
              localFile {
                childImageSharp {
                  fixed(toFormat: JPG, width: 1024, height: 512) {
                    src
                  }
                }
              }
            }
          }
        }
      }
      allWpEvent(sort: { order: DESC, fields: acf___schedule___startDate }) {
        nodes {
          id
          url: uri
          language {
            locale: slug
          }
          title
          acf {
            link
            logo {
              mediaItemUrl
              gatsbyImage(width: 600)
            }
            description
            schedule {
              startDate
              time
              endDate
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }

  const {
    data: {
      allWpPage: { nodes: eventsPages },
      allWpEvent: { nodes: events },
    },
  } = result;

  const template = path.resolve("./src/templates/events.jsx");

  eventsPages.forEach((eventsPage) => {
    const eventsGroupedByYears = {};
    const currentYear = new Date().getFullYear();
    events
      .filter((event) => event.language.locale === eventsPage.language.locale)
      .forEach((event) => {
        const date = event.acf.schedule.startDate;
        const year = new Date(date).getFullYear();
        const eventsByYear = eventsGroupedByYears[year] || [];
        eventsByYear.push(event);
        eventsGroupedByYears[year] = eventsByYear;
      });
    // Create "events/{year}" pages
    const availableYears = Object.keys(eventsGroupedByYears)
      .filter((key) => parseInt(key, 10) <= currentYear)
      .reverse();
    availableYears.forEach((year, index) => {
      const path =
        index === 0 ? `${eventsPage.uri}` : `${eventsPage.uri}${year}/`;

      const context = {
        id: eventsPage.id,
        menus: getMenus(eventsPage.language.locale),
        globalFields,
        locale: eventsPage.language.locale,
        eventsGroupedByYears,
        availableYears,
        data: eventsPage,
        pageYear: year,
      };

      createPage({
        path,
        component: slash(template),
        context: {
          ...context,
          pageUrls: buildUrlsForLocales(path),
        },
      });
    });
  });
};

/* Note: this is a stub, should be set properly after
// there is a 404 page in WP
*/

const createNotFound = ({ actions, getMenus, globalFields }) => {
  const { createPage } = actions;

  createPage({
    path: "/404",
    component: slash(path.resolve("./src/templates/404.jsx")),
    context: {
      menus: getMenus("de"),
      locale: "de",
      globalFields,
      pageUrls: getUrlsForLocales("de", "/404", [
        {
          language: { locale: "de" },
          uri: "/404",
        },
      ]),
    },
  });
};

exports.createPages = async (args) => {
  // since all the pages have the exact same menu,
  // query it early and pass to page generators
  const { createRedirect } = args.actions;
  const allMenus = await getAllMenusByLocale(args.graphql);

  // a little local helper to avoid copypasting chains
  // getMenus({
  //  type: oneOf(SUPPORTED_MENU_TYPES),
  //  locale: oneOf(SUPPORTED_LOCALES)
  // }) -> Array<MenuItem>
  const getMenus = (locale = DEFAULT_LOCALE) => {
    const menuLocale = SUPPORTED_LOCALES.includes(locale)
      ? locale
      : DEFAULT_LOCALE;

    const menus = {};

    SUPPORTED_MENU_TYPES.forEach((type) => {
      const items = allMenus[menuLocale][`${type}Menu`].menuItems.nodes;
      menus[`${type}MenuItems`] =
        type === "main" ? filterNonRootItems(items) : items;
    });
    // filter non top level links if type of menu is main
    return menus;
  };

  redirects.forEach((redirect) =>
    createRedirect({
      fromPath: redirect.fromPath,
      toPath: redirect.toPath,
      statusCode: redirect.statusCode,
    })
  );

  // fetch global fields data exactly once and pass it anywhere
  const globalFields = await getGlobalFields(args.graphql);

  const params = {
    ...args,
    getMenus,
    globalFields,
  };

  await createPages(params);
  await createBlogPages(params);
  await createPosts(params);
  await createPartners(params);
  await createSuccessStories(params);
  await createEventPages(params);
  // custom 404
  await createNotFound(params);
};

// workaround, which allows to ignore the conflict of css files order
// https://github.com/gatsbyjs/gatsby/discussions/30169
exports.onCreateWebpackConfig = ({ stage, actions, getConfig, plugins }) => {
  const config = getConfig();
  const miniCssExtractPluginIndex = config.plugins.findIndex(
    (plugin) => plugin.constructor.name === "MiniCssExtractPlugin"
  );

  if (miniCssExtractPluginIndex > -1) {
    // remove miniCssExtractPlugin from plugins list
    config.plugins.splice(miniCssExtractPluginIndex, 1);

    // re-add mini-css-extract-plugin
    if (stage === "build-javascript") {
      config.plugins.push(
        plugins.extractText({
          filename: "[name].[contenthash].css",
          chunkFilename: "[name].[contenthash].css",
          ignoreOrder: true,
        })
      );
    } else {
      config.plugins.push(
        plugins.extractText({
          filename: "[name].css",
          chunkFilename: "[id].css",
          ignoreOrder: true,
        })
      );
    }
  }
  actions.replaceWebpackConfig(config);
};
