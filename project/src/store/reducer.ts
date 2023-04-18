import {createReducer} from '@reduxjs/toolkit';
import {setCurrentCity, loadOffers} from './action';
import {offers} from '../mocks/offers';
import {DEFAULT_CITY_NAME} from '../const';

const initialState = {
  selectedCity: DEFAULT_CITY_NAME,
  allOffers: offers.filter((offer) => offer.city === DEFAULT_CITY_NAME),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      const {selectedCity} = action.payload;
      state.selectedCity = selectedCity;
    })
    .addCase(loadOffers, (state) => {
      state.allOffers = offers;
    });
});

export {reducer};
