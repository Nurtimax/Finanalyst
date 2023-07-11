import React, { FC } from 'react';
import { Autocomplete, Box, styled, TextField } from '@mui/material';
import { IShedule, ISheduleInitialValues, ISheduleReducer } from '../../../types/data';
import { useAppSelector } from '../../../hooks/dispatch';
import { parseFormatDate, parseStringFormat } from '../../../utils/helpers/formatDate';
import dayjs from 'dayjs';

interface ISelectUserProps {
  [key: string]: unknown;
  handleChange: (values: Omit<ISheduleInitialValues, 'date' | 'dates' | 'id'>) => void;
}

const StyledSelectUser = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2.8rem',
}));

const SelectUser: FC<ISelectUserProps> = ({ handleChange }) => {
  const { data } = useAppSelector((state) => state.shedule);
  const { monthColumns } = useAppSelector((state) => state.columns);

  return (
    <StyledSelectUser>
      <Autocomplete
        onChange={(event, newValue) => {
          handleChange({ id: newValue?.id });
        }}
        id="controllable-states-demo"
        options={data}
        renderInput={(params) => <TextField {...params} label="Choose User" />}
        getOptionLabel={(option: IShedule) => String(option.userData.name)}
        fullWidth
      />
      <Autocomplete
        onChange={(event, newValue) => {
          handleChange({
            date: newValue?.date ? parseStringFormat(new Date(newValue?.date)) : '',
            dates: newValue?.dates.length ? [...newValue.dates] : [{ id: 1, startDate: null, endDate: null }],
          });
        }}
        id="controllable-states-demo"
        options={monthColumns}
        renderInput={(params) => <TextField {...params} label="Choose day" />}
        getOptionLabel={(option: ISheduleReducer) => String(parseFormatDate(dayjs(option.date)))}
        fullWidth
      />
    </StyledSelectUser>
  );
};

export default SelectUser;
