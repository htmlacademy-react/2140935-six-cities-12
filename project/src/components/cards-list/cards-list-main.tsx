import {useState} from 'react';
import {Offer} from '../../types/offer';
import Card from '../card/card';
import SortOptions from './sort-options';

type CardsListMainProps = {
  offers: Offer[];
  city: string;
  onActiveCardIdChange: (id: number | null) => void;
}

function CardsListMain({offers, city, onActiveCardIdChange}: CardsListMainProps): JSX.Element {
  const hotelCount = offers.length;
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState('Popular');

  function handleSortByChange(option: string) {
    setSortBy(option);
  }

  function sortOffers(a: Offer, b: Offer) {
    switch (sortBy) {
      case 'Price: low to high':
        return a.price - b.price;
      case 'Price: high to low':
        return b.price - a.price;
      case 'Top rated first':
        return parseInt(b.rating, 10) - parseInt(a.rating, 10);
      default:
        return 0;
    }
  }

  const actualOffers = [...offers].sort(sortOffers);

  const onMouseOver = (id: number) => {
    setActiveCardId(id);
    if (onActiveCardIdChange) {
      onActiveCardIdChange(id);
    }
  };

  const onMouseLeave = () => setActiveCardId(null);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{hotelCount} places to stay in {city}</b>
      <SortOptions sortBy={sortBy} onChange={handleSortByChange} />
      <div className="cities__places-list places__list tabs__content" >
        {actualOffers.map((item) => (
          <Card
            key={item.id}
            offer={item}
            cardType="main"
            isActive={activeCardId === item.id}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
          />
        ))}
      </div>
    </section>
  );
}

export default CardsListMain;
