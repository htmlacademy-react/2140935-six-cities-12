import {useState} from 'react';
import {Offer} from '../../types/offer';
import Card from '../card/card';
import {Link} from 'react-router-dom';
import {CITIES_NAMES} from '../../const';

type CardListFavoriteProps = {
  offers: Offer[];
}

function CardsListFavorite({offers}: CardListFavoriteProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const onMouseOver = (id: number) => setActiveCardId(id);
  const onMouseLeave = () => setActiveCardId(null);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {CITIES_NAMES.map((city) => (
          offers.some((item) => item.city === city) && (
            <li key={city} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to="/">
                    <span>{city}</span>
                  </Link>
                </div>
              </div>
              <div className="favorites__places">
                {offers.map((item) => (
                  item.isFavorites && item.city === city &&
                  <Card
                    key={item.id}
                    offer={item}
                    cardType="favorite"
                    isActive={activeCardId === item.id}
                    onMouseOver={onMouseOver}
                    onMouseLeave={onMouseLeave}
                  />
                ))}
              </div>
            </li>
          )
        ))}
      </ul>
    </section>
  );
}

export default CardsListFavorite;
