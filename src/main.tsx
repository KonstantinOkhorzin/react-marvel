import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, Global } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './app';
import { theme, globalStyles, muiTheme } from './styles';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={muiTheme}>
          <Provider store={store}>
            <App />
          </Provider>
        </MuiThemeProvider>
        <Global styles={globalStyles} />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
