import {createAction} from '@reduxjs/toolkit';

export const setCurrentCity = createAction<{selectedCity: string}>('mainScreen/setCurrentCity');

export const loadOffers = createAction('mainScreen/loadOffers');
