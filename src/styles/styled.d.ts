import "styled-components";

declare module "styled-components" {
  export interface DefaultThem {
    title: string;
    color: {
      primary: string;
      secondary: string;
      tertiary: string;

      white: string;
      black: string;
      gray: string;
      success: string;
      information: string;
      warning: string;
    },
  }
}
