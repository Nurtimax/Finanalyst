import React, { FC, useState } from 'react';
import { Box, IconButton, styled, Typography } from '@mui/material';
import { getHoursFromDate } from '../../utils/helpers/formatDate';
import dayjs from 'dayjs';
import DeleteIcon from '@mui/icons-material/Delete';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import { ISheduleDates } from '../../types/data';
import { useDispatch } from 'react-redux';
import { actionSheduleSlice } from '../../store/shedule';
import CellDateDialog from './CellDateDialog';

interface ICellDateProps extends ISheduleDates {
  [key: string]: unknown;
  userId: number;
}

const StyledCellDate = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const CellDate: FC<ICellDateProps> = ({ startDate, endDate, id, userId }) => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleDialogToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleRemove = () => {
    dispatch(actionSheduleSlice.removeSheduleDates({ id, userId }));
  };

  return (
    <StyledCellDate>
      <Typography variant="body2">
        {getHoursFromDate(dayjs(startDate))} - {getHoursFromDate(dayjs(endDate))}
      </Typography>
      <IconButton size="small" onClick={handleDialogToggle}>
        <EditCalendarIcon fontSize="small" />
      </IconButton>
      <IconButton onClick={handleRemove} size="small">
        <DeleteIcon fontSize="small" />
      </IconButton>
      <CellDateDialog
        endDate={endDate}
        startDate={startDate}
        id={id}
        userId={userId}
        handleDialogToggle={handleDialogToggle}
        open={open}
      />
    </StyledCellDate>
  );
};

export default CellDate;
