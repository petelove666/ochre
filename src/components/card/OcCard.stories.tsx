import type { Meta, StoryObj } from "@storybook/react-vite";
import OcCard from "./OcCard";
import OcButton from "../button/OcButton";

const meta = {
  component: OcCard,
  tags: ["autodocs", "ai-generated"],
  parameters: {
    docs: {
      description: {
        component:
          "A simple container for grouping related content. It provides a standardized card surface with padding and border styling.",
      },
    },
  },
  argTypes: {
    children: {
      description: "Content rendered inside the card.",
      control: false,
    },
  },
} satisfies Meta<typeof OcCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Card</p>,
  },
};

export const WithContent: Story = {
  args: {
    children: (
      <>
        <OcButton>Hover over me</OcButton>
      </>
    ),
  },
};
