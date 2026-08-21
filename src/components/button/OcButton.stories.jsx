import { expect } from 'storybook/test';
import OcButton from './OcButton';

const meta = {
  component: OcButton,
  tags: ['autodocs', 'ai-generated'],
  parameters: {
    docs: {
      description: {
        component:
          'A simple button for triggering actions.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'Content rendered inside the button.',
      control: 'text',
    },
    type: {
      description: 'The native button type.',
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
    disabled: {
      description: 'Whether the button is disabled.',
      control: 'boolean',
    },
    onClick: {
      description: 'Called when the button is clicked.',
      control: false,
    },
  },
};

export default meta;

export const Default = {
  args: {
    children: 'Click me',
  },
};

export const Disabled = {
  args: {
    children: 'Click me',
    disabled: true,
  },
};

export const ClickHandler = {
  args: {
    children: 'Click me',
    onClick: () => {},
  },
  play: async ({ canvas, args }) => {
    const button = canvas.getByText('Click me');
    await button.click();

    await expect(button).toBeEnabled();
  },
};
