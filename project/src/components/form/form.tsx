import {useState} from 'react';
import {STARS} from '../../const';
import {postReviewsAction} from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';

type FormProps = {
  roomId: number;
};

function generateStars() {
  const result = [];
  for (let i = STARS; i >= 1; i--) {
    result.push(i);
  }
  return result;
}

function Form({roomId}: FormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const placeholder = 'Tell how was your stay, what you like and what can be improved';
  const starsValue = generateStars();

  const [state, setState] = useState({comment: '', rating: 0});

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> {
    const {name, value} = evt.target;
    setState((prevState) => ({ ...prevState, [name]: name === 'rating' ? Number(value) : value, }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(postReviewsAction({review: state, id: roomId}))
      .then(() => setState({comment: '', rating: 0}));
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit} action="/" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {starsValue.map((item) => (
          <>
            <input name="rating" key={item} onChange={handleChange} className="form__rating-input visually-hidden" value={item} id={`${item}-stars`} type="radio" />
            <label htmlFor={`${item}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </>
        ))}
      </div>
      <textarea name="comment" onChange={handleChange} className="reviews__textarea form__textarea" id="review" placeholder={placeholder}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={state.comment.length < 50 || state.comment.length > 300 || state.rating === 0 || !state.rating}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
