import {Offer} from '../../types/offer';
import Card from '../card/card';
import {Link} from 'react-router-dom';

type CardListFavoriteProps = {
  offers: Offer[];
  cities: string[];
}

function CardsListFavorite({offers, cities}: CardListFavoriteProps): JSX.Element {
  const cardType = 'favorite';

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {cities.map((city) => (
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
                  item.isFavorites && item.city === city && <Card key={item.id} offer={item} cardType={cardType} />
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
