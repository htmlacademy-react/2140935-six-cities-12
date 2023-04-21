import {createReducer} from '@reduxjs/toolkit';
import {setCurrentCity, loadOffers, setOffersDataLoadingStatus, setError} from './action';
import {DEFAULT_CITY_NAME} from '../const';
import {Offer} from '../types/offer';

type InitialState = {
  selectedCity: string;
  allOffers: Offer[];
  isOffersDataLoading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  selectedCity: DEFAULT_CITY_NAME,
  allOffers: [],
  isOffersDataLoading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      const {selectedCity} = action.payload;
      state.selectedCity = selectedCity;
    })
    .addCase(loadOffers, (state, action) => {
      state.allOffers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
