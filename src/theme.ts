import { DefaultTheme } from 'react-native-paper';
declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      [key: string]: string;
    }
  }
}

export const theme = {
  ...DefaultTheme,
  colors: {
    primary: '#6495ED',
    secondary: '#26428B',
    light: '#FFFFFF',
    dark: '#000000',
    error: '#FF0010',
  },
};