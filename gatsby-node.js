const fs = require('fs');
const path = require('path');

const slash = require('slash');

const filterNonRootItems = require('./src/utils/filter-non-root-items');

/* Constants */
const DEFAULT_LOCALE = 'de';
const SUPPORTED_LOCALES = ['en', 'de'];
const SUPPORTED_MENU_TYPES = ['main', 'top', 'mobile', 'footer'];

/* Local helper fns */

// removes all the spaces from a string
// stripSpaces(string: String) -> String
const stripSpaces = (string) => string.replace(/\s+/g, ' ');

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
            facebookLink
            youtubeLink
            twitterLink
            instagramLink
            linkedinLink
            githubLink
            gitlabLink
          }
          footerMetaAcf {
            copyright
            praiseBody
            praiseLink
            praiseLinkName
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
          }
        }
      }
      mobileMenuEn: wpMenu(slug: { eq: "mobile-menu-english" }) {
        menuItems {
          nodes {
            label
            path
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
          }
        }
      }
      mobileMenuDe: wpMenu(slug: { eq: "mobile-menu-deutsch" }) {
        menuItems {
          nodes {
            label
            path
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
function getUrlsForLocales(locale, url, translations) {
  const urls = {};
  urls[locale] = url;

  const remainingLocales = SUPPORTED_LOCALES.filter((item) => item !== locale);

  remainingLocales.forEach((remainingLocale) => {
    const matchedTranslation = translations.find(
      (translation) => translation.language.locale === remainingLocale,
    );
    if (matchedTranslation) {
      urls[remainingLocale] = matchedTranslation.uri;
    } else {
      urls[remainingLocale] = remainingLocale === DEFAULT_LOCALE ? '/' : `/${remainingLocale}`;
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
  const stripLocaleRegex = new RegExp(`^/?(${SUPPORTED_LOCALES.join('|')})?(/.*?)$`);
  const defaultUrl = url.replace(stripLocaleRegex, '$2');
  // assign default url to default locale
  urls[DEFAULT_LOCALE] = defaultUrl;

  // build every other localized url
  SUPPORTED_LOCALES
    .filter((item) => item !== DEFAULT_LOCALE)
    .forEach((remainingLocale) => {
      urls[remainingLocale] = `/${remainingLocale}${defaultUrl}`;
    });
  return urls;
};

/* Main logic */

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
      allWpPage {
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
          template {
            templateName
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }

  const pages = result.data.allWpPage.nodes;

  pages.forEach(
    ({
      id,
      uri,
      language: { locale },
      translations,
      template: { templateName },
    }) => {
      const templateNamePath = templateName.toLowerCase()
        .replace(/\s/g, '-');
      const templatePath = path.resolve(
        `./src/templates/${templateNamePath}.jsx`,
      );
      const context = {
        id,
        locale,
        menus: getMenus(locale),
        globalFields,
        pageUrls: getUrlsForLocales(locale, uri, translations),
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
    },
  );
}

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
    const templatePath = path.resolve('./src/templates/blog-post.jsx');

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
      reporter.error('Template Blog Post was not found');
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
      const templatePath = path.resolve('./src/templates/partner.jsx');

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
        reporter.error('Template Partner was not found');
      }
    },
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
      const templatePath = path.resolve('./src/templates/success-story.jsx');

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
        reporter.error('Template Success Story was not found');
      }
    },
  );
}

const createEventPages = async ({ graphql, actions, getMenus, globalFields }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      events: allWpPage(filter: { template: { templateName: { eq: "Events" } } }) {
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
      posts: allWpEvent(sort: {fields: acf___schedule___startDate, order: DESC}) {
        edges {
          node {
            id
            uri
            language {
              locale: slug 
            }
            acf {
              schedule {
                startDate
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }

  const { data: { events, posts } } = result;
  const eventsPages = events.nodes;
  const eventPosts = posts.edges;

  const eventsByYear = {};
  eventPosts.forEach((yearEvent) => {
    const { node } = yearEvent;
    const date = node.acf.schedule.startDate;
    const year = new Date(date).getFullYear();
    const thisYearEvents = eventsByYear[year] || [];
    thisYearEvents.push(yearEvent);
    eventsByYear[year] = thisYearEvents;
  });

  const template = path.resolve('./src/templates/events.jsx');

  eventsPages.forEach((eventsPage) => {
    const context = {
      id: eventsPage.id,
      menus: getMenus(eventsPage.language.locale),
      globalFields,
      locale: eventsPage.language.locale,
      eventsByYear,
    };

    const eventsWithoutUpcomingEvents = eventPosts
      .filter((event) => event.node.language.locale === eventsPage.language.locale).slice(3);
    const makePath = (i) => (i === 0 ? eventsPage.uri : `${eventsPage.uri}${i + 1}`);

    Array.from({ length: eventsWithoutUpcomingEvents.length })
      .forEach((_, i) => {
        createPage({
          path: makePath(i),
          component: slash(template),
          context: {
            ...context,
            pageUrls: buildUrlsForLocales(makePath(i)),
          },
        });
      });
    Object.keys(eventsByYear)
      .forEach((year) => {
        const makePath = (i) => (i === 0 ? `${eventsPage.uri}` : `${eventsPage.uri}${year}`);

        // create paginated event pages
        Array.from({ length: Object.keys(eventsByYear).length || 1 })
          .forEach((_, i) => {
            createPage({
              path: makePath(i),
              component: slash(template),
              context: {
                ...context,
                year,
                pageUrls: buildUrlsForLocales(makePath(i)),
              },
            });
          });
      });
  });
};

// Create Events
async function createEvents({
  graphql,
  actions,
  reporter,
  getMenus,
  globalFields,
}) {
  const { createPage } = actions;
  const result = await graphql(`
     {
       allWpEvent {
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
  const events = result.data.allWpEvent.nodes;

  events.forEach(
    ({ id, content, uri, language: { locale }, translations }) => {
      const templatePath = path.resolve('./src/templates/event.jsx');

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
        reporter.error('Template Event was not found');
      }
    },
  );
}

/* Note: this is a stub, should be set properly after
// there is a 404 page in WP
*/

const createNotFound = ({ actions, getMenus, globalFields }) => {
  const { createPage } = actions;

  createPage({
    path: '/en/404',
    component: slash(path.resolve('./src/templates/404.jsx')),
    context: {
      menus: getMenus('end'),
      locale: 'en',
      globalFields,
      pageUrls: getUrlsForLocales('en', '/en/404', [
        {
          language: { locale: 'de' },
          uri: '/404',
        },
      ]),
    },
  });

  createPage({
    path: '/404',
    component: slash(path.resolve('./src/templates/404.jsx')),
    context: {
      menus: getMenus('de'),
      locale: 'de',
      globalFields,
      pageUrls: getUrlsForLocales('de', '/404', [
        {
          language: { locale: 'en' },
          uri: '/en/404',
        },
      ]),
    },
  });
};

exports.createPages = async (args) => {
  // since all the pages have the exact same menu,
  // query it early and pass to page generators
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
      menus[`${type}MenuItems`] = type === 'main' ? filterNonRootItems(items) : items;
    });
    // filter non top level links if type of menu is main
    return menus;
  };

  // fetch global fields data exactly once and pass it anywhere
  const globalFields = await getGlobalFields(args.graphql);

  const params = {
    ...args,
    getMenus,
    globalFields,
  };

  await createPages(params);
  await createPosts(params);
  await createPartners(params);
  await createSuccessStories(params);
  await createEvents(params);
  await createEventPages(params);
  // custom 404
  await createNotFound(params);
};
