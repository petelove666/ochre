import { expect } from "storybook/test";
import OcTextInput from "./OcTextInput";

const meta = {
  component: OcTextInput,
  tags: ["autodocs", "ai-generated"],
  parameters: {
    docs: {
      description: {
        component:
          "A simple text input wrapper component. It provides standardized styling for various input types such as text, password, email, and search.",
      },
    },
  },
  argTypes: {
    children: {
      description: "Content rendered inside the text input container.",
      control: false,
    },
    stretch: {
      description:
        "When true, applies the oc-text-input--stretch class to the container div.",
      control: "boolean",
    },
  },
};

export default meta;

export const Default = {
  args: {
    children: (
      <>
        <label htmlFor="default-input">Example</label>
        <input id="default-input" type="text" placeholder="Enter text here" />
      </>
    ),
  },
};

export const WithContent = {
  args: {
    children: (
      <>
        <OcTextInput>
          <label htmlFor="with-content-input">Example</label>
          <input
            id="with-content-input"
            type="text"
            placeholder="Enter text here"
          />
        </OcTextInput>
      </>
    ),
  },
};

export const Stretch = {
  args: {
    stretch: true,
    children: (
      <>
        <label htmlFor="stretch-input">Example</label>
        <input id="stretch-input" type="text" placeholder="Enter text here" />
      </>
    ),
  },
};
