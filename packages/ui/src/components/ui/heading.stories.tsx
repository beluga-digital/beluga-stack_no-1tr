import type { Meta, StoryFn } from "@storybook/react";
import { BADGE } from "@geometricpanda/storybook-addon-badges";
import { Heading } from "./heading";

const meta: Meta<typeof Heading> = {
  title: "UI/01_Text/Heading",
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
    },
    align: {
      description: "Determined the alignment of the text.",
      control: {
        type: "select",
      },
      options: ["left", "center", "right", "justify"],
    },
    weight: {
      description:
        "Determined the weight of the text. Please note that the selection depends on the font. Not all fonts include all font weights.",
      control: {
        type: "select",
      },
      options: ["light", "normal", "medium", "semibold", "bold"],
    },
    font: {
      description: "Define a font family.",
      control: {
        type: "inline-radio",
      },
      options: ["sans", "serif", "mono"],
    },
    children: {
      description: "Set the content of this component.",
    },
    className: {
      description: "Set more css classes for this component.",
    },
    asChild: {
      control: "boolean",
      description:
        "asChild is a good way to compile the behavior of several primitives and pass on arguments.",
    },
  },
  args: {
    level: 2,
    size: "lg",
    align: "left",
    weight: "semibold",
    font: "mono",
    children: "The quick, brown fox jumps over a lazy dog.",
    className: "",
    asChild: false,
  },
};

export default meta;

const Template: StoryFn<typeof Heading> = (args: any) => <Heading {...args} />;

export const Default: StoryFn<typeof Heading> = Template.bind({});
Default.args = {};

export const Page: StoryFn<typeof Heading> = Template.bind({});
Page.args = {
  size: "xl",
  align: "center",
  className: "text-primary dark:text-primary",
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
