import {Helmet} from 'react-helmet-async';
import Header from '../../components/header/header';
import CardsListMain from '../../components/cards-list/cards-list-main';
import Map from '../../components/map/map';
import CityList from '../../components/city-list/city-list';
import {useAppSelector} from '../../hooks';
import {getOffers, getCurrentCity} from '../../store/selectors';

function MainScreen(): JSX.Element {
  const offers = useAppSelector(getOffers);
  const currentCityName = useAppSelector(getCurrentCity);
  const mainOffers = offers.filter((offer) => offer.city.name === currentCityName);
  const {city} = mainOffers[0];
  const offer = mainOffers[0];

  if (!mainOffers[0]) {
    return <>Not found</>;
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList />
        <div className="cities">
          <div className="cities__places-container container">
            <CardsListMain offers={mainOffers} city={currentCityName} />
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city} offers={mainOffers} currentOffer={offer} mapHeight={800} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
