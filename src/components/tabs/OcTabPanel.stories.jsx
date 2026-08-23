import { OcTabPanel } from "./OcTabPanel";

const meta = {
  component: OcTabPanel,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A single panel of content, intended to be nested inside OcTabs. The `label` prop supplies the tab button's text; OcTabs reads it and injects the remaining accessibility props (id, aria-labelledby, hidden).",
      },
    },
  },
  argTypes: {
    label: {
      description: "Text shown on the tab button when nested inside OcTabs.",
      control: "text",
    },
    children: {
      description: "Content rendered inside the panel.",
      control: "text",
    },
  },
};

export default meta;

export const Default = {
  args: {
    label: "Tab label",
    children: "Panel content",
  },
};
