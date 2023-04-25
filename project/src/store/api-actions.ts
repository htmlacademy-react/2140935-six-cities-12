import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {Offer} from '../types/offer.js';
import {loadOffers, loadFavoriteOffers, setFavoriteStatus, loadRoom, loadReviews, sendReview, loadNearby, requireAuthorization, setUserEmail, setError} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const';
import {store} from './';
import {Review} from '../types/offer.js';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import { SendReviewPayload } from './action';

export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR
    );
  },
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(loadOffers({isLoading: true, data: []}));
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(loadOffers({isLoading: false, data}));
  },
);

export const fetchFavoriteOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(loadFavoriteOffers({isLoading: true, data: []}));
    const {data} = await api.get<Offer[]>(APIRoute.Favorites);
    dispatch(loadFavoriteOffers({isLoading: false, data}));
  },
);

export const setFavoriteAction = createAsyncThunk<void, {
  favoriteStatus: number;
  id: number;
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/setFavorite',
  async ({id, favoriteStatus}, {dispatch, extra: api}) => {
    dispatch(setFavoriteStatus({favoriteStatus}));
    await api.post(`${APIRoute.Favorites}/${id}/${favoriteStatus}`);
  },
);

export const fetchRoomOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchRoom',
  async (id, {dispatch, extra: api}) => {
    dispatch(loadRoom({isLoading: true, data: null}));
    const {data} = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
    dispatch(loadRoom({isLoading: false, data}));
  },
);

export const fetchReviewsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (id, {dispatch, extra: api}) => {
    dispatch(loadReviews({isLoading: true, data: []}));
    const {data} = await api.get<Review[]>(`${APIRoute.Reviews}/${id}`);
    dispatch(loadReviews({isLoading: false, data}));
  },
);

export const postReviewsAction = createAsyncThunk<void, {
  review: SendReviewPayload;
  id: number;
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReview',
  async ({review, id}, {dispatch, extra: api}) => {
    dispatch(sendReview({comment: '', rating: 0}));
    const {data} = await api.post<Review>(`${APIRoute.Reviews}/${id}`, review);
    dispatch(sendReview(data));
  },
);

export const fetchNearbyAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearby',
  async (id, {dispatch, extra: api}) => {
    dispatch(loadNearby({isLoading: true, data: []}));
    const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
    dispatch(loadNearby({isLoading: false, data}));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserEmail({userEmail: email}));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
