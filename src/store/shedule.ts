import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
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
          return {
            ...item,
            ...values,
            id: item.id,
            dateTime: values.date,
            dates: [...item.dates, ...values.dates],
            dateTimes: [...item.dateTimes, dayjs(values.date)],
          };
        }
        return item;
      });
    },
    removeSheduleDates: (state, action) => {
      const { id, userId } = action.payload;

      state.data = state.data.map((item) => {
        if (item.id === userId) {
          const dates = item.dates.filter((date) => date.id !== id);
          return { ...item, dates };
        }
        return item;
      });
    },
  },
});

export const actionSheduleSlice = sheduleSlice.actions;
export default sheduleSlice.reducer;
