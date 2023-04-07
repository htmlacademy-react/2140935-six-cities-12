import React from 'react';
import ReactDOM from 'react-dom/client';

import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import App from './components/app/app';

const Setting = {
  Cities: ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'],
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      offers = {offers}
      reviews = {reviews}
      cities = {Setting.Cities}
    />
  </React.StrictMode>,
);
