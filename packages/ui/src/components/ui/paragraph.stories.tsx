import type { Meta, StoryFn } from "@storybook/react";
import { BADGE } from "@geometricpanda/storybook-addon-badges";
import { Paragraph } from "./paragraph";

/**
 * The Paragraph component is a versatile text element for creating paragraphs in a React application.
 * It supports different font sizes and text alignments, allowing for flexible typography.
 * This component is designed to maintain consistent styling throughout the application and
 * offers customization options for different use cases.
 */

const meta: Meta<typeof Paragraph> = {
  title: "UI/Text/Paragraph",
  component: Paragraph,
  parameters: {
    badges: [BADGE.STABLE],
  },
  argTypes: {
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
    size: "base",
    align: "left",
    weight: "normal",
    font: "sans",
    children:
      "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack.",
    asChild: false,
  },
};

export default meta;

const Template: StoryFn<typeof Paragraph> = (args: any) => (
  <Paragraph {...args} />
);

export const Default: StoryFn<typeof Paragraph> = Template.bind({});
Default.args = {};

export const Prologue: StoryFn<typeof Paragraph> = Template.bind({});
Prologue.args = {
  size: "lg",
  weight: "medium",
};

export const Small: StoryFn<typeof Paragraph> = Template.bind({});
Small.args = {
  size: "xs",
};
