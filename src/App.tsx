import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';
import React from 'react';
import './App.css';
import Routes from './routes';
import { useAppDispatch } from 'hooks/dispatch';
import { actionAuthentication } from 'store/slice/authentication';
import { userDataVoid } from 'utils/helpers/auth';

function App() {
  const dispatch = useAppDispatch();

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      const userData = userDataVoid(currentUser);
      dispatch(actionAuthentication.onAuthStateChanged(userData));
    }
  });

  return <Routes />;
}

export default App;
