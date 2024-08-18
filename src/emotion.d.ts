import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      main: string;
      dark: string;
      grey: string;
      background: string;
      text: string;
      success: string;
    };
    fontWeights: {
      body: number;
      heading: number;
    };
    fontSizes: {
      extraSmall: string;
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
    };
    lineHeights: {
      body: number;
      heading: number;
    };
    shadows: Array<string>;

    animation: {
      transform: string;
      color: string;
    };

    breakpoints: {
      mobile: string;
      tablet: string;
      laptop: string;
    };
  }
}
