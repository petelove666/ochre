import { expect } from "storybook/test";
import type { Meta, StoryObj } from "@storybook/react-vite";
import OcButton from "./OcButton";

const meta = {
  component: OcButton,
  tags: ["autodocs", "ai-generated"],
  parameters: {
    docs: {
      description: {
        component:
          "A simple button for triggering actions, utilising a hover animation.",
      },
    },
  },
  argTypes: {
    children: {
      description: "Content rendered inside the button.",
      control: "text",
    },
    type: {
      description: "The native button type.",
      control: "select",
      options: ["button", "submit", "reset"],
    },
    disabled: {
      description: "Whether the button is disabled.",
      control: "boolean",
    },
    onClick: {
      description: "Called when the button is clicked.",
      control: false,
    },
  },
} satisfies Meta<typeof OcButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click me",
  },
};

export const Disabled: Story = {
  args: {
    children: "Click me",
    disabled: true,
  },
};

export const ClickHandler: Story = {
  args: {
    children: "Click me",
    onClick: () => {},
  },
  play: async ({ canvas }) => {
    const button = canvas.getByText("Click me");
    await button.click();

    await expect(button).toBeEnabled();
  },
};
