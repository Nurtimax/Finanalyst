import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { FC, useEffect } from 'react';

interface ILogOutProps {
  [key: string]: unknown;
}

const LogOut: FC<ILogOutProps> = () => {
  const logOutRequest = async () => {
    try {
      await signOut(auth);
      window.location.replace('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    logOutRequest();
  }, []);

  return null;
};

export default LogOut;
