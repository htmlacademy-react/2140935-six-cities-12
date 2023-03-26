import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import Header from '../../components/header/header';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Not found 404</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--index">
        <h1 className="property__name">
          Not found 404
        </h1>
        <h1 className="property__name">
          <Link className="locations__item-link tabs__item" to="/">
            Go to homepage
          </Link>
        </h1>
      </main>
    </div>
  );
}

export default NotFoundScreen;
