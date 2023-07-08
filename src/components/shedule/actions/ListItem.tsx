import React, { FC } from 'react';
import { Box, IconButton, styled } from '@mui/material';
import { LocalizationProvider, MultiInputTimeRangeField } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import DeleteIcon from '@mui/icons-material/Delete';
import { ISheduleDates } from '../../../types/data';
import dayjs, { Dayjs } from 'dayjs';

interface IListItemProps extends ISheduleDates {
  [key: string]: unknown;
  valuesDate: string | null | Dayjs;
  handleDeleteDates: (id: number) => void;
  handleChangeDates: (id: number, values: Omit<ISheduleDates, 'id'>) => void;
}

const StyledListItem = styled(Box)(() => ({
  borderBottom: '1px solid',
  paddingBottom: '8px',
  '&:last-child': {
    border: 'none',
  },
}));

const ListItem: FC<IListItemProps> = ({ handleDeleteDates, id, handleChangeDates, startDate, endDate, valuesDate }) => {
  return (
    <StyledListItem>
      <IconButton onClick={() => handleDeleteDates(id)}>
        <DeleteIcon />
      </IconButton>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['MultiInputTimeRangeField', 'SingleInputTimeRangeField']}>
          <MultiInputTimeRangeField
            value={[startDate, endDate]}
            onChange={(e) => {
              const startDate: dayjs.Dayjs | null = e[0] as dayjs.Dayjs | null;
              const endDate: dayjs.Dayjs | null = e[1] as dayjs.Dayjs | null;

              handleChangeDates(id, { startDate, endDate, date: dayjs(valuesDate) });
            }}
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
