import { createSlice } from '@reduxjs/toolkit';
import { IShedule } from '../types/data';
import { data } from '../utils/constants/data';

interface InitialState {
  data: IShedule[];
}

const initialState: InitialState = {
  data,
};

const sheduleSlice = createSlice({
  name: 'shedule',
  initialState,
  reducers: {},
});

export const actionSheduleSlice = sheduleSlice.actions;
export default sheduleSlice.reducer;
