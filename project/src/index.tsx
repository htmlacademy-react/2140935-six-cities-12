import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {reviews} from './mocks/reviews';
import App from './components/app/app';
import {store} from './store';
import {CITIES_NAMES} from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        reviews = {reviews}
        cities = {CITIES_NAMES}
      />
    </Provider>
  </React.StrictMode>,
);
