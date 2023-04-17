import { Link } from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity, loadOffers} from '../../store/action';
import {CITIES} from '../../const';

function CityList(): JSX.Element {
  const activeCity = useAppSelector((state) => state.selectedCity);
  const dispatch = useAppDispatch();
  const cityTitles = CITIES.map((city) => city.title);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cityTitles.map((cityTitle) => (
            <li className="locations__item" key={cityTitle}>
              <Link
                to="/"
                className={`locations__item-link  tabs__item ${activeCity === cityTitle ? 'tabs__item--active' : ''}`}
                onClick={() => {
                  dispatch(changeCity({selectedCity: cityTitle}));
                  dispatch(loadOffers());
                }}
              >
                <span>{cityTitle}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CityList;
