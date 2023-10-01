import { User } from 'firebase/auth';
import { IAuthentication } from '../../types/thunk/auth';

export const userDataVoid = (obj: User): IAuthentication => {
  const userData: IAuthentication = {
    email: obj.email,
    displayName: obj.displayName,
    emailVerified: obj.emailVerified,
    isAnanymous: obj.isAnonymous,
    phoneNumber: obj.phoneNumber,
    photoURL: obj.photoURL,
    uid: obj.uid
  };
  return userData;
};
