import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';

export const setCurrentCity = createAction<{selectedCity: string}>('mainScreen/setCurrentCity');

export const loadOffers = createAction<Offer[]>('mainScreen/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setError = createAction<string | null>('data/setError');
