import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import CardFavorite from '../../components/card/card-favorite';
import {Offers} from '../../types/offer';

type FavoritesScreenProps = {
  offers: Offers;
  cities: string[];
}

function FavoritesScreen({offers, cities}: FavoritesScreenProps): JSX.Element {

  return (
    <div className="page">
      <Helmet>
        <title>Favorites | 6 Cities</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
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
                        item.isFavorites && item.city === city && <CardFavorite key={item.id} offer={item} />
                      ))}
                    </div>
                  </li>
                )
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
