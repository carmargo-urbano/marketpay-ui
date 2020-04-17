import React, { useState, useRef } from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

// config do Reactotron deve ser importada antes da store do redux
import './config/ReactotronConfig';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';

import Routes from './routes';
import store from './store';
import history from './services/history';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Banner />
         
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
