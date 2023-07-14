import React, { ReactNode } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";


const round = (num: number) => 
    num
        .toFixed(7)
        .replace(/(\.[0-9]+?)0+$/, '$1')
        .replace(/\.0$/, '')

const rem = (px: number) => `${round(px / 16)}rem`

interface ThemeProps {
    children: ReactNode
}

export const theme: DefaultTheme = {
    colors: {
        background: '#FFFFFF',
        white: '#FFFFFF',
        black: '#373737',
        orange: '#FE7E02 ',
        yellow: '#F9B24E',
        blue: '#4088CB',
        pink: '#FF6489',
        secondary: '#EDEDED',
    },
    fontFamily: {
        heading: ['IBM Plex Sans', 'sans-serif'].join(','),
        sans: ['Noto Sans', 'Arial', 'Helvetica', 'sans-serif'].join(','),
        mono: ['IBM Plex Sans', 'serif'].join(',')
    },
    fontSize: {
        xs: rem(10),
        sm: rem(12),
        md: rem(14),
        base: rem(16),
        lg: rem(18),
        xl: rem(20),
        '2xl': rem(24),
        '3xl': rem(32),
        '4xl': rem(40),
        '5xl': rem(64)
    }
}

export function Theme({ children }: ThemeProps) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}