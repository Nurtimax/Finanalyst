import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISheduleReducer } from '../../types/data';

interface InitialState {
  monthColumns: ISheduleReducer[];
}

const initialState: InitialState = {
  monthColumns: [],
};

const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    monthColumnsEffect: (state, actions: PayloadAction<ISheduleReducer[]>) => {
      state.monthColumns = actions.payload;
    },
  },
});

export const actionColumns = columnsSlice.actions;
export default columnsSlice.reducer;
