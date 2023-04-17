// .storybook/preview.tsx

/** @type { import('@storybook/web-components').Preview } */
import React from 'react';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <FluentProvider theme={teamsLightTheme}>
        <Story />
        </FluentProvider>
    ),
  ],
};

export default preview;