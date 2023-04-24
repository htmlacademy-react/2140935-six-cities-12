export const RATIO = 20; // проценты за 1 балл оценки

export const STARS = 5; // максимальный балл оценки

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const TIMEOUT_SHOW_ERROR = 2000;

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const DEFAULT_CITY_NAME = 'Paris';

export const CITIES = [
  {
    title: 'Paris',
    lat: 48.8566553943508,
    lng: 2.35229666406198,
    zoom: 10,
  },
  {
    title: 'Cologne',
    lat: 50.9375553943508,
    lng: 6.96039666406198,
    zoom: 10,
  },
  {
    title: 'Brussels',
    lat: 50.8476553943508,
    lng: 4.35729666406198,
    zoom: 10,
  },
  {
    title: 'Amsterdam',
    lat: 52.3676553943508,
    lng: 4.90409666406198,
    zoom: 10,
  },
  {
    title: 'Hamburg',
    lat: 53.5488553943508,
    lng: 9.98729666406198,
    zoom: 10,
  },
  {
    title: 'Dusseldorf',
    lat: 51.2277553943508,
    lng: 6.77359666406198,
    zoom: 10,
  }
];

export const CITIES_NAMES = CITIES.map((city) => city.title);

export enum APIRoute {
  Offers = '/hotels',
  Favorites = '/favorite',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
}
