import { Link } from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setCurrentCity} from '../../store/action';
import {CITIES_NAMES} from '../../const';
import { getCurrentCity } from '../../store/selectors';

function CityList(): JSX.Element {
  const currentCity = useAppSelector(getCurrentCity);
  const dispatch = useAppDispatch();

  const handleCityClick = (cityName: string) => {
    dispatch(setCurrentCity({selectedCity: cityName}));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES_NAMES.map((cityName) => (
            <li className="locations__item" key={cityName}>
              <Link
                to="/"
                className={`locations__item-link  tabs__item ${currentCity === cityName ? 'tabs__item--active' : ''}`}
                onClick={() => handleCityClick(cityName)}
              >
                <span>{cityName}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CityList;
