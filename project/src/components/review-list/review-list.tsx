import {useAppSelector} from '../../hooks';
import Form from '../form/form';
import ReviewCard from '../review-card/review-card';
import { getReviews } from '../../store/selectors';

function ReviewList(): JSX.Element {
  const reviews = useAppSelector(getReviews);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((item) => (
          <ReviewCard key={item.id} review={item} />
        ))}
      </ul>
      <Form />
    </section>
  );
}

export default ReviewList;
