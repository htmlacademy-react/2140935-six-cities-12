import {Offer} from '../../types/offer';
import {SortOption} from '../../const';

export function sortOffers(sortBy: string) {
  return function(a: Offer, b: Offer) {
    switch (sortBy) {
      case SortOption.PRICE_LOW_TO_HIGH:
        return a.price - b.price;
      case SortOption.PRICE_HIGH_TO_LOW:
        return b.price - a.price;
      case SortOption.TOP_RATED_FIRST:
        return parseInt(b.rating, 10) - parseInt(a.rating, 10);
      default:
        return 0;
    }
  };
}
