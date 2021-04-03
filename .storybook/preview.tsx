import { Global, css } from '@emotion/react';
import type { Meta } from '@storybook/react/types-6-0';
import { themes } from '@storybook/theming';

export const parameters: Meta['parameters'] = {
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
    inlineStories: true,
  },
  options: {
    storySort: {
      order: [
        'README',
        'Grid',
        ['README', 'GridConfigProvider', 'Container', 'Row', 'Col'],
      ],
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

export const decorators: Meta['decorators'] = [
  (Story) => (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            font-family: 'Nunito Sans', sans-serif;
            color: #fff;
          }
        `}
      />
      <Story />
    </>
  ),
];
