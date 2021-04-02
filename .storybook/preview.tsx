import { Global, css } from '@emotion/react';
import { DocsContainer, DocsPage } from '@storybook/addon-docs/blocks';
import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
  options: {
    storySort: {
      order: ['Grid', ['README']],
    },
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
        `}
      />
      <Story />
    </>
  ),
];
