import {Offer} from '../../types/offer';
import Card from '../card/card';

type CardListNearProps = {
  offers: Offer[];
}

function CardsListNear({offers}: CardListNearProps): JSX.Element {
  const cardType = 'near';

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((item) => (
          <Card key={item.id} offer={item} cardType={cardType} />
        ))}
      </div>
    </section>
  );
}

export default CardsListNear;
