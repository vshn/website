const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.(js|jsx)'],
  addons: ['@storybook/addon-knobs', '@storybook/addon-actions'],
  webpackFinal: async (config) => {
    // Remove svg from existing rule
    config.module.rules = config.module.rules.map((rule) => {
      if (
        String(rule.test) ===
        String(/\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/)
      ) {
        return {
          ...rule,
          test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
        };
      }

      return rule;
    });

    const javascriptSVGRule = {
      test: /\.inline.svg$/,
      issuer: {
        test: /\.(js|jsx)$/,
      },
      loader: '@svgr/webpack',
      options: {
        svgo: true,
        svgoConfig: {
          plugins: [{ removeViewBox: false }],
        },
      },
    };

    const urlSVGRule = {
      test: /\.svg$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 512,
          },
        },
        {
          loader: require.resolve('svgo-loader'),
          options: {
            plugins: [{ removeViewBox: false }],
          },
        },
      ],
    };

    // Add SVG support
    config.module.rules.push({ oneOf: [javascriptSVGRule, urlSVGRule] });

    const sassRule = {
      test: /\.s(a|c)ss$/,
      use: [
        { loader: require.resolve('style-loader') },
        {
          loader: require.resolve('css-loader'),
          options: {
            sourceMap: true,
            importLoaders: 2,
          },
        },
        {
          loader: 'resolve-url-loader',
        },
        {
          loader: require.resolve('sass-loader'),
          options: {
            data: '@import "./src/styles/variables.scss" , "./src/styles/mixins.scss";',
            sourceMap: true,
          },
        },
      ],
    }

    const sassModulesRule = {
      test: /\.module\.s(a|c)ss$/,
      use: [
        { loader: require.resolve('style-loader') },
        {
          loader: require.resolve('css-loader'),
          options: {
            modules: true,
            localIdentName: '[name]--[local]--[hash:base64:5]',
            sourceMap: true,
            camelCase: true,
            importLoaders: 2,
          },
        },
        {
          loader: 'resolve-url-loader',
        },
        {
          loader: require.resolve('sass-loader'),
          options: {
            data: '@import "./src/styles/variables.scss" , "./src/styles/mixins.scss";',
            sourceMap: true,
          },
        },
      ],
    }

    // Add SASS support
    config.module.rules.push({ oneOf: [sassModulesRule, sassRule] });

    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    config.module.rules[0].use[0].loader = require.resolve('babel-loader');
    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
      require.resolve('@babel/preset-react'),
      require.resolve('@babel/preset-env'),
    ];
    config.module.rules[0].use[0].options.plugins = [
      // use @babel/plugin-proposal-class-properties for class arrow functions
      require.resolve('@babel/plugin-proposal-class-properties'),
      // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
      require.resolve('babel-plugin-remove-graphql-queries'),
    ];
    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ['browser', 'module', 'main'];

    config.resolve.modules = ['node_modules', path.resolve('src')];

    return config;
  },
};
