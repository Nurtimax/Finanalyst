import React, { FC, useMemo } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  styled,
} from '@mui/material';
import { ISheduleDates } from '../../types/data';
import { useAppDispatch, useAppSelector } from '../../hooks/dispatch';
import { useFormik } from 'formik';
import dayjs from 'dayjs';
import { MultiInputTimeRangeField } from '@mui/x-date-pickers-pro';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { actionSheduleSlice } from '../../store/shedule';

interface ICellDateDialogProps extends Omit<ISheduleDates, 'date'> {
  [key: string]: unknown;
  open: boolean;
  handleDialogToggle: () => void;
  userId: number;
}

const StyledCellDateDialog = styled(Box)(() => ({}));

const StyledDialogActionForm = styled('form')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
}));

type EditCellDateDialog = Omit<ISheduleDates, 'id' | 'date'>;

const CellDateDialog: FC<ICellDateDialogProps> = ({ open, handleDialogToggle, userId, startDate, endDate, id }) => {
  const dispatch = useAppDispatch();

  const { data } = useAppSelector((state) => state.shedule);

  const { values, setValues, handleSubmit } = useFormik<EditCellDateDialog>({
    initialValues: {
      startDate: dayjs(startDate),
      endDate: dayjs(endDate),
    },
    onSubmit: (values) => {
      dispatch(actionSheduleSlice.editSheduleDates({ id, userId, values }));
      handleDialogToggle();
    },
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const findUserData = useMemo(() => data.find((el) => el.id === userId), [userId]);

  return (
    <StyledCellDateDialog>
      <Dialog open={open} onClose={handleDialogToggle}>
        <DialogTitle>{findUserData?.userData.name} date editing</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates occasionally.
          </DialogContentText>
          <DemoContainer components={['MultiInputTimeRangeField', 'SingleInputTimeRangeField']}>
            <MultiInputTimeRangeField
              value={[values.startDate, values.endDate]}
              onChange={(e) => {
                const startDate: dayjs.Dayjs | null = e[0] as dayjs.Dayjs | null;
                const endDate: dayjs.Dayjs | null = e[1] as dayjs.Dayjs | null;

                setValues({ endDate, startDate });
              }}
              slotProps={{
                textField: ({ position }) => ({
                  label: position === 'start' ? 'From' : 'To',
                }),
              }}
            />
          </DemoContainer>
        </DialogContent>
        <DialogActions>
          <StyledDialogActionForm onSubmit={handleSubmit}>
            <Button variant="contained" type="button" onClick={handleDialogToggle}>
              Cancel
            </Button>
            <Button variant="outlined" type="submit">
              Edit
            </Button>
          </StyledDialogActionForm>
        </DialogActions>
      </Dialog>
    </StyledCellDateDialog>
  );
};

export default CellDateDialog;
