import {createReducer} from '@reduxjs/toolkit';
import {setCurrentCity, loadOffers, loadFavoriteOffers, instantAddToFavorite, loadRoom, loadReviews, sendReview, loadNearby, requireAuthorization, setUserEmail, setError} from './action';
import {DEFAULT_CITY_NAME, AuthorizationStatus} from '../const';
import {Offer} from '../types/offer';
import {Review} from '../types/offer';

type InitialState = {
  selectedCity: string;
  allOffers: {
    isLoading: boolean;
    data: Offer[];
  };
  favoriteOffers: {
    isLoading: boolean;
    data: Offer[];
  };
  room: {
    isLoading: boolean;
    data: Offer | null;
  };
  reviews: {
    isLoading: boolean;
    data: Review[];
  };
  sentReview: {
    isLoading: boolean;
    data: {
      comment: string;
      rating: number | null;
    };
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
  allOffers: {
    isLoading: false,
    data: [],
  },
  favoriteOffers: {
    isLoading: false,
    data: [],
  },
  room: {
    isLoading: false,
    data: null,
  },
  reviews: {
    isLoading: false,
    data: [],
  },
  sentReview: {
    isLoading: false,
    data: {
      comment: '',
      rating: null,
    }
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
    .addCase(loadOffers, (state, action) => {
      state.allOffers = action.payload;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    })
    .addCase(instantAddToFavorite, (state, action) => {
      state.favoriteOffers.data = [...state.favoriteOffers.data, action.payload];
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
