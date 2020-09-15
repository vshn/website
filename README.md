# VSHN Website

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
  - [Run the website](#run-the-website)
  - [Run Storybook](#run-storybook)
  - [Build the project](#build-the-project)
  - [Build the website](#build-the-website)
  - [Build Storybook](#build-storybook)
  - [Run the built website](#run-the-built-website)
  - [Run built Storybook](#run-built-storybook)
  - [Clean Gatsby cache](#clean-gatsby-cache)
- [Project Structure](#project-structure)
- [Component Folder Structure](#component-folder-structure)
  - [Each component includes](#each-component-includes)
  - [Each component optionally may include](#each-component-optionally-may-include)
  - [Example structure](#example-structure)
- [Commits](#commits)
- [VS Code](#vs-code)
- [Storybook](#storybook)
- [Style Variables](#style-variables)

## Getting Started

1. **Clone this repository**

    ```bash
    git clone git@github.com:pixel-point/vshn-gatsby.git
    ```

1. **Install dependencies**

    ```bash
    npm install
    ```

1. **Copy .env.example and rename it into .env**

    ```bash
    cp .env.example .env
    ```

## Usage

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
