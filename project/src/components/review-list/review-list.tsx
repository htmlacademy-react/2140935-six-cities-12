import {useAppSelector} from '../../hooks';
import Form from '../form/form';
import ReviewCard from '../review-card/review-card';

function ReviewList(): JSX.Element {
  const comments = useAppSelector((state) => state.comments);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((item) => (
          <ReviewCard key={item.id} review={item} />
        ))}
      </ul>
      <Form />
    </section>
  );
}

export default ReviewList;
