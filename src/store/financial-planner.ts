import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreMonthData } from '../types/data';

interface InitialState {
  data: StoreMonthData[];
}

const initialState: InitialState = {
  data: [],
};

const financialPlannerSlice = createSlice({
  name: 'financialPlanner',
  initialState,
  reducers: {
    addStore: (state, action: PayloadAction<StoreMonthData>) => {
      const value = action.payload;
      state.data.push(value);
    },
    changeStoreValues: (state, action) => {
      const { storeId, monthId, value } = action.payload;

      state.data = state.data.map((item) => {
        if (item.store.id === storeId) {
          const newMonths = item.months.map((month) => {
            if (month.id === monthId) {
              return { ...month, value };
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

export const actionFinancialPlanner = financialPlannerSlice.actions;

export default financialPlannerSlice.reducer;
