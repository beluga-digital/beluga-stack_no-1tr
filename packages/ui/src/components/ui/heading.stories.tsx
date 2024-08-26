import type { Meta, StoryFn } from "@storybook/react";
import { BADGE } from "@geometricpanda/storybook-addon-badges";
import { Heading } from "./heading";

/**
 * The Heading component is a versatile text element for creating headings in a React application.
 * It supports different heading levels (h1-h6) and various font sizes, allowing for flexible typography.
 * This component is designed to maintain consistent styling across the application while providing
 * customization options for different use cases.
 */

const meta: Meta<typeof Heading> = {
  title: "UI/Text/Heading",
  component: Heading,
  parameters: {
    badges: [BADGE.STABLE],
  },
  argTypes: {
    level: {
      description: "The h-level (h1-h6) for this heading.",
      control: {
        type: "select",
        labels: {
          1: "[1] – h1",
          2: "[2] – h2",
          3: "[3] – h3",
          4: "[4] – h4",
          5: "[5] – h5",
          6: "[6] – h6 ",
        },
      },
      options: [1, 2, 3, 4, 5, 6],
      table: {
        defaultValue: { summary: 2 },
        type: { summary: "number" },
      },
    },
    size: {
      description: "The font-size for this heading.",
      control: {
        type: "select",
        labels: {
          "4xs": "[4xs] – 4x Extra-Small",
          "3xs": "[3xs] – 3x Extra-Small",
          "2xs": "[2xs] – 2x Extra-Small",
          xs: "[xs] – Extra-Small",
          sm: "[sm] – Small",
          base: "[base] – Base/Medium",
          lg: "[lg] – Large",
          xl: "[xl] – Extra-Large",
          "2xl": "[2xl] – 2x Extra-Large",
          "3xl": "[3xl] – 3x Extra-Large",
          "4xl": "[4xl] – 4x Extra-Large",
          "5xl": "[5xl] – 5x Extra-Large",
          "6xl": "[6xl] – 6x Extra-Large",
        },
      },
      options: [
        "4xs",
        "3xs",
        "2xs",
        "xs",
        "sm",
        "base",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
      ],
      table: {
        defaultValue: { summary: "lg" },
        type: { summary: "string" },
      },
    },
    align: {
      description: "Determined the alignment of the text.",
      control: {
        type: "select",
      },
      options: ["left", "center", "right", "justify"],
      table: {
        defaultValue: { summary: "left" },
        type: { summary: "string" },
      },
    },
    weight: {
      description:
        "Determined the weight of the text. Please note that the selection depends on the font. Not all fonts include all font weights.",
      control: {
        type: "select",
      },
      options: ["light", "normal", "medium", "semibold", "bold"],
      table: {
        defaultValue: { summary: "semibold" },
        type: { summary: "string" },
      },
    },
    font: {
      description: "Define a font family.",
      control: {
        type: "inline-radio",
      },
      options: ["sans", "serif", "mono"],
      table: {
        defaultValue: { summary: "mono" },
        type: { summary: "string" },
      },
    },
    children: {
      description: "Set the content of this component.",
      table: {
        type: { summary: "any" },
      },
    },
    className: {
      description: "Set more css classes for this component.",
      table: {
        defaultValue: { summary: "" },
        type: { summary: "string" },
      },
    },
    asChild: {
      control: "boolean",
      description:
        "asChild is a good way to compile the behavior of several primitives and pass on arguments.",
      table: {
        defaultValue: { summary: false },
        type: { summary: "boolean" },
        readonly: true,
      },
    },
  },
  args: {
    level: 2,
    size: "lg",
    align: "left",
    weight: "semibold",
    font: "mono",
    children: "The quick, brown fox jumps over a lazy dog.",
    asChild: false,
  },
};

export default meta;

const Template: StoryFn<typeof Heading> = (args: any) => <Heading {...args} />;

export const Default: StoryFn<typeof Heading> = Template.bind({});
Default.args = {};
Default.parameters = {
  description: "Test Beschreibung",
};

export const Page: StoryFn<typeof Heading> = Template.bind({});
Page.args = {
  size: "xl",
  align: "center",
  className: "text-primary dark:text-primary",
};
Page.parameters = {
  docs: {
    description: {
      story:
        "This variant shows a centered heading with a larger font size that can be used as a page heading. It uses custom color classes for light and dark themes.",
    },
  },
};

export const Hero: StoryFn<typeof Heading> = Template.bind({});
Hero.args = {
  size: "2xl",
  weight: "normal",
  font: "serif",
  className: "text-primary dark:text-primary",
};
Hero.parameters = {
  layout: "fullscreen",
  badges: [BADGE.EXPERIMENTAL],
  docs: {
    description: {
      story:
        "This variant is designed for hero sections, featuring a larger font size and a serif font for a more elegant look. It also includes custom color classes for light and dark themes.",
    },
  },
};
Hero.decorators = [
  (Hero) => (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-white to-primary-200 dark:bg-primary-700 p-16">
      <Hero />
    </div>
  ),
];

export const Card: StoryFn<typeof Heading> = Template.bind({});
Card.args = {
  size: "base",
};
Card.parameters = {
  docs: {
    description: {
      story:
        "This variant is designed for card sections and features a medium font size.",
    },
  },
};
