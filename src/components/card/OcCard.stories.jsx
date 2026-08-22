import { expect } from 'storybook/test';
import OcCard from './OcCard';
import OcButton from '../button/OcButton';

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
        <OcButton>Hover over me</OcButton>
      </>
    ),
  },
};