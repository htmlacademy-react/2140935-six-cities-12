import {useState} from 'react';
import {Offer} from '../../types/offer';
import Card from '../card/card';

type CardListNearProps = {
  offers: Offer[];
}

function CardsListNear({offers}: CardListNearProps): JSX.Element {
  const cardType = 'near';
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const onMouseOver = (id: number) => setActiveCardId(id);
  const onMouseLeave = () => setActiveCardId(null);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
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

export default CardsListNear;
