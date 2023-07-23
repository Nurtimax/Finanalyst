import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { data } from '../../utils/general/data';
import { StoreMonthData } from '../../types/data';
import { TableCellProps } from '../../components/table/TableCell';

export interface CounterState {
  data: StoreMonthData[];
  column: number;
  row: number;
}

const initialState: CounterState = {
  data,
  column: 0,
  row: 0,
};

export const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<TableCellProps>) => {
      state.data = state.data.map((item) => {
        if (item.store.name === action.payload.storeId) {
          const newMonths = item.months.map((month) => {
            if (month.id === action.payload.id) {
              return {
                ...month,
                value: action.payload.value,
              };
            }
            return month;
          });

          return {
            ...item,
            months: newMonths,
          };
        }
        return item;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const actionPriceSlice = priceSlice.actions;

export default priceSlice.reducer;
