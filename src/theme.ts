import { DefaultTheme } from 'react-native-paper';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      light: string;
      dark: string;
    }

    // interface Theme {
    //   myOwnProperty?: boolean;
    // }
  }
}

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6495ED',
    secondary: '#26428B',
    light: '#FFFFFF',
    dark: '#000000',
    error: '#FF0010',
  },
};