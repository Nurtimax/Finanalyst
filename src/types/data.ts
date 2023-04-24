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
