import {CITIES_NAMES} from '../../const';

export function getRandomCity() {
  return CITIES_NAMES[Math.floor(Math.random() * CITIES_NAMES.length)];
}
