import {Review} from '../../types/offer';
import {RATIO} from '../../const';

type ReviewProps = {
  review: Review;
};

function ReviewCard({review}: ReviewProps): JSX.Element {
  if (!review) {
    return <>Not found</>;
  }
  const {user, rating, comment, date} = review;
  const ratePercent = rating * RATIO;
  const newDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(newDate);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
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
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{formattedDate}</time>
      </div>
    </li>
  );
}

export default ReviewCard;
