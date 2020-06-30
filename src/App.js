import React from 'react';

import Routes from './Routes';
import Navbar from "./components/Navbar"
import { ThemeProvider, CssBaseline } from '@material-ui/core';

import theme from './theme'

export default function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Routes />
      </ThemeProvider>
    </React.Fragment>
  );
}