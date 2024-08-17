import "@fontsource-variable/inter";
import "@fontsource/geist-mono/400.css";
import "@fontsource/geist-mono/700.css";
import "@fontsource/krona-one";
import "../../../packages/ui/dist/styles/globals.css";
import "../src/globals.css";
import React from "react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { BADGE, BadgesConfig } from "@geometricpanda/storybook-addon-badges";

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-mode",
  }),
];

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      disable: true,
      grid: {
        cellSize: 8,
        opacity: 0.5,
        cellAmount: 4,
        offsetX: 16, // Default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
        offsetY: 16, // Default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;
