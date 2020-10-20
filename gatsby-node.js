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
          language {
            locale
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

  pages.forEach(({ id, uri, language: { locale }, template: { templateName } }) => {
    const templatePath = path.resolve(`./src/templates/${templateName.toLowerCase()}.jsx`);

    const context = {
      id,
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
