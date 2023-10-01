import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {}

const initialState: InitialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
});

export const actionAuthentication = userSlice.actions;
export default userSlice.reducer;
