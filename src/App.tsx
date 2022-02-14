import React from 'react';
import usePersistedState from './utils/usePersistedState';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from './styles/global';

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header toggleTheme={toggleTheme} />
        <Intro />
        <About />
        <Projetos />
        <GlobalStyle />
        <Contato />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
