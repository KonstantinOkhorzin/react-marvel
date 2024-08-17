import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, Global } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';

import App from './app';
import { theme, globalStyles, muiTheme } from './styles';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
        <Global styles={globalStyles} />
      </ThemeProvider>
    </MuiThemeProvider>
  </React.StrictMode>
);
