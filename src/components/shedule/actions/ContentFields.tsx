import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import { ISheduleInitialValues } from '../../../types/data';
import SelectUser from './SelectUser';
import ActionList from './ActionList';
import AddTimeField from './AddTimeField';

interface IContentFieldsProps {
  [key: string]: unknown;
  values: ISheduleInitialValues;
  handleChange: (values: Omit<ISheduleInitialValues, 'date' | 'dates' | 'id'>) => void;
  handleAddDates: () => void;
}

const StyledContentFields = styled(Box)(() => ({
  display: 'grid',
  gap: '1rem',
}));

const ContentFields: FC<IContentFieldsProps> = ({ values, handleChange, handleAddDates }) => {
  console.log(values);

  return (
    <StyledContentFields>
      <SelectUser handleChange={handleChange} />
      <ActionList dates={values.dates} />
      {!!values.dates.length && <AddTimeField handleAddDates={handleAddDates} />}
    </StyledContentFields>
  );
};

export default ContentFields;
