import React, { FC, useMemo } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  PaperProps,
  styled
} from '@mui/material';
import { ISheduleDates } from '../../types/data';
import { useAppDispatch, useAppSelector } from '../../hooks/dispatch';
import { useFormik } from 'formik';
import dayjs from 'dayjs';
import { MultiInputTimeRangeField } from '@mui/x-date-pickers-pro';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import Draggable from 'react-draggable';
import { actionSheduleSlice } from 'store/slice/shedule';

interface ICellDateDialogProps extends Omit<ISheduleDates, 'date'> {
  [key: string]: unknown;
  open: boolean;
  handleDialogToggle: () => void;
  userId: number;
}

type EditCellDateDialog = Omit<ISheduleDates, 'id' | 'date'>;

const StyledDialogActionForm = styled('form')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem'
}));

function PaperComponent(props: PaperProps) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

const CellDateDialog: FC<ICellDateDialogProps> = ({
  open,
  handleDialogToggle,
  userId,
  startDate,
  endDate,
  id
}) => {
  const dispatch = useAppDispatch();

  const { data } = useAppSelector((state) => state.shedule);

  const { values, setValues, handleSubmit } = useFormik<EditCellDateDialog>({
    initialValues: {
      startDate: startDate,
      endDate: endDate
    },
    onSubmit: (values) => {
      dispatch(actionSheduleSlice.editSheduleDates({ id, userId, values }));
      handleDialogToggle();
    }
  });

  const findUserData = useMemo(() => data.find((el) => el.id === userId), [userId]);

  return (
    <Box>
      <Dialog open={open} onClose={handleDialogToggle} PaperComponent={PaperComponent}>
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          {findUserData?.userData.name} date editing
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <DemoContainer components={['MultiInputTimeRangeField', 'SingleInputTimeRangeField']}>
            <MultiInputTimeRangeField
              value={[dayjs(values.startDate), dayjs(values.endDate)]}
              onChange={(e) => {
                const startDate: Date | null = e[0] as Date | null;
                const endDate: Date | null = e[1] as Date | null;

                setValues({ endDate, startDate });
              }}
              slotProps={{
                textField: ({ position }) => ({
                  label: position === 'start' ? 'From' : 'To'
                })
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
    </Box>
  );
};

export default CellDateDialog;
