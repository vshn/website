const fs = require('fs');
const path = require('path');
const slash = require('slash');

async function createPages({ graphql, actions }) {
  const { createPage } = actions;

  const result = await graphql(`
    {
      wp {
        defaultLanguage {
          locale
        }
      }
      allWpPage {
        nodes {
          id
          uri
          language {
            locale
          }
          acf {
            template
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }

  const defaultLocale = result.data.wp.defaultLanguage.locale;
  const pages = result.data.allWpPage.nodes;

  pages.forEach(({ id, uri, language: { locale }, acf: { template: templateName } }) => {
    const templatePath = path.resolve(`./src/templates/${templateName}.jsx`);

    const context = {
      id,
      defaultLocale,
      locale,
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

exports.createPages = async (args) => {
  await createPages(args);
};
