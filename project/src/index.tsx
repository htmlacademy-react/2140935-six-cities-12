import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import App from './components/app/app';
import {store} from './store';
import {CITIES} from './const';

const citiesNames = CITIES.map((city) => city.title);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        offers = {offers}
        reviews = {reviews}
        cities = {citiesNames}
      />
    </Provider>
  </React.StrictMode>,
);
