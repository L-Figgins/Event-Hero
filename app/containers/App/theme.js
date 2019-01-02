/* eslint-disable */
import React from 'react';
import ThemeProvider from 'styled-components';
import PropTypes from 'prop-types';

const theme = {
  breakpoints: {
    xs: 0, // zero represents the default (for mobile-first approach),
    sm: '25rem',
    md: '48rem',
    lg: '80rem',
    xl: '100rem',
  },
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 96],
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  colors: {
    black: '#000',
    white: '#fff',
  },
  primary: 'tomato',
};

export default theme;
