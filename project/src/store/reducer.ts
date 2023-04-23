import {createReducer} from '@reduxjs/toolkit';
import {setCurrentCity, loadOffers, loadComments, loadNearby, setOffersDataLoadingStatus, setError} from './action';
import {DEFAULT_CITY_NAME} from '../const';
import {Offer} from '../types/offer';
import {Review} from '../types/offer';

type InitialState = {
  selectedCity: string;
  allOffers: Offer[];
  comments: Review[];
  nearbyOffers: Offer[];
  isOffersDataLoading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  selectedCity: DEFAULT_CITY_NAME,
  allOffers: [],
  comments: [],
  nearbyOffers: [],
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
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadNearby, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
