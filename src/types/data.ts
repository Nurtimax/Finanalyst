import { Dayjs } from 'dayjs';
import { CellProps } from 'react-table';

export interface Store {
  id: number;
  name: string;
}

export interface Month {
  name: string;
  id: string;
  value: number;
}

export interface StoreMonthData {
  store: Store;
  months: Month[];
  [key: string]: unknown;
}

export interface IShedule {
  id: number;
  dateTime: string | null | Dayjs;
  dateTimes: Dayjs[];
  dates: ISheduleDates[];
  userData: ISheduleUserData;
  header: string;
  [key: string]: unknown;
}

export interface ISheduleDates {
  id: number;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
}

export interface ISheduleUserData {
  name: string;
  email: string;
  lastName: string;
  jobType: string;
}

export interface ISheduleReducer {
  date: Dayjs | null;
  dates: ISheduleDates[];
  id: number;
}

export interface ISheduleInitialValues {
  dates: ISheduleDates[];
  date: string;
  id: string;
}

export interface MyCellProps extends CellProps<IShedule> {
  // add any additional props you want to pass to the cell component
}
