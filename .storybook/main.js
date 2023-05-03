/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-storysource",
    "@storybook/addon-console",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  features: {
    buildStoriesJson: true
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
