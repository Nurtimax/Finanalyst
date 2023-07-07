import React, { FC } from 'react';
import { Box, Divider, styled } from '@mui/material';
import { ISheduleDates, ISheduleInitialValues } from '../../../types/data';
import SelectUser from './SelectUser';
import ActionList from './ActionList';
import AddTimeField from './AddTimeField';

interface IContentFieldsProps {
  [key: string]: unknown;
  values: ISheduleInitialValues;
  handleChange: (values: Omit<ISheduleInitialValues, 'date' | 'dates' | 'id'>) => void;
  handleAddDates: () => void;
  handleDeleteDates: (id: number) => void;
  handleChangeDates: (id: number, values: Omit<ISheduleDates, 'id'>) => void;
}

const StyledContentFields = styled(Box)(() => ({
  display: 'grid',
  gap: '1rem',
}));

const ContentFields: FC<IContentFieldsProps> = ({
  values,
  handleChange,
  handleAddDates,
  handleDeleteDates,
  handleChangeDates,
}) => {
  return (
    <StyledContentFields>
      <SelectUser handleChange={handleChange} />
      {!!values.dates.length && <Divider />}

      <ActionList values={values} handleDeleteDates={handleDeleteDates} handleChangeDates={handleChangeDates} />
      {!!values.dates.length && <AddTimeField handleAddDates={handleAddDates} />}
    </StyledContentFields>
  );
};

export default ContentFields;
