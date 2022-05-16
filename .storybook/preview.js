export const parameters = {
  options: {
    storySort: {
      order: ['Getting Started', ['Introduction'], 'Core', 'Project A', 'Project B'],
    },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  scope: {
    list: [
      { value: 'developers-a', title: 'Developers (Team A)' },
      { value: 'developers-b', title: 'Developers (Team B)' },
      { value: 'designers', title: 'Designers' },
    ],
    defaultValue: undefined,
  },
};

