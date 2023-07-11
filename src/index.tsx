import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import Theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Theme>
        <App />
      </Theme>
    </LocalizationProvider>
  </Provider>
);
