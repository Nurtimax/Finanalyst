import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  data: [];
}

const initialState: InitialState = {
  data: [],
};

const sheduleSlice = createSlice({
  name: 'shedule',
  initialState,
  reducers: {},
});

export const actionSheduleSlice = sheduleSlice.actions;
export default sheduleSlice.reducer;
