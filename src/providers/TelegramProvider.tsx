import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'firebase/config';
import { useAppDispatch } from 'hooks/dispatch';
import { FC, ReactNode, useEffect } from 'react';
import { actionAuthentication } from 'store/slice/authentication';
import { userDataVoid } from 'utils/helpers/auth';
import { isCheckWindow } from 'utils/helpers/window';

interface ITelegramProvider {
  children: ReactNode;
}

const TelegramProvider: FC<ITelegramProvider> = ({ children }) => {
  const tg: any = isCheckWindow('Telegram')?.WebApp;

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
  return children;
};

export default TelegramProvider;
