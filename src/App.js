import React from 'react';

import Routes from './Routes';
import Navbar from "./components/Navbar"
import { ThemeProvider, CssBaseline } from '@material-ui/core';

import UserContext, { defaultUserContext } from './contexts/user'
import BenefitsContext, { defaultBenefitsContext } from './contexts/benefits'
import theme from './theme'

export default function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={defaultUserContext}>
          <BenefitsContext.Provider value={defaultBenefitsContext}>
            <CssBaseline />
            <Navbar />
            <Routes />
          </BenefitsContext.Provider>
        </UserContext.Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}