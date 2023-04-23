import {Link} from 'react-router-dom';
import {logoutAction} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks';

function SignOut(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <li className="header__nav-item">
      <Link
        to="/"
        className="header__nav-link"
        onClick={(evt) => {
          evt.preventDefault();
          dispatch(logoutAction());
        }}
      >
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}

export default SignOut;
