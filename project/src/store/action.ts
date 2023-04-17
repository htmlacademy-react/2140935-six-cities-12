import {createAction} from '@reduxjs/toolkit';

//export const changeCity = createAction('mainScreen/changeCity');
//export const changeCity = createAction<{city:City}>('changeCity');
//export const changeCity = createAction('mainScreen/changeCity');

export const changeCity = createAction<{selectedCity: string}>('mainScreen/changeCity');

export const loadOffers = createAction('mainScreen/loadOffers');
