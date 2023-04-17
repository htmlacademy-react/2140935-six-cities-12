import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers} from './action';
import {offers} from '../mocks/offers';
import {DEFAULT_CITY_NAME} from '../const';

const initialState = {
  selectedCity: DEFAULT_CITY_NAME,
  mainScreenOffers: offers.filter((offer) => offer.city === DEFAULT_CITY_NAME),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {selectedCity} = action.payload;
      state.selectedCity = selectedCity;
    })
    .addCase(loadOffers, (state) => {
      state.mainScreenOffers = offers.filter((offer) => offer.city === state.selectedCity);
    });
});

export {reducer};
