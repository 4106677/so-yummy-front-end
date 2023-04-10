import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store, persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import AuthLayout from './components/AuthLayout/AuthLayout';

import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/so-yummy-front-end">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthLayout>
            <App />
          </AuthLayout>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
