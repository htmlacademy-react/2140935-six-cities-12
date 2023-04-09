import {Helmet} from 'react-helmet-async';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import CardsListFavorite from '../../components/cards-list/cards-list-favorite';
import {Offer} from '../../types/offer';

type FavoritesScreenProps = {
  offers: Offer[];
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
          <CardsListFavorite offers={offers} cities={cities} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
