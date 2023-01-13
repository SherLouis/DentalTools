import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import { darkTheme, lightTheme } from '../../theme';
import DentalExamNoteGeneratorApp from '../DentalExamNoteGeneratorApp/DentalExamNoteGeneratorApp';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <DentalExamNoteGeneratorApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}