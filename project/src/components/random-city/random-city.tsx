import {useDispatch} from 'react-redux';
import {createBrowserHistory} from 'history';
import {setCurrentCity} from '../../store/action';
import {Link} from 'react-router-dom';
import {getRandomCity} from './utils';
import {AppRoute} from '../../const';

const browserHistory = createBrowserHistory();

function RandomCity(): JSX.Element {
  const dispatch = useDispatch();
  const randomCity = getRandomCity();

  const handleCityClick = () => {
    dispatch(setCurrentCity({selectedCity: randomCity}));
    browserHistory.push(AppRoute.Root);
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
