import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import storeConfig from './store/store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = storeConfig();
const rootEl = document.getElementById('root');

if (rootEl) {
  const root = createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </Provider>
    </React.StrictMode>
  );
}

registerServiceWorker();
