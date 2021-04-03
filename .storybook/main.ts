module.exports = {
  stories: [
    '../packages/**/*.stories.@(ts|tsx|mdx)',
    '../stories/README.stories.mdx',
  ],
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
