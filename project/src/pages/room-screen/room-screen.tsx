import {useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {useAppSelector} from '../../hooks';
import Header from '../../components/header/header';
import CardsListNear from '../../components/cards-list/cards-list-near';
import {RATIO} from '../../const';
import Map from '../../components/map/map';
import {fetchRoomOfferAction, fetchReviewsAction, fetchNearbyAction} from '../../store/api-actions';
import {store} from '../../store';
import ReviewList from '../../components/review-list/review-list';
import {useEffect, useState} from 'react';
import {getRoomAndNearby} from '../../store/selectors';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {setFavoriteAction, fetchFavoriteOffersAction} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks';
import {createBrowserHistory} from 'history';
import {AppRoute} from '../../const';
import {AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/selectors';
import {instantAddToFavorite} from '../../store/action';

const browserHistory = createBrowserHistory();

function RoomScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const [isFavoriteFlag, setIsFavoriteFlag] = useState(false);
  const {roomOffer: offer, nearbyOffers} = useAppSelector(getRoomAndNearby);
  const params = useParams();

  useEffect(() => {
    store.dispatch(fetchFavoriteOffersAction());
  }, [isFavoriteFlag]);

  useEffect(() => {
    if (params.id) {
      store.dispatch(fetchRoomOfferAction(parseInt(params.id, 10)));
      store.dispatch(fetchReviewsAction(parseInt(params.id, 10)));
      store.dispatch(fetchNearbyAction(parseInt(params.id, 10)));
    }
  }, [params.id]);

  if (!offer) {
    return <NotFoundScreen />;
  }

  const {id, title, description, images, rating, isPremium, type, goods, bedrooms, maxAdults, price, host, city, isFavorite} = offer;
  const ratePercent = parseFloat(rating) * RATIO;

  const handleBookmarkButtonClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      browserHistory.push(AppRoute.Login);
    } else {
      const favoriteStatus = isFavorite ? 0 : 1;
      dispatch(setFavoriteAction({id, favoriteStatus}))
        .then(() => setIsFavoriteFlag(!isFavoriteFlag))
        .then(() => store.dispatch(instantAddToFavorite(offer)));
    }
  };

  return (
    <div className="page">
      <Helmet>
        <title>{title} | 6 Cities</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image) => (
                <div key={image} className="property__image-wrapper">
                  <img className="property__image" src={image} alt={title} />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className={isPremium ? 'property__mark' : ''}>
                <span>{isPremium ? 'Premium' : ''}</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title} ({city.name})
                </h1>
                <button
                  onClick={handleBookmarkButtonClick}
                  className={`property__bookmark-button ${(isFavorite && !isFavoriteFlag) || (!isFavorite && isFavoriteFlag) ? 'property__bookmark-button--active' : ''} button`}
                  type="button"
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${ratePercent}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((ins) => (
                    <li key={ins} className="property__inside-item">{ins}</li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${host.isPro ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  <span className="property__user-status">
                    {host.isPro ? 'Pro' : null}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewList roomId={id} />
            </div>
          </div>
          <section className="property__map map">
            <Map city={city} offers={[...nearbyOffers, offer]} currentOffer={offer} mapHeight={580} />
          </section>
        </section>
        <div className="container">
          <CardsListNear offers={nearbyOffers} />
        </div>
      </main>
    </div>
  );
}

export default RoomScreen;
