# VSHN Website

This project contains the sources of the [VSHN website](https://vshn.ch/).

## Build Website

This section contains information useful to build and run the website.

### Manually

1. Install [Node.js](https://nodejs.org/en) **version 16**
    - This website will **not** build with versions other than 16.
    - It is recommended to use the [Node Version Manager](https://github.com/nvm-sh/nvm) for this:

```bash
$ nvm install 16
$ nvm use 16
$ node --version
v16.20.2
```

2. Clone the repository:

```bash
$ git clone https://github.com/vshn/website.git
$ cd website
```

3. Install dependencies:

```bash
$ npm install
```

4. Build website; set the proper values to the environment variables and run the `build:website` task:

```bash
$ export WP_GRAPHQL_URL=...
$ export GATSBY_DEFAULT_SITE_URL=...
$ export GATSBY_CONCURRENT_DOWNLOAD=15
$ export WP_HTACCESS_USERNAME=...
$ export WP_HTACCESS_PASSWORD=...
$ npm run build:website
```

The build process can take around 20 minutes. At the end of the process, the `public` dir under this project will contain the HTML website ready to use.

To view the website, it's not enough to open the `public/index.html` file on a browser; instead, you need a local webserver, for example using the PHP CLI for that:

```bash
$ cd public
$ php -S localhost:8080
```

Browse to `http://localhost:8080` to see the website running.

### Container

Set the proper environment variables and use the following command to build the container locally, as defined in the `Dockerfile`:

```bash
$ podman build --env WP_GRAPHQL_URL=... \
  --env GATSBY_DEFAULT_SITE_URL=... \
  --env GATSBY_CONCURRENT_DOWNLOAD=15 \
  --env WP_HTACCESS_USERNAME=... \
  --env WP_HTACCESS_PASSWORD=... --tag website .
```

You can run the resulting container using the following command:

```bash
$ podman run --rm --publish 8080:8080 website
```

Browse to `http://localhost:8080` to see the website running. The final container is compatible with Red Hat OpenShift, using the [ghcr.io/vshn/nginx](https://github.com/vshn/nginx) as base image.

## Development

### Run the website

```bash
npm run start
```

### Run Storybook

```bash
npm run storybook
```

### Build the project

```bash
npm run build
```

### Build the website

```bash
npm run build:website
```

### Build Storybook

```bash
npm run build:storybook
```

### Run the built website

```bash
npm run serve:website
```

### Run built Storybook

```bash
npm run serve:storybook
```

### Clean Gatsby cache

```bash
npm run clean
```

## Project Structure

```text
├── src
│   ├── components
│   │  ├── pages — React components that are being used specifically on a certain page
│   │  └── shared — React components that are being used across the whole website
│   ├── hooks
│   ├── icons
│   ├── images — Images that are being quired using graphql. Read more about it here — gatsbyjs.org/docs/working-with-images. Also note, that folder structure should be equal to the structure of components folder
│   ├── layouts
│   ├── pages
│   ├── styles
│   ├── templates
│   ├── utils
│   └── html.js — HTML template for all generated pages. Read more about it here — gatsbyjs.org/docs/custom-html
├── static
│   └── fonts - Self-hosted fonts
├── gatsby-browser.js — This file is where Gatsby expects to find any usage of the Gatsby browser APIs (if any). These allow customization/extension of default Gatsby settings affecting the browser. Read more about it here — gatsbyjs.org/docs/browser-apis
├── gatsby-config.js — This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. Read more about it here — gatsbyjs.org/docs/gatsby-config
├── gatsby-node.js — This file is where Gatsby expects to find any usage of the Gatsby Node APIs (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process. Read more about it here — gatsbyjs.org/docs/node-apis
└── gatsby-ssr.js — This file is where Gatsby expects to find any usage of the Gatsby server-side rendering APIs (if any). These allow customization of default Gatsby settings affecting server-side rendering. Read more about it here — gatsbyjs.org/docs/ssr-apis
```

## Component Folder Structure

### Each component includes

1. Main JSX File
2. SASS File
3. Index File

### Each component optionally may include

1. Folder with images
2. Another component that follows all listed above rules.

### Example structure

```bash
component
├── nested-component
│  ├── images
│  │  ├── image.svg
│  │  └── icon.inline.svg
│  ├── nested-component.jsx
│  ├── nested-component.module.scss
│  └── index.js
├── images
│  ├── image.svg
│  └── icon.inline.svg
├── component.jsx
├── component.module.scss
└── index.js
```

## Commits

We use Conventional Commits for commit messages. You can read more about Conventional Commits [here](https://www.conventionalcommits.org/en/v1.0.0/). [Here](https://cheatography.com/albelop/cheat-sheets/conventional-commits/) you can find a useful Conventional Commits Cheat Sheet.

We try to make our commits "atomic". [Here](https://www.freshconsulting.com/atomic-commits/) and [here](https://en.wikipedia.org/wiki/Atomic_commit) you can read more about Atomic commits.

## VS Code

Following extensions required to simplify the process of keeping the same code style across the project:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

After installation add these lines to your VS Code `settings.json`:

```json
"editor.codeActionsOnSave": {
  "source.fixAll": true
},
"css.validate": false,
"less.validate": false,
"scss.validate": false
```

You can navigate to `settings.json` by using Command Pallete (CMD+Shift+P) and then type "Open settings.json".

Also, make sure that these extensions are installed too:

- [CSS Modules](https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules)
- [GraphQL](https://marketplace.visualstudio.com/items?itemName=Prisma.vscode-graphql)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

## Storybook

[Storybook](https://storybookjs.org) is a tool for previewing and building components in an isolated environment. Storybook also allows us to change props using knobs showing the developer what happens when a specific value is used. We should use this for both a development environment and a documentation tool.

## Style Variables

All style variables that being used across the whole website are stored in [src/styles/variables.scss](/src/styles/variables.scss).
