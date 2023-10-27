import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import Theme from './theme';
import { PersistGate } from 'redux-persist/integration/react';
import { HelmetProvider } from 'react-helmet-async';

//...
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: process.env.REACT_APP_LINK_SENTRY || '',
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/]
    }),
    new Sentry.Replay()
  ],
  environment: process.env.NODE_ENV,
  beforeSend(event, hint) {
    console.log(event, hint);
    // Check if it is an exception, and if so, show the report dialog
    if (event.exception) {
      Sentry.showReportDialog({
        eventId: event.event_id,
        title: 'Похоже, что-то пошло не так',
        subtitle:
          'Если вы хотите помочь нам улучшить наш сервис, пожалуйста, отправьте нам отчет об ошибке.',
        subtitle2: 'Мы будем очень признательны за вашу помощь.',
        lang: 'ru',
        labelName: 'Ваше имя',
        labelEmail: 'Ваш email',
        labelComments: 'Что произошло?',
        labelClose: 'Закрыть',
        labelSubmit: 'Отправить',
        namePlaceholder: 'Ваше имя',
        successMessage:
          'Спасибо за ваш отчет!  Мы постараемся исправить эту ошибку в ближайшее время.',
        user: {
          name: '',
          email: ''
        },
        onLoad: () => {
          const name = document.getElementById('id_name');
          const email = document.getElementById('id_email');
          name && name.setAttribute('placeholder', '');
          email && email.setAttribute('placeholder', '');
        }
      });
    }
    return event;
  },
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Theme>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </Theme>
      </LocalizationProvider>
    </PersistGate>
  </Provider>
);
