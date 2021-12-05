import { app } from '@storybook/vue3';

import Vuex from 'vuex';

//👇 Storybook Vue app being extended and registering the library
app.use(Vuex);

export const decorators = [
  (story) => ({
    components: { story },
    template: '<div style="margin: 3em;"><story /></div>',
  }),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
