import {useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';

import {Offer} from '../../types/offer';
import {Review} from '../../types/offer';
import Header from '../../components/header/header';
import CardsListNear from '../../components/cards-list/cards-list-near';
import ReviewCard from '../../components/review-card/review-card';
import Form from '../../components/form/form';
import {RATIO} from '../../const';
import Map from '../../components/map/map';
import {DEFAULT_CITY} from '../../mocks/city';

type RoomScreenProps = {
  offers: Offer[];
  reviews: Review[];
};

function RoomScreen({offers, reviews}: RoomScreenProps): JSX.Element {
  const params = useParams();
  const offer = offers.find((room) => room.id.toString() === params.id);
  if (!offer) {
    return <>Not found</>;
  }
  const {title, description, images, rate, isPremium, type, inside, bedrooms, adults, price, host, avatar, isPro, city, reviewIds, isFavorites} = offer;
  const ratePercent = parseFloat(rate) * RATIO;

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
                  {title} ({city})
                </h1>
                <button className={`property__bookmark-button ${isFavorites ? 'property__bookmark-button--active' : ''} button`} type="button">
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
                <span className="property__rating-value rating__value">{rate}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {inside.map((ins) => (
                    <li key={ins} className="property__inside-item">{ins}</li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${isPro ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={avatar} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host}
                  </span>
                  <span className="property__user-status">
                    { isPro ? 'Pro' : null }
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewIds.length}</span></h2>
                <ul className="reviews__list">
                  {reviewIds.map((item) => (
                    <ReviewCard key={item} reviews={reviews} reviewId={item} />
                  ))}
                </ul>

                <Form />

              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map city={DEFAULT_CITY} offers={offers.slice(0, 3)} mapHeight={580} />
          </section>
        </section>
        <div className="container">
          <CardsListNear offers={offers.slice(0, 3)} />
        </div>
      </main>
    </div>
  );
}

export default RoomScreen;
