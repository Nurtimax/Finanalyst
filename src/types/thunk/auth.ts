import { PayloadAction } from '@reduxjs/toolkit';
import { ISignUpThunkProps } from './sign-up';

export interface IAuthentication {
  email: string | null;
  displayName: string | null;
  emailVerified: boolean;
  isAnanymous: boolean;
  phoneNumber: string | null;
  photoURL: string | null;
  uid: string;
}

export type SignUpThunkProps = PayloadAction<
  IAuthentication,
  string,
  {
    arg: ISignUpThunkProps;
    requestId: string;
    requestStatus: 'fulfilled';
  },
  never
>;

export type SignInThunkProps = PayloadAction<
  IAuthentication,
  string,
  {
    arg: ISignUpThunkProps;
    requestId: string;
    requestStatus: 'fulfilled';
  },
  never
>;
