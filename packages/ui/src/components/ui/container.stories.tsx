import type { Meta, StoryFn } from "@storybook/react";
import { BADGE } from "@geometricpanda/storybook-addon-badges";
import { useChannel } from "@storybook/preview-api";
import { HIGHLIGHT } from "@storybook/addon-highlight";
import { Container, ContainerContent } from "./container";
import { Paragraph } from "./paragraph";

const meta: Meta<typeof Container> = {
  title: "UI/Layout/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
    badges: [BADGE.STABLE],
  },
  argTypes: {
    spacing: {
      description: "Internal spacing of the component from above and below.",
      control: {
        type: "select",
        labels: {
          false: "[false] – None (unset)",
          none: "[none] – None (0px)",
          xs: "[xs] – Extra-Small",
          sm: "[sm] – Small",
          base: "[base] – Base/Medium",
          lg: "[lg] – Large",
          xl: "[xl] – Extra-Large",
          "2xl": "[2xl] – 2x Extra-Large",
          "3xl": "[3xl] – 3x Extra-Large",
          "4xl": "[4xl] – 4x Extra-Large",
        },
      },
      options: [
        "false",
        "none",
        "xs",
        "sm",
        "base",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
      ],
    },
    spacingTop: {
      description:
        "Internal spacing of the component only from above. Will be overwritten by spacing if set.",
      control: {
        type: "select",
        labels: {
          false: "[false] – None (unset)",
          none: "[none] – None (0px)",
          xs: "[xs] – Extra-Small",
          sm: "[sm] – Small",
          base: "[base] – Base/Medium",
          lg: "[lg] – Large",
          xl: "[xl] – Extra-Large",
          "2xl": "[2xl] – 2x Extra-Large",
          "3xl": "[3xl] – 3x Extra-Large",
          "4xl": "[4xl] – 4x Extra-Large",
        },
      },
      options: [
        "false",
        "none",
        "xs",
        "sm",
        "base",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
      ],
    },
    spacingBottom: {
      description:
        "Internal spacing of the component only from below. Will be overwritten by spacing if set.",
      control: {
        type: "select",
        labels: {
          false: "[false] – None (unset)",
          none: "[none] – None (0px)",
          xs: "[xs] – Extra-Small",
          sm: "[sm] – Small",
          base: "[base] – Base/Medium",
          lg: "[lg] – Large",
          xl: "[xl] – Extra-Large",
          "2xl": "[2xl] – 2x Extra-Large",
          "3xl": "[3xl] – 3x Extra-Large",
          "4xl": "[4xl] – 4x Extra-Large",
        },
      },
      options: [
        "false",
        "none",
        "xs",
        "sm",
        "base",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
      ],
    },
    align: {
      description:
        "Aligns items (ContainerContent) along the block (column) axis.",
      control: {
        type: "select",
      },
      options: ["start", "end", "center", "stretch"],
    },
    justify: {
      description: "Aligns items (ContainerConent) along the inline (row).",
      control: {
        type: "select",
      },
      options: ["start", "end", "center", "between", "stretch"],
    },
    children: {
      description: "Set the content of this component.",
    },
    as: {
      description:
        "Render the element as another HTML element, e.g. as div. section is standard.",
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
    spacingTop: "lg",
    align: "start",
    justify: "center",
    children: (
      <ContainerContent>
        <Paragraph align="center" className="p-2" font="mono" size="sm">
          Container component is only to be used in conjunction with
          ContainerContent.
        </Paragraph>
      </ContainerContent>
    ),
    asChild: false,
  },
  decorators: [
    (storyFn) => {
      const emit = useChannel({});
      emit(HIGHLIGHT, {
        elements: [".container", ".container__content"],
      });
      return storyFn();
    },
  ],
};

export default meta;

const Template: StoryFn<typeof Container> = (args: any) => (
  <Container {...args} />
);

export const Default: StoryFn<typeof Container> = Template.bind({});
Default.args = {};

export const SpacingTopBottom: StoryFn<typeof Container> = Template.bind({});
SpacingTopBottom.args = {
  spacing: "xl",
};
