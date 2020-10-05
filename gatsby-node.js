const fs = require('fs');
const path = require('path');
const slash = require('slash');

async function createPages({ graphql, actions }) {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allWpPage {
        nodes {
          id
          uri
          locale {
            id
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

  const pages = result.data.allWpPage.nodes;

  pages.forEach(({ id, uri, locale: { id: localeId }, acf: { template: templateName } }) => {
    const templatePath = path.resolve(`./src/templates/${templateName}.jsx`);

    const context = {
      id,
      localeId,
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
