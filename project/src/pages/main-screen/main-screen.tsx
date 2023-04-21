import {Helmet} from 'react-helmet-async';
import Header from '../../components/header/header';
import CardsListMain from '../../components/cards-list/cards-list-main';
import Map from '../../components/map/map';
import {CITIES} from '../../const';
import CityList from '../../components/city-list/city-list';
import {useAppSelector} from '../../hooks';
import {getOffers, getCurrentCity} from '../../store/selectors';

function MainScreen(): JSX.Element {
  const offers = useAppSelector(getOffers);
  const currentCityTitle = useAppSelector(getCurrentCity);
  const currentCity = CITIES.find((city) => city.title === currentCityTitle);
  const mainOffers = offers.filter((offer) => offer.city === currentCityTitle);
  if (!currentCity) {
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
            <CardsListMain offers={mainOffers} city={currentCityTitle} />
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={currentCity} offers={mainOffers} mapHeight={800} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
