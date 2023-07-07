import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IShedule, ISheduleInitialValues } from '../types/data';
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
  reducers: {
    addShedule: (state, action: PayloadAction<ISheduleInitialValues>) => {
      const values = action.payload;

      state.data = state.data.map((item) => {
        if (Number(values.id) === item.id) {
          return { ...item, ...values, id: item.id, dateTime: values.date };
        }
        return item;
      });
    },
  },
});

export const actionSheduleSlice = sheduleSlice.actions;
export default sheduleSlice.reducer;
