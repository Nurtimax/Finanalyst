import React, { FC } from 'react';
import { Box, Button, styled } from '@mui/material';

interface IAddTimeFieldProps {
  [key: string]: unknown;
  handleAddDates: () => void;
}

const StyledAddTimeField = styled(Box)(() => ({
  alignSelf: 'flex-end',
}));

const AddTimeField: FC<IAddTimeFieldProps> = ({ handleAddDates }) => {
  return (
    <StyledAddTimeField>
      <Button variant="outlined" onClick={handleAddDates}>
        Add Time Field
      </Button>
    </StyledAddTimeField>
  );
};

export default AddTimeField;
