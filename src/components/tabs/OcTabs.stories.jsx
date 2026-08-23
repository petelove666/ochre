import { expect, userEvent } from "storybook/test";
import { OcTabs } from "./OcTabs";
import { OcTabPanel } from "./OcTabPanel";

const meta = {
  component: OcTabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Builds a tab list from nested OcTabPanel children, and shows the active panel's content. Supports click and arrow-key/Home/End keyboard navigation between tabs.",
      },
    },
  },
  argTypes: {
    children: {
      description: "OcTabPanel elements to render as tabs.",
      control: false,
    },
    defaultActiveIndex: {
      description: "Index of the panel active on initial render.",
      control: "number",
    },
  },
};

export default meta;

const panels = [
  <OcTabPanel key="1" label="First">
    <p>First panel content</p>
  </OcTabPanel>,
  <OcTabPanel key="2" label="Second">
    <p>Second panel content <a href="#">link</a></p>
  </OcTabPanel>,
  <OcTabPanel key="3" label="Third">
    <p>Third panel content</p>
  </OcTabPanel>,
];

export const Default = {
  args: {
    children: panels,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("First panel content")).toBeVisible();
    expect(canvas.queryByText("Second panel content")).not.toBeVisible();
  },
};

export const ClickToSwitch = {
  args: {
    children: panels,
  },
  play: async ({ canvas }) => {
    const secondTab = canvas.getByRole("tab", { name: "Second" });
    await userEvent.click(secondTab);

    await expect(secondTab).toHaveAttribute("aria-selected", "true");
    await expect(canvas.getByText("Second panel content")).toBeVisible();
  },
};

export const KeyboardNavigation = {
  args: {
    children: panels,
  },
  play: async ({ canvas }) => {
    const firstTab = canvas.getByRole("tab", { name: "First" });
    firstTab.focus();

    await userEvent.keyboard("{ArrowRight}");
    const secondTab = canvas.getByRole("tab", { name: "Second" });
    await expect(secondTab).toHaveFocus();
    await expect(secondTab).toHaveAttribute("aria-selected", "true");

    await userEvent.keyboard("{ArrowRight}");
    const thirdTab = canvas.getByRole("tab", { name: "Third" });
    await expect(thirdTab).toHaveFocus();
    await expect(thirdTab).toHaveAttribute("aria-selected", "true");

    await userEvent.keyboard("{ArrowRight}");
    await expect(firstTab).toHaveFocus();

    await userEvent.keyboard("{ArrowLeft}");
    await expect(thirdTab).toHaveFocus();
  },
};

export const DefaultActiveIndex = {
  args: {
    children: panels,
    defaultActiveIndex: 2,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Third panel content")).toBeVisible();
  },
};

export const TabIntoPanel = {
  args: {
    children: panels,
  },
  play: async ({ canvas }) => {
    const firstTab = canvas.getByRole("tab", { name: "First" });
    firstTab.focus();

    await userEvent.tab();

    const panel = canvas.getByRole("tabpanel");
    await expect(panel).toHaveFocus();
  },
};
