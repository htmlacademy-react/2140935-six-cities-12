import {useDispatch} from 'react-redux';
import {CITIES_NAMES} from '../../const';
import {createBrowserHistory} from 'history';
import {setCurrentCity} from '../../store/action';
import {Link} from 'react-router-dom';

const browserHistory = createBrowserHistory();

function RandomCity(): JSX.Element {
  const dispatch = useDispatch();
  const randomCity = (CITIES_NAMES[Math.floor(Math.random() * CITIES_NAMES.length)]);

  const handleCityClick = () => {
    dispatch(setCurrentCity({selectedCity: randomCity}));
    browserHistory.push('/');
  };

  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <Link className="locations__item-link" to="/" onClick={handleCityClick}>
          <span>{randomCity}</span>
        </Link>
      </div>
    </section>
  );
}

export default RandomCity;
