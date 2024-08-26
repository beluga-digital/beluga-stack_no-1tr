import { join, dirname } from "path";
import type { StorybookConfig } from "@storybook/react-vite";
import { configureSort } from "storybook-multilevel-sort";
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

configureSort({
  storyOrder: {
    introduction: null,
    "design system": {
      "*": { default: null },
    },
    ui: {
      layout: {
        container: {
          default: null,
        },
      },
      text: {
        heading: {
          default: null,
        },
        paragraph: {
          default: null,
        },
      },
      media: {
        "**": { default: null },
      },
      interaction: {
        button: {
          default: null,
          secondary: null,
          ghost: null,
          destructive: null,
        },
      },
      "presentation&data": {
        card: null,
      },
    },
    "**": { default: null },
  },
});

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../../../packages/ui/src/**/*.mdx",
    "../../../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("@geometricpanda/storybook-addon-badges"),
    getAbsolutePath("@storybook/addon-storysource"),
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  docs: {
    autodocs: "tag",
    defaultName: "Overview",
  },

  staticDirs: ["../public"],

  core: {
    disableWhatsNewNotifications: true,
  },
};
export default config;
