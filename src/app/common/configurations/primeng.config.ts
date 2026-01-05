import { providePrimeNG } from 'primeng/config';
import Nora from '@primeng/themes/nora';
import { definePreset } from '@primeng/themes';

const CustomPreset = definePreset(Nora, {
  semantic: {
    primary: {
      50: 'hsl(44, 100%, 95%)',
      100: 'hsl(44, 100%, 90%)',
      200: 'hsl(44, 100%, 80%)',
      300: 'hsl(44, 100%, 70%)',
      400: 'hsl(44, 100%, 60%)',
      500: 'hsl(44, 100%, 50%)',
      600: 'hsl(44, 100%, 40%)',
      700: 'hsl(44, 100%, 30%)',
      800: 'hsl(44, 100%, 20%)',
      900: 'hsl(44, 100%, 10%)',
      950: 'hsl(44, 100%, 5%)',
    },
  },
});

export function providePrimeNGConfig() {
  return providePrimeNG({
    theme: {
      preset: CustomPreset,
      options: {
        prefix: 'p',
        darkModeSelector: '.app-dark',
        cssLayer: false,
      },
    },
    ripple: true,
  });
}
