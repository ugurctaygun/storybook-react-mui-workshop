import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  brandTitle: 'Connecta UI',
  brandUrl: 'https://example.com',
  brandImage: (process.env.NODE_ENV === 'production') ? 'logo.png' : '/logo.png',
  brandTarget: '_self',
});