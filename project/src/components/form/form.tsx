import {useState} from 'react';
import {STARS} from '../../const';

function generateStars() {
  const result = [];
  for (let i = STARS; i >= 1; i--) {
    result.push(i);
  }
  return result;
}

function Form(): JSX.Element {
  const placeholder = 'Tell how was your stay, what you like and what can be improved';
  const [textarea, setTextarea] = useState('');
  const [starValue, setStars] = useState('0');
  const starsValue = generateStars();

  function handleChange(evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    switch (evt.target.name) {
      case 'stars':
        setStars(evt.target.value);
        break;
      case 'textarea':
        setTextarea(evt.target.value);
        break;
      default:
        break;
    }
  }

  return (
    <form className="reviews__form form" action="/" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {starsValue.map((item) => (
          <>
            <input name="stars" key={item} onChange={handleChange} className="form__rating-input visually-hidden" value={item} id={`${item}-stars`} type="radio" />
            <label htmlFor={`${item}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </>
        ))}{starValue}
      </div>
      <textarea name="textarea" onChange={handleChange} value={textarea} className="reviews__textarea form__textarea" id="review" placeholder={placeholder}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          {textarea}
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default Form;
