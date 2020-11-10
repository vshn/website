const fs = require('fs');
const path = require('path');

const slash = require('slash');

function replaceBrokenSpaces(string) {
  return string.replace(/\s/g, ' ');
}

const getAllMenusByLocale = async (graphql) => {
  const { mainMenuEn, mainMenuDe } = await graphql(`
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
    }
  `);
  return {
    en: {
      mainMenu: mainMenuEn,
    },
    de: {
      mainMenu: mainMenuDe,
    },
  };
};

async function createPages({ graphql, actions }) {
  const { createPage } = actions;

  const allMenus = await getAllMenusByLocale(graphql);

  const result = await graphql(`
    {
      allWpPage {
        nodes {
          id
          uri
          language {
            slug
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
    ({ id, uri, language: { slug }, template: { templateName } }) => {
      const templatePath = path.resolve(
        `./src/templates/${templateName.toLowerCase()}.jsx`,
      );

      const context = {
        id,
        locale: slug,
        menus: allMenus[slug],
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
    },
  );
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
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }
  const posts = result.data.allWpPost.nodes;

  posts.forEach(({ id, content, uri, language: { slug } }) => {
    const templatePath = path.resolve('./src/templates/blog-post.jsx');

    const context = {
      id,
      locale: slug,
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
