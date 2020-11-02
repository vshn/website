const fs = require('fs');
const path = require('path');

const slash = require('slash');

function replaceBrokenSpaces(string) {
  return string.replace(/\s/g, ' ');
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
