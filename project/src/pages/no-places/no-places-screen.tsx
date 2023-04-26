import {Helmet} from 'react-helmet-async';
import Header from '../../components/header/header';
import CityList from '../../components/city-list/city-list';
import {useAppSelector} from '../../hooks';
import {getCurrentCity} from '../../store/selectors';

function NoPlacesScreen(): JSX.Element {
  const currentCity = useAppSelector(getCurrentCity);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <CityList />
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in {currentCity}</p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NoPlacesScreen;
