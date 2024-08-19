import type { Meta, StoryFn } from "@storybook/react";
import { BADGE } from "@geometricpanda/storybook-addon-badges";
import { useChannel } from "@storybook/preview-api";
import { HIGHLIGHT } from "@storybook/addon-highlight";
import { Container, ContainerContent } from "./container";
import { Paragraph } from "./paragraph";

const meta: Meta<typeof ContainerContent> = {
  title: "UI/Layout/ContainerContent",
  component: ContainerContent,
  parameters: {
    layout: "fullscreen",
    badges: [BADGE.STABLE],
  },
  argTypes: {
    area: {
      description:
        "Defines in which area of the container the content is located.",
      control: {
        type: "select",
        labels: {
          false: "[false] – None (unset)",
          small: "[small] – Small",
          large: "[large] – Large",
          page: "[page] – Page",
        },
      },
      options: ["false", "small", "large", "page"],
    },
    areaStart: {
      description:
        "Defines in which area of the container the content starts. Will be overwritten by area if set.",
      control: {
        type: "select",
        labels: {
          false: "[false] – None (unset)",
          small: "[small] – Small",
          large: "[large] – Large",
          page: "[page] – Page",
        },
      },
      options: ["false", "small", "large", "page"],
    },
    areaEnd: {
      description:
        "Defines in which area of the container the content ends. Will be overwritten by area if set.",
      control: {
        type: "select",
        labels: {
          false: "[false] – None (unset)",
          small: "[small] – Small",
          large: "[large] – Large",
          page: "[page] – Page",
        },
      },
      options: ["false", "small", "large", "page"],
    },
    maxWidth: {
      description: "Defines the max-width of the content component.",
      control: {
        type: "select",
        labels: {
          false: "[false] – None (unset)",
          prose: "[prose] – Prose",
          sm: "[sm] – Small",
          md: "[md] – Medium",
          lg: "[lg] – Large",
          xl: "[xl] – Extra-Large",
          "2xl": "[2xl] – 2x Extra-Large",
          full: "[full] – Full Width",
        },
      },
      options: ["false", "prose", "sm", "md", "lg", "xl", "2xl", "full"],
    },
    children: {
      description: "Set the content of this component.",
    },
    as: {
      description:
        "Render the element as another HTML element, e.g. as article. div is standard.",
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
    area: "large",
    maxWidth: false,
    children: (
      <Paragraph align="center" className="p-2" font="mono" size="sm">
        ContainerContent component is only to be used in conjunction with
        Container.
      </Paragraph>
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

const Template: StoryFn<typeof ContainerContent> = (args: any) => (
  <Container spacing="xl">
    <ContainerContent {...args} />
  </Container>
);

export const Default: StoryFn<typeof ContainerContent> = Template.bind({});
Default.args = {};

export const Small: StoryFn<typeof ContainerContent> = Template.bind({});
Small.args = {
  area: "small",
};

export const Page: StoryFn<typeof ContainerContent> = Template.bind({});
Page.args = {
  area: "page",
};

export const SmallPage: StoryFn<typeof ContainerContent> = Template.bind({});
SmallPage.args = {
  area: false,
  areaStart: "small",
  areaEnd: "page",
};
