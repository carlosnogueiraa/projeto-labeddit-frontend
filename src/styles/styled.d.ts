import "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius?: string

        colors: {
            background: string;
            white: string;
            black: string;
            orange: string;
            yellow: string;
            blue: string;
            pink: string;
            secondary: string;
        }
        fontFamily: {
            heading: string;
            sans: string;
            mono: string;
        }
        fontSize: {
            xs: string;
            sm: string;
            md: string;
            base: string;
            lg: string;
            xl: string;
            '2xl': string;
            '3xl': string;
            '4xl': string;
            '5xl': string;
        }
    }
}