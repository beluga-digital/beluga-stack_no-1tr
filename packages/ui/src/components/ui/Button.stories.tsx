import type { Meta, StoryFn } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/03_Interactive/Button",
  component: Button,
  argTypes: {},
  parameters: {},
  args: {
    children: "Button",
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
