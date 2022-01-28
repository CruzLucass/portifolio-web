import React, { useState } from 'react';
import usePersistedState from './utils/usePersistedState';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from './styles/global';

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import Header from './components/Header';
import Intro from './components/Intro';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title == 'light' ? dark : light);
  }
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header toggleTheme={toggleTheme} />
        <Intro />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;
