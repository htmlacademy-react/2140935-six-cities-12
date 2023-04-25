import {createReducer} from '@reduxjs/toolkit';
import {setCurrentCity, setActiveCardId, loadOffers, loadFavoriteOffers, setFavoriteStatus, loadRoom, loadReviews, sendReview, loadNearby, requireAuthorization, setUserEmail, setError} from './action';
import {DEFAULT_CITY_NAME, AuthorizationStatus} from '../const';
import {Offer} from '../types/offer';
import {Review} from '../types/offer';

type InitialState = {
  selectedCity: string;
  activeCardId: number;
  allOffers: {
    isLoading: boolean;
    data: Offer[];
  };
  favoriteOffers: {
    isLoading: boolean;
    data: Offer[];
  };
  favoriteStatus: number;
  room: {
    isLoading: boolean;
    data: Offer | null;
  };
  reviews: {
    isLoading: boolean;
    data: Review[];
  };
  sentReview: {
    comment: string;
    rating: number | null;
  };
  nearbyOffers: {
    isLoading: boolean;
    data: Offer[];
  };
  authorizationStatus: AuthorizationStatus;
  userEmail: string;
  error: string | null;
};

const initialState: InitialState = {
  selectedCity: DEFAULT_CITY_NAME,
  activeCardId: 0,
  allOffers: {
    isLoading: false,
    data: [],
  },
  favoriteOffers: {
    isLoading: false,
    data: [],
  },
  favoriteStatus: 0,
  room: {
    isLoading: false,
    data: null,
  },
  reviews: {
    isLoading: false,
    data: [],
  },
  sentReview: {
    comment: '',
    rating: null,
  },
  nearbyOffers: {
    isLoading: false,
    data: [],
  },
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: '',
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      const {selectedCity} = action.payload;
      state.selectedCity = selectedCity;
    })
    .addCase(setActiveCardId, (state, action) => {
      const {activeCardId} = action.payload;
      state.activeCardId = activeCardId;
    })
    .addCase(loadOffers, (state, action) => {
      state.allOffers = action.payload;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    })
    .addCase(setFavoriteStatus, (state, action) => {
      state.favoriteStatus = action.payload.favoriteStatus;
    })
    .addCase(loadRoom, (state, action) => {
      state.room = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(sendReview, (state, action) => {
      state.sentReview = action.payload;
    })
    .addCase(loadNearby, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      const {userEmail} = action.payload;
      state.userEmail = userEmail;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
