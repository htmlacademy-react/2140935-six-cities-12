import MainPage from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  hotelCount: number;
}

function App({hotelCount}: AppScreenProps): JSX.Element {
  return (
    <MainPage hotelCount={hotelCount} />
  );
}

export default App;
