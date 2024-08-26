import type { Meta, StoryFn } from "@storybook/react";
import { BADGE } from "@geometricpanda/storybook-addon-badges";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

/**
 * The Heading component is a versatile text element for creating headings in a React application.
 * It supports different heading levels (h1-h6) and various font sizes, allowing for flexible typography.
 * This component is designed to maintain consistent styling across the application while providing
 * customization options for different use cases.
 */

const meta: Meta<typeof Card> = {
  title: "UI/Presentation&Data/Card/Card",
  component: Card,
  parameters: {
    badges: [BADGE.STABLE],
  },
  argTypes: {
    children: {
      description: "Set the content of this component.",
      table: {
        type: { summary: "CardHeader, CardContent, CardFooter" },
      },
    },
    className: {
      description: "Set more css classes for this component.",
      table: {
        defaultValue: { summary: "" },
        type: { summary: "string" },
      },
    },
  },
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle level={3}>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>Card Content</CardContent>
        <CardFooter>Card Footer</CardFooter>
      </>
    ),
  },
};

export default meta;

const Template: StoryFn<typeof Card> = (args: any) => <Card {...args} />;

export const Default: StoryFn<typeof Card> = Template.bind({});
Default.args = {};
Default.parameters = {};
