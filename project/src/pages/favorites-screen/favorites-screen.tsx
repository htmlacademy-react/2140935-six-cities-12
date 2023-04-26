import {Helmet} from 'react-helmet-async';
import {useAppSelector} from '../../hooks';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import CardsListFavorite from '../../components/cards-list/cards-list-favorite';
import {fetchFavoriteOffersAction} from '../../store/api-actions';
import {store} from '../../store';
import {useEffect} from 'react';
import {getFavoriteOffers} from '../../store/selectors';
import FavoritesEmptyScreen from '../favorites-empty-screen/favorites-empty-screen';

function FavoritesScreen(): JSX.Element {

  useEffect(() => {
    store.dispatch(fetchFavoriteOffersAction());
  }, []);

  const favoriteOffers = useAppSelector(getFavoriteOffers);

  if (!favoriteOffers[0]) {
    return <FavoritesEmptyScreen />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>Favorites | 6 Cities</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <CardsListFavorite offers={favoriteOffers} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
