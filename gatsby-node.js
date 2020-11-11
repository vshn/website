const fs = require('fs');
const path = require('path');

const slash = require('slash');

const filterNonRootItems = require('./src/utils/filter-non-root-items');

/* Constants */
const DEFAULT_LOCALE = 'de';
const SUPPORTED_LOCALES = ['en', 'de'];
const DEFAULT_MENU = 'main';
const SUPPORTED_MENU_TYPES = ['main', 'top', 'mobile', 'footer'];

/* Local helper fns */

// removes all the spaces from a string
// stripSpaces(string: String) -> String
const stripSpaces = (string) => string.replace(/\s+/g, ' ');

// fetches all vshn menus for both locales
// getAllMenusByLocale(graphql: GatsbyGraphQlInstance) -> Object
const getAllMenusByLocale = async (graphql) => {
  const { data: { mainMenuEn, mainMenuDe, topMenuEn, topMenuDe, mobileMenuEn, mobileMenuDe, footerMenuEn, footerMenuDe } } = await graphql(`
  {
    mainMenuEn:wpMenu(slug: { eq: "main-menu-english" }) {
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
    topMenuEn:wpMenu(slug: { eq: "top-menu-english" }) {
      menuItems {
        nodes {
          label
          path
        }
      }
    }
    mobileMenuEn:wpMenu(slug: { eq: "mobile-menu-english" }) {
      menuItems {
        nodes {
          label
          path
        }
      }
    }
    footerMenuEn:wpMenu(slug: { eq: "footer-menu-english" }) {
      menuItems {
        nodes {
          label
          path
        }
      }
    }
    mainMenuDe:wpMenu(slug: { eq: "main-menu-deutsch" }) {
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
    topMenuDe:wpMenu(slug: { eq: "top-menu-deutsch" }) {
      menuItems {
        nodes {
          label
          path
        }
      }
    }
    mobileMenuDe:wpMenu(slug: { eq: "mobile-menu-deutsch" }) {
      menuItems {
        nodes {
          label
          path
        }
      }
    }
    footerMenuDe:wpMenu(slug: { eq: "footer-menu-deutsch" }) {
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

/* Main logic */

async function createPages({ graphql, actions, reporter, getMenus }) {
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
    ({ id, uri, language: { locale }, translations, template: { templateName } }) => {
      const templatePath = path.resolve(
        `./src/templates/${templateName.toLowerCase()}.jsx`,
      );
      const context = {
        id,
        locale,
        menus: getMenus(locale),
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

async function createPosts({ graphql, actions, reporter, getMenus }) {
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
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }
  const posts = result.data.allWpPost.nodes;

  posts.forEach(({ id, content, uri, language: { locale } }) => {
    const templatePath = path.resolve('./src/templates/blog-post.jsx');

    const context = {
      id,
      locale,
      menus: getMenus(locale),
      pageUrls: getUrlsForLocales(locale, uri, []),
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

async function createPartners({ graphql, actions, reporter, getMenus }) {
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

/* Note: this is a stub, should be set properly after
// there is a 404 page in WP
*/
const createNotFound = ({ actions, getMenus }) => {
  const { createPage } = actions;

  createPage({
    path: '/en/404',
    component: slash(path.resolve('./src/templates/404.jsx')),
    context: {
      menus: getMenus('end'),
      locale: 'en',
      pageUrls: getUrlsForLocales('en', '/en/404', [{ language: { locale: 'de' }, uri: '/404' }]),
    },
  });

  createPage({
    path: '/404',
    component: slash(path.resolve('./src/templates/404.jsx')),
    context: {
      menus: getMenus('de'),
      locale: 'de',
      pageUrls: getUrlsForLocales('de', '/404', [{ language: { locale: 'en' }, uri: '/en/404' }]),
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
    const menuLocale = SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;

    const menus = {};

    SUPPORTED_MENU_TYPES.forEach((type) => {
      const items = allMenus[menuLocale][`${type}Menu`].menuItems.nodes;
      menus[`${type}MenuItems`] = type === 'main' ? filterNonRootItems(items) : items;
    });
    // filter non top level links if type of menu is main
    return menus;
  };

  const params = {
    ...args,
    getMenus,
  };

  await createPages(params);
  await createPosts(params);
  await createPartners(params);
  // custom 404
  await createNotFound(params);
};
