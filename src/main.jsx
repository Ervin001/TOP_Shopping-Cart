import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { createGlobalStyle } from 'styled-components';

// global reset
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    display: flex;
    margin: 0 auto;

    max-width: 120rem;

    img {
      width: 100%;
      height: 100%;
    }

    #root {
      width: 100%;
    }
  }

`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
