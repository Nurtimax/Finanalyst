import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import dayjs, { Dayjs } from 'dayjs';

export const parseFormatDate = (date: Dayjs | null): string => {
  if (date) {
    return format(dayjs(date).toDate(), 'EEEE, d MMMM', { locale: ru });
  }
  return '';
};
