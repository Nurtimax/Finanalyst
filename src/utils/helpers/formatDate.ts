import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import dayjs, { Dayjs } from 'dayjs';

export const parseFormatDate = (date: Dayjs | null | string): string => {
  if (typeof date === 'string') {
    return '';
  }
  if (date) {
    return format(dayjs(date).toDate(), 'EEEE, d MMMM', { locale: ru });
  }
  return '';
};

export const getHoursFromDate = (date: dayjs.Dayjs): string => {
  return date.format('HH:mm');
};

export const parseStringFormat = (value: Date): string => {
  const parseDaysJsFormat = dayjs(value);
  return parseDaysJsFormat.format('YYYY-MM-DD');
};
