import {useState} from 'react';

type SortOptionProps = {
  sortBy: string;
  onChange: (option: string) => void;
};

type OptionClickHandler = (option: string) => void;

function SortOptions({sortBy, onChange }: SortOptionProps): JSX.Element {
  const sortOptions = [
    'Popular',
    'Price: low to high',
    'Price: high to low',
    'Top rated first',
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick: OptionClickHandler = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className={`places__sorting-type ${isOpen ? 'places__sorting-type--active' : ''}`}
        tabIndex={0}
        onClick={handleMenuToggle}
        onBlur={handleMenuClose}
      >
        {sortBy}
        <svg className={`places__sorting-arrow ${isOpen ? 'places__sorting-arrow--reversed' : ''}`} width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {sortOptions.map((option) => (
          <li
            key={option}
            className={`places__option ${sortBy === option ? 'places__option--active' : ''}`}
            tabIndex={0}
            onMouseDown={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortOptions;
