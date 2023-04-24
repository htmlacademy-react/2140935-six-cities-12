import Logo from '../logo/logo';
import {useAppSelector} from '../../hooks';
import SignIn from '../sign-in-out/sign-in';
import SignOut from '../sign-in-out/sign-out';
import UserEmail from '../user-email/user-email';
import {getAuthorizationStatus} from '../../store/selectors';
import {AuthorizationStatus} from '../../const';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.Auth
                ? (
                  <>
                    <UserEmail />
                    <SignOut />
                  </>
                ) : <SignIn />}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
