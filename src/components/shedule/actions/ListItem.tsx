import React, { FC, useMemo } from 'react';
import { Box, IconButton, styled } from '@mui/material';
import { MultiInputTimeRangeField } from '@mui/x-date-pickers-pro';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import DeleteIcon from '@mui/icons-material/Delete';
import { ISheduleDates } from '../../../types/data';
import dayjs, { Dayjs } from 'dayjs';
import { parseStringFormat } from '../../../utils/helpers/formatDate';

interface IListItemProps extends ISheduleDates {
  [key: string]: unknown;
  valuesDate: string | null | Date;
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
  const timeRangeValues: [Dayjs | null, Dayjs | null] = useMemo(() => {
    if (!endDate && !startDate) {
      return [null, null];
    }
    if (!startDate) {
      return [null, dayjs(endDate)];
    }
    if (!endDate) {
      return [dayjs(startDate), null];
    }

    return [dayjs(startDate), dayjs(endDate)];
  }, [endDate, startDate]);

  return (
    <StyledListItem>
      <IconButton onClick={() => handleDeleteDates(id)}>
        <DeleteIcon />
      </IconButton>
      <DemoContainer components={['MultiInputTimeRangeField', 'SingleInputTimeRangeField']}>
        <MultiInputTimeRangeField
          value={timeRangeValues}
          onChange={(e) => {
            const startDate: string | null = dayjs(e[0]).format() as string | null;
            const endDate: string | null = dayjs(e[1]).format() as string | null;

            handleChangeDates(id, {
              startDate,
              endDate,
              date: valuesDate !== null ? parseStringFormat(new Date(valuesDate)) : null,
            });
          }}
          slotProps={{
            textField: ({ position }) => ({
              label: position === 'start' ? 'From' : 'To',
            }),
          }}
        />
      </DemoContainer>
    </StyledListItem>
  );
};

export default ListItem;
