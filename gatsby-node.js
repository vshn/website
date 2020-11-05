const fs = require('fs');
const path = require('path');

const slash = require('slash');

function replaceBrokenSpaces(string) {
  return string.replace(/\s/g, ' ');
}

const DEFAULT_LOCALE = 'de_DE';
const SUPPORTED_LOCALES = ['en_US', 'de_DE'];

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
      urls[remainingLocale] = remainingLocale === DEFAULT_LOCALE ? '/' : `/${remainingLocale.substring(0, 2)}`;
    }
  });
  return urls;
}

async function createPages({ graphql, actions }) {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allWpPage {
        nodes {
          id
          uri
          language {
            locale
          }
          translations {
            language {
              locale
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

  pages.forEach(({ id, uri, language: { locale }, translations, template: { templateName } }) => {
    const templatePath = path.resolve(`./src/templates/${templateName.toLowerCase()}.jsx`);

    const context = {
      id,
      locale,
      pageUrls: getUrlsForLocales(locale, uri, translations),
    };

    if (fs.existsSync(templatePath)) {
      createPage({
        path: uri,
        component: slash(templatePath),
        context,
      });
    } else {
      console.error(`Template "${templateName}" was not found`);
    }
  });
}

async function createPosts({ graphql, actions }) {
  const { createPage } = actions;
  const result = await graphql(`
  {
    allWpPost {
      nodes {
        id
        content
        uri
        language {
          locale
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
    };

    if (content) {
      context.content = replaceBrokenSpaces(content);
    }

    if (fs.existsSync(templatePath)) {
      createPage({
        path: uri,
        component: slash(templatePath),
        context,
      });
    } else {
      console.error('Template Blog Post was not found');
    }
  });
}

exports.createPages = async (args) => {
  await createPages(args);
  await createPosts(args);
};
