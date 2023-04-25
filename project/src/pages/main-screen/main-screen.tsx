import {Helmet} from 'react-helmet-async';
import Header from '../../components/header/header';
import CardsListMain from '../../components/cards-list/cards-list-main';
import Map from '../../components/map/map';
import CityList from '../../components/city-list/city-list';
import {useAppSelector} from '../../hooks';
import {getOffers, getCurrentCity} from '../../store/selectors';
import { useState } from 'react';
import { Offer } from '../../types/offer';

function MainScreen(): JSX.Element {
  const offers = useAppSelector(getOffers);
  const currentCityName = useAppSelector(getCurrentCity);
  const mainOffers = offers.filter((offer) => offer.city.name === currentCityName);
  const {city} = mainOffers[0];
  const [activeOffer, setActiveOffer] = useState<Offer | null>(mainOffers[0]);

  if (!mainOffers[0]) {
    return <>Not found</>;
  }

  function handleActiveCardIdChange(id: number | null) {
    if (id === null) {
      setActiveOffer(null);
    } else {
      const newActiveOffer = mainOffers.find((offer) => offer.id === id) || null;
      setActiveOffer(newActiveOffer);
    }
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
            <CardsListMain offers={mainOffers} city={currentCityName} onActiveCardIdChange={handleActiveCardIdChange} />
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city} offers={mainOffers} currentOffer={activeOffer} mapHeight={800} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
