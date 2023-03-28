import {Reviews} from '../../types/offer';

type ReviewProps = {
  reviews: Reviews;
  reviewId: number;
};

function Review({reviews, reviewId}: ReviewProps): JSX.Element {
  const review = reviews.find((item) => item.id === reviewId);
  if (!review) {
    return <>Not found</>;
  }
  const {nickname, avatar, date, rate, text} = review;
  const ratePercent = rate * 20;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {nickname}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${ratePercent}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{date}</time>
      </div>
    </li>
  );
}

export default Review;
