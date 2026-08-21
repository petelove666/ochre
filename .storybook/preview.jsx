import '../src/theme/brand2/light.css';
import '../src/theme/brand2/dark.css';
import '../src/theme/tokens/light.css';
import '../src/theme/tokens/dark.css';
import '../src/theme/tokens/global.css';
import '../src/styles/global.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  decorators: [(Story) => <Story />],
};

export default preview;