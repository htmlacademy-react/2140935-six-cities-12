import {Helmet} from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import CardsListFavorite from '../../components/cards-list/cards-list-favorite';

type FavoritesScreenProps = {
  cities: string[];
}

function FavoritesScreen({cities}: FavoritesScreenProps): JSX.Element {
  const allOffers = useAppSelector((state) => state.allOffers);

  return (
    <div className="page">
      <Helmet>
        <title>Favorites | 6 Cities</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <CardsListFavorite offers={allOffers} cities={cities} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
