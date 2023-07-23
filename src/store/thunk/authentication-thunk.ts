import { createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { ISignUpThunkProps } from 'types/thunk/sign-up';
import { IAuthentication } from 'types/thunk/auth';
import { userDataVoid } from 'utils/helpers/auth';
// import { User, UserCredential } from '@firebase/auth';

// interface SignInThunkVoid extends User {
//   accessToken: string;
// }

export const SignUpThunk = createAsyncThunk<IAuthentication, ISignUpThunkProps>(
  'SignUpThunk/authenticationSlice',
  async ({ email, password }: ISignUpThunkProps, { rejectWithValue }) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      return userDataVoid(user);
    } catch (error) {
      return rejectWithValue(error as SerializedError);
    }
  }
);

export const SignInThunk = createAsyncThunk<IAuthentication, ISignUpThunkProps>(
  'SignInThunk/authenticationSlice',
  async ({ email, password }: ISignUpThunkProps, { rejectWithValue }) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      return userDataVoid(user);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
