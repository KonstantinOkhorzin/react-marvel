import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, Global } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

import App from './app';
import { theme, globalStyles, muiTheme } from './styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={muiTheme}>
          <App />
        </MuiThemeProvider>
        <Global styles={globalStyles} />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
