import type { Meta, StoryFn } from "@storybook/react";
import { BADGE } from "@geometricpanda/storybook-addon-badges";
import { Tb360View, TbIcons } from "react-icons/tb";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Interaction/Button",
  component: Button,
  parameters: {
    badges: [BADGE.STABLE],
  },
  argTypes: {
    variant: {
      description: "The variant of this button.",
      control: {
        type: "select",
        labels: {
          primary: "[primary] – Primary",
          secondary: "[secondary] – Secondary",
          destructive: "[destructive] – Destructive",
          outline: "[outline] – Outline",
          ghost: "[ghost] – Ghost",
          link: "[link] – Outline",
        },
      },
      options: [
        "primary",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
      table: {
        defaultValue: { summary: "primary" },
        type: { summary: "string" },
      },
    },
    size: {
      description: "The size of this button.",
      control: {
        type: "select",
        labels: {
          default: "[default] – Default",
          sm: "[sm] – Small",
          lg: "[lg] – Large",
          icon: "[icon] – Icon",
        },
      },
      options: ["default", "sm", "lg", "icon"],
      table: {
        defaultValue: { summary: "default" },
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
    variant: "primary",
    size: "default",
    children: "Click me hard",
    asChild: false,
  },
};

export default meta;

const Template: StoryFn<typeof Button> = (args: any) => <Button {...args} />;

export const Default: StoryFn<typeof Button> = Template.bind({});
Default.args = {};

export const Secondary: StoryFn<typeof Button> = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Ghost: StoryFn<typeof Button> = Template.bind({});
Ghost.args = {
  variant: "ghost",
};

export const Destructive: StoryFn<typeof Button> = Template.bind({});
Destructive.args = {
  variant: "destructive",
};

export const Icon: StoryFn<typeof Button> = Template.bind({});
Icon.args = {
  size: "icon",
  children: <TbIcons />,
};
