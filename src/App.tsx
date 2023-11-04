import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';
import { useEffect } from 'react';
import './App.css';
import Routes from './routes';
import { useAppDispatch } from 'hooks/dispatch';
import { actionAuthentication } from 'store/slice/authentication';
import { userDataVoid } from 'utils/helpers/auth';
import { isCheckWindow } from 'utils/helpers/window';

const tg: any = isCheckWindow('Telegram')?.WebApp;

function App() {
  const dispatch = useAppDispatch();

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      const userData = userDataVoid(currentUser);
      dispatch(actionAuthentication.onAuthStateChanged(userData));
    }
  });

  useEffect(() => {
    tg.ready();
  }, []);

  return <Routes />;
}

export default App;
