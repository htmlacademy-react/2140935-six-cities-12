import {useAppSelector} from '../../hooks';
import Form from '../form/form';
import ReviewCard from '../review-card/review-card';
import { getReviews } from '../../store/selectors';
import {AuthorizationStatus} from '../../const';
import { getAuthorizationStatus } from '../../store/selectors';

type ReviewListProps = {
  roomId: number;
};

function ReviewList({roomId}: ReviewListProps): JSX.Element {
  const reviews = useAppSelector(getReviews);
  const sortedReviews = reviews.slice().sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {sortedReviews.map((item) => (
          <ReviewCard key={item.id} review={item} />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth
        ? (
          <Form roomId={roomId} />
        ) : null}
    </section>
  );
}

export default ReviewList;
