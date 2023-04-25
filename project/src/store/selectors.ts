import {State} from '../types/state';

export const getOffers = (state: State) => state.allOffers.data;

export const getOffersDataLoading = (state: State) => state.allOffers.isLoading;

export const getCurrentCity = (state: State) => state.selectedCity;

export const getAuthorizationStatus = (state: State) => state.authorizationStatus;

export const getFavoriteOffers = (state: State) => state.favoriteOffers.data;

export const getReviews = (state: State) => state.reviews.data;

export const getRoomAndNearby = function(state: State) {
  return {
    roomOffer: state.room.data,
    nearbyOffers: state.nearbyOffers.data,
  };
};

export const getEmail = (state: State) => state.userEmail;

export const getError = (state: State) => state.error;
