import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import { LocalizationProvider, MultiInputTimeRangeField } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

interface IListItemProps {
  [key: string]: unknown;
}

const StyledListItem = styled(Box)(() => ({}));

const ListItem: FC<IListItemProps> = () => {
  return (
    <StyledListItem>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['MultiInputTimeRangeField', 'SingleInputTimeRangeField']}>
          <MultiInputTimeRangeField
            slotProps={{
              textField: ({ position }) => ({
                label: position === 'start' ? 'From' : 'To',
              }),
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </StyledListItem>
  );
};

export default ListItem;
