import {useState} from 'react';
import {Offer} from '../../types/offer';
import Card from '../card/card';
import SortOptions from './sort-options';
import {sortOffers} from './utils';

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

  const actualOffers = [...offers].sort(sortOffers(sortBy));

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
