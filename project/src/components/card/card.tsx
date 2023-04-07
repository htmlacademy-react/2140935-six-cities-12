import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {RATIO} from '../../const';
import {AppRoute} from '../../const';

type CardProps = {
  offer: Offer;
  cardType: string;
};

function Card(props: CardProps): JSX.Element {
  const {offer, cardType} = props;
  const {id, title, city, images, isPremium, type, price, rate} = offer;
  const ratePercent = parseFloat(rate) * RATIO;
  const [isActive, setIsActive] = useState('');

  const handleMouseEnter = () => {
    setIsActive(id);
  };
  const handleMouseLeave = () => {
    setIsActive('');
  };

  return (
    <article onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`${cardType === 'main' ? 'cities__card' : ''} ${cardType === 'near' ? 'near-places__card' : ''} ${cardType === 'favorite' ? 'favorites__card' : ''} place-card`}>
      <div className={isPremium ? 'place-card__mark' : ''}>
        <span>{isPremium ? 'Premium' : null}</span>
      </div>
      <div className={`${cardType === 'main' ? 'cities__image-wrapper' : ''} ${cardType === 'near' ? 'near-places__image-wrapper' : ''} ${cardType === 'favorite' ? 'favorites__image-wrapper' : ''} place-card__image-wrapper`}>
        <Link to={AppRoute.Room.replace(':id', id.toString())}>
          <img className="place-card__image" src={images[0]} width="260" height="200" alt="Place card" />
        </Link>
      </div>
      <div className={`${cardType === 'favorite' ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night{isActive ? ' - Active' : ''}</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratePercent}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Room.replace(':id', id.toString())}>{title} ({city})</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
