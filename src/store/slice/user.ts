import { createSlice } from '@reduxjs/toolkit';

interface InitialState {}

const initialState: InitialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: () => {}
});

export const actionAuthentication = userSlice.actions;
export default userSlice.reducer;
