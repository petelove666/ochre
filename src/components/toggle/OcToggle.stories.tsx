import type { Meta, StoryObj } from "@storybook/react-vite";
import OcToggle from "./OcToggle";

const meta = {
  component: OcToggle,
  tags: ["autodocs", "ai-generated"],
  parameters: {
    docs: {
      description: {
        component:
          "A radio-style toggle group for choosing one option from a set. Each option renders as a labeled radio button with a selected-state style.",
      },
    },
  },
  argTypes: {
    name: {
      description: "Shared radio-group name used across the toggle options.",
      control: "text",
    },
    options: {
      description:
        "Available toggle options. Each option contains a label, value, and optional selected state.",
      control: "object",
    },
    selectedValue: {
      description:
        "The currently selected option value. When omitted, the first option is selected by default unless an option is explicitly marked as selected.",
      control: "text",
    },
  },
} satisfies Meta<typeof OcToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "default-group",
    options: [
      { label: "condensed", value: "a" },
      { label: "expanded", value: "b" },
    ],
    selectedValue: "b",
  },
};

export const WithSelection: Story = {
  args: {
    name: "options",
    selectedValue: "b",
    options: [
      { label: "option 1", value: "a" },
      { label: "option 2", value: "b" },
      { label: "option 3", value: "c" },
    ],
  },
};

export const CustomName: Story = {
  args: {
    name: "presentation",
    options: [
      { label: "day", value: "day" },
      { label: "night", value: "night" },
    ],
  },
};
