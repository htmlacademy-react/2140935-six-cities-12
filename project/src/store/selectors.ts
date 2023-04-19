import {State} from '../types/state';

export const getOffers = (state: State) => state.allOffers;

export const getCurrentCity = (state: State) => state.selectedCity;
