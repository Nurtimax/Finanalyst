import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  settings: {},
};

const authenticationSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export const actionAuthentication = authenticationSlice.actions;
export default authenticationSlice.reducer;
