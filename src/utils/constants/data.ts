import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import dayjs from 'dayjs';
import { IShedule, ISheduleReducer } from '../../types/data';

// interface ITableData {
//   result: ISheduleReducer[];
//   columns: Column<IShedule>[];
// }

export const createTableData = (data: IShedule[]): ISheduleReducer[] => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const dateDays = [];

  for (let i = 1; i <= daysInMonth; i++) {
    const formattedDate = `${('0' + (currentMonth + 1)).slice(-2)}-${('0' + i).slice(-2)}-${currentYear
      .toString()
      .slice(-2)}`;
    dateDays.push(formattedDate);
  }

  const dates = data.map((dateStr) => {
    const [month, day, year] = dateStr.dateTime.split('-');
    return { date: new Date(`20${year}-${month}-${day}`), dates: dateStr.dates, id: dateStr.id };
  });

  const initialValue: ISheduleReducer[] = [];

  const result = dateDays.reduce((previousValue: ISheduleReducer[], obj: string, i) => {
    const dateTime = new Date(
      `${String(new Date(obj).getMonth() + 1).padStart(2, '0')}-${String(new Date(obj).getDate()).padStart(
        2,
        '0'
      )}-${new Date(obj).getFullYear()}`
    );

    const matchingDates = dates.find((date) => date.date.getDate() === dateTime.getDate());

    if (matchingDates) {
      const newSheduleReducer: ISheduleReducer = { date: dayjs(obj), dates: matchingDates.dates, id: matchingDates.id };
      previousValue.push(newSheduleReducer);
      return previousValue;
    }

    const newSheduleReducer: ISheduleReducer = { date: dayjs(obj), dates: [], id: Math.round(Math.random() * 1000) };

    previousValue.push(newSheduleReducer);

    return previousValue;
  }, initialValue);

  return result;
};

export const data = [
  {
    id: 1,
    header: '1 декабрь 2023',
    dateTime: '07-05-23',
    dates: [],
    userData: {
      name: 'Nurtilek',
      lastName: '',
      email: '',
      jobType: '',
    },
  },
  {
    id: 2,
    header: '2 декабрь 2023',
    dateTime: '07-10-23',
    dates: [],
    userData: {
      name: 'Samat',
      lastName: '',
      email: '',
      jobType: '',
    },
  },
  {
    id: 3,
    header: '3 декабрь 2023',
    dateTime: '07-15-23',
    dates: [],
    userData: {
      name: 'Adilet',
      lastName: '',
      email: '',
      jobType: '',
    },
  },
  {
    id: 4,
    header: '4 декабрь 2023',
    dateTime: '07-20-23',
    dates: [],
    userData: {
      name: 'Dastan',
      lastName: '',
      email: '',
      jobType: '',
    },
  },
];

export const columns = [
  {
    Header: 'Doctor',
    accessor: 'id',
  },
  ...createTableData(data).map((item) => {
    return {
      Header: format(dayjs(item.date).toDate(), 'EEEE, d MMMM', { locale: ru }),
      accessor: String(item.date),
    };
  }),
];
