import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SignInThunk, SignUpThunk } from 'store/thunk/authentication-thunk';
import { IAuthentication, SignInThunkProps, SignUpThunkProps } from 'types/thunk/auth';

interface InitialState {
  settings: {};
  userData: IAuthentication;
}

const initialState: InitialState = {
  settings: {},
  userData: {
    displayName: null,
    emailVerified: false,
    email: '',
    isAnanymous: false,
    phoneNumber: null,
    photoURL: null,
    uid: '',
  },
};

const authenticationSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onAuthStateChanged: (state, action: PayloadAction<IAuthentication>) => {
      state.userData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(SignUpThunk.fulfilled, (state, actions: SignUpThunkProps) => {
        state.userData = actions.payload;
      })
      .addCase(SignUpThunk.rejected, () => {})
      .addCase(SignUpThunk.pending, () => {})
      .addCase(SignInThunk.fulfilled, (state, action: SignInThunkProps) => {
        state.userData = action.payload;
      })
      .addCase(SignInThunk.rejected, () => {})
      .addCase(SignInThunk.pending, () => {});
  },
});

export const actionAuthentication = authenticationSlice.actions;
export default authenticationSlice.reducer;
