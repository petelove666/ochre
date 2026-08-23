import { expect } from "storybook/test";
import { OcLayoutCol } from "./OcLayoutCol";
import { OcCard } from "../card/OcCard";

const meta = {
  component: OcLayoutCol,
  tags: ["autodocs", "ai-generated"],
  parameters: {
    docs: {
      description: {
        component:
          "A simple container for grouping related content. It provides a standardized layout column with padding and border styling.",
      },
    },
  },
  argTypes: {
    children: {
      description: "Content rendered inside the layout column.",
      control: false,
    },
    gap: {
      description: "Spacing between items, in pixels (converted to rem).",
      control: { type: "select" },
      options: [8, 16, 24, 32, 48],
    },
  },
};

export default meta;

export const Default = {
  args: {
    children: (
      <>
        <OcCard>
          <p>Item</p>
        </OcCard>

        <OcCard>
          <p>Item</p>
        </OcCard>

        <OcCard>
          <p>Item</p>
        </OcCard>
      </>
    ),
  },
};

export const LargeGap = {
  args: {
    gap: 48,
    children: (
      <>
        <OcCard>
          <p>Item</p>
        </OcCard>

        <OcCard>
          <p>Item</p>
        </OcCard>

        <OcCard>
          <p>Item</p>
        </OcCard>
      </>
    ),
  },
};
