import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Column } from 'react-table';
import { IShedule, ISheduleReducer } from '../types/data';

interface InitialState {
  columns: Column<IShedule>[];
  monthColumns: ISheduleReducer[];
}

const initialState: InitialState = {
  columns: [],
  monthColumns: [],
};

const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    columnsEffect: (state, actions: PayloadAction<Column<IShedule>[]>) => {
      const data: Column<IShedule>[] = actions.payload;

      state.columns = data;
    },
    monthColumnsEffect: (state, actions: PayloadAction<ISheduleReducer[]>) => {
      state.monthColumns = actions.payload;
    },
  },
});

export const actionColumns = columnsSlice.actions;
export default columnsSlice.reducer;
