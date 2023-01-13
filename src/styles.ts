import { PaletteColorOptions } from '@mui/material';
import * as createTheme from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
    primaryDark?: PaletteColorOptions;
  }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }

  interface ThemeOptions {
    status?: {
      danger: React.CSSProperties['color'];
    };
  }
}

declare module '@mui/material' {
  interface Color {
    main?: string;
    contrastText?: string;
  }
}