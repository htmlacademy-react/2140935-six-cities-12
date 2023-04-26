import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import {Review} from '../types/offer';
import {AuthorizationStatus} from '../const';

type LoadOffersPayload = {
  isLoading: boolean;
  data: Offer[];
};

type LoadRoomPayload = {
  isLoading: boolean;
  data: Offer | null;
};

type LoadReviewPayload = {
  isLoading: boolean;
  data: Review[];
};

export type SendReviewPayload = {
    comment: string;
    rating: number | null;
};

export const setCurrentCity = createAction<{selectedCity: string}>('mainScreen/setCurrentCity');

export const loadOffers = createAction<LoadOffersPayload>('mainScreen/loadOffers');

export const loadFavoriteOffers = createAction<LoadOffersPayload>('favoriteScreen/loadFavoriteOffers');

export const loadRoom = createAction<LoadRoomPayload>('roomScreen/loadRoom');

export const loadReviews = createAction<LoadReviewPayload>('roomScreen/loadReviews');

export const sendReview = createAction<SendReviewPayload>('data/sendReview');

export const loadNearby = createAction<LoadOffersPayload>('roomScreen/loadNearby');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setUserEmail = createAction<{userEmail: string}>('user/email');

export const setError = createAction<string | null>('data/setError');
