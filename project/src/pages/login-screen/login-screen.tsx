import {Helmet} from 'react-helmet-async';
import {useEffect, useState, FormEvent, ChangeEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {loginAction} from '../../store/api-actions';
import {AuthData} from '../../types/auth-data';
import {AppRoute} from '../../const';
import Logo from '../../components/logo/logo';
import {getAuthorizationStatus} from '../../store/selectors';
import {AuthorizationStatus} from '../../const';
import RandomCity from '../../components/random-city/random-city';

function LoginScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Root);
    }
  }, [authorizationStatus, navigate]);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      const authData: AuthData = { login, password };
      dispatch(loginAction(authData));
    }
  };

  const handleLoginChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setLogin(evt.target.value);
  };

  const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Login | 6 Cities</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="text" pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
                  name="name"
                  id="name"
                  placeholder="Email"
                  value={login}
                  onChange={handleLoginChange}
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  title="The password must contain at least one letter and one number"
                  type="password" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <RandomCity />
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
