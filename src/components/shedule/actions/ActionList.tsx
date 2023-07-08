import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import { ISheduleDates, ISheduleInitialValues } from '../../../types/data';
import ListItem from './ListItem';

interface IActionListProps {
  [key: string]: unknown;
  values: ISheduleInitialValues;
  handleDeleteDates: (id: number) => void;
  handleChangeDates: (id: number, values: Omit<ISheduleDates, 'id'>) => void;
}

const StyledActionList = styled(Box)(() => ({
  overflow: 'auto',
}));

const ActionList: FC<IActionListProps> = ({ values, handleDeleteDates, handleChangeDates }) => {
  return (
    <StyledActionList sx={{ maxHeight: values.dates.length > 1 ? '130px' : '100%' }}>
      {values.dates.map((date) => (
        <ListItem
          key={date.id}
          {...date}
          valuesDate={values.date}
          handleDeleteDates={handleDeleteDates}
          handleChangeDates={handleChangeDates}
        />
      ))}
    </StyledActionList>
  );
};

export default ActionList;
