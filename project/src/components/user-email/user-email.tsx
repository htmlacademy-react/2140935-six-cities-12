import {Link} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import { getEmail } from '../../store/selectors';

function UserEmail(): JSX.Element {
  const email = useAppSelector(getEmail);

  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to="/favorites">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__user-name user__name">{email}</span>
        <span className="header__favorite-count">3</span>
      </Link>
    </li>
  );
}

export default UserEmail;
