import { StoreMonthData } from '../../types/data';

const data: StoreMonthData = {
  store: {
    id: 13,
    name: 'Store 13',
  },
  months: [
    {
      id: '1_1',
      name: 'JAN',
      value: 0,
    },
    {
      id: '2_1',
      name: 'FEB',
      value: 0,
    },
    {
      id: '3_1',
      name: 'MAR',
      value: 0,
    },
    {
      id: '4_1',
      name: 'APR',
      value: 0,
    },
    {
      id: '5_1',
      name: 'MAY',
      value: 0,
    },
    {
      id: '6_1',
      name: 'JUN',
      value: 0,
    },
    {
      id: '7_1',
      name: 'JUL',
      value: 0,
    },
    {
      id: '8_1',
      name: 'AUG',
      value: 0,
    },
    {
      id: '9_1',
      name: 'SEP',
      value: 0,
    },
    {
      id: '10_1',
      name: 'OCT',
      value: 0,
    },
    {
      id: '11_1',
      name: 'NOV',
      value: 0,
    },
    {
      id: '12_1',
      name: 'DEC',
      value: 50,
    },
  ],
};

export const generateNewStoreId = (name: string, id: number): StoreMonthData => {
  return {
    ...data,
    store: { id, name },
    months: data.months.map((month, index) => ({ ...month, id: `${index}_${id}` })),
  };
};
