import type { Meta, StoryFn } from "@storybook/react";
import { Heading } from "./heading";

const meta: Meta<typeof Heading> = {
  title: "01_Text/Heading",
  component: Heading,
  argTypes: {
    children: {
      name: "label [children]",
    },
    level: {
      description: "The h-level (h1-h6) for this heading.",
      control: {
        type: "select",
        labels: {
          1: "[h1] – Level 1",
          2: "[h2] – Level 2",
          3: "[h3] – Level 3",
          4: "[h4] – Level 4",
          5: "[h5] – Level 5",
          6: "[h6] – Level 6 ",
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
  },
  parameters: {},
  args: {
    level: 2,
    size: "lg",
    align: "left",
    weight: "normal",
    font: "mono",
    children: "Heading lorem ipsum dolor sit amet",
    className: "",
  },
};

export default meta;

const Template: StoryFn<typeof Heading> = (args: any) => <Heading {...args} />;

export const Default: StoryFn<typeof Heading> = Template.bind({});
Default.args = {};

export const Hero: StoryFn<typeof Heading> = Template.bind({});
Hero.args = {
  size: "2xl",
  font: "serif",
  className: "text-primary-600 dark:text-primary-400",
};

export const Card: StoryFn<typeof Heading> = Template.bind({});
Card.args = {
  size: "base",
  weight: "semibold",
};
