import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      highlight: string;
      borderHeader: string;

      background: string;
      text: string;
      textSecundary: string;
    };
  }
}
