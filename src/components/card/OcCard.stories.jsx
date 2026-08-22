import { expect } from 'storybook/test';
import OcCard from './OcCard';

const meta = {
  component: OcCard,
  tags: ['autodocs', 'ai-generated'],
  parameters: {
    docs: {
      description: {
        component:
          'A simple container for grouping related content. It provides a standardized card surface with padding and border styling.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'Content rendered inside the card.',
      control: false,
    },
  },
};

export default meta;

export const Default = {
  args: {
    children: <p>Card</p>,
  },
};

export const WithContent = {
  args: {
    children: (
      <>
        <p>Options</p>
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
        </ul>
      </>
    ),
  },
};

export const CssCheck = {
  args: {
    children: <p>Card</p>,
  },
  play: async ({ canvas }) => {
    const text = canvas.getByText('Card');
    const card = text.closest('.oc-card');

    await expect(getComputedStyle(card).backgroundColor).toBe('rgb(240, 240, 240)');
  },
};
