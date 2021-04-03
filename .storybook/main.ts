module.exports = {
  stories: ['../**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        transcludeMarkdown: true,
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
};
