import React, { useState, useRef } from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

// config do Reactotron deve ser importada antes da store do redux
import './config/ReactotronConfig';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

import { useOnClickOutside } from './util/hook';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';

import Routes from './routes';
import store from './store';
import history from './services/history';


function App() {

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router history={history}>
          <div ref={node}>
            <FocusLock disabled={!open}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </div>
          <Header />
         
         
          <Routes />
          <GlobalStyle />
          
          <Footer />
          <ToastContainer autoClose={3000} />
        </Router>
      </Provider>
    </ThemeProvider>
  );
}
export default App;
