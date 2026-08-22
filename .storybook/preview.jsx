import { useEffect } from 'react';
import '../src/theme/brand2/light.css';
import '../src/theme/brand2/dark.css';
import '../src/theme/tokens/light.css';
import '../src/theme/tokens/dark.css';
import '../src/theme/tokens/global.css';
import '../src/styles/global.css';

const withTheme = (Story, context) => {
  const theme = context.globals.theme || 'system';

  useEffect(() => {
    if (theme === 'system') {
      document.documentElement.removeAttribute('data-oc-theme');
    } else {
      document.documentElement.setAttribute('data-oc-theme', theme);
    }
  }, [theme]);

  return <Story />;
};

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  globalTypes: {
    theme: {
      description: 'Light/dark theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'system', title: 'System theme', icon: 'browser' },
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'system',
  },
  parameters: {
    options: {
      storySort: {
        order: ['Introduction', 'Foundations', ['Theming'], 'components', 'Example'],
      },
    },
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
  decorators: [withTheme],
};

export default preview;