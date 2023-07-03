import * as yup from 'yup';

export const sheduleValidateSchema = yup.object().shape({
  dates: yup.array().of(
    yup.object().shape({
      id: yup.number().required(),
      startDate: yup.date().nullable().required(),
      endDate: yup.date().nullable().required(),
    })
  ),
  date: yup.string().required(),
});
