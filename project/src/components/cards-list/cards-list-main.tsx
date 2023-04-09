import {useState} from 'react';
import {Offer} from '../../types/offer';
import Card from '../card/card';

type CardsListMainProps = {
  offers: Offer[];
}

function CardsListMain({offers}: CardsListMainProps): JSX.Element {
  const cardType = 'main';
  const hotelCount = offers.length;
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const onMouseOver = (id: number) => setActiveCardId(id);
  const onMouseLeave = () => setActiveCardId(null);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{hotelCount} places to stay in Amsterdam</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex={0}>
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex={0}>Popular</li>
          <li className="places__option" tabIndex={0}>Price: low to high</li>
          <li className="places__option" tabIndex={0}>Price: high to low</li>
          <li className="places__option" tabIndex={0}>Top rated first</li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content" >
        {offers.map((item) => (
          <Card
            key={item.id}
            offer={item}
            cardType={cardType}
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
