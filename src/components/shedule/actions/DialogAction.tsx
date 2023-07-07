import React, { FC } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, styled } from '@mui/material';
import { useFormik } from 'formik';
import ContentFields from './ContentFields';
import { ISheduleDates, ISheduleInitialValues } from '../../../types/data';
import { useDispatch } from 'react-redux';
import { actionSheduleSlice } from '../../../store/shedule';

interface IDialogActionProps {
  [key: string]: unknown;
  handleToggle: () => void;
  open: boolean;
}

const StyledDialogAction = styled(Box)(() => ({}));
const StyledDialogActionForm = styled('form')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
}));

const DialogAction: FC<IDialogActionProps> = ({ handleToggle, open }) => {
  const dispatch = useDispatch();
  const { values, setValues, handleSubmit } = useFormik<ISheduleInitialValues>({
    initialValues: { date: '', dates: [], id: '' },
    onSubmit: (values, formikHelpers) => {
      dispatch(actionSheduleSlice.addShedule(values));
      console.log(values);

      formikHelpers.resetForm();
      handleToggle();
    },
  });

  const handleChange = (values: Omit<ISheduleInitialValues, 'date' | 'dates' | 'id'>) => {
    setValues((prev) => ({ ...prev, ...values }));
  };

  const handleChangeDates = (id: number, values: Omit<ISheduleDates, 'id'>) => {
    setValues((prev) => ({
      ...prev,
      dates: prev.dates.map((date) => {
        if (date.id === id) {
          return { ...date, ...values };
        }
        return date;
      }),
    }));
  };

  const handleAddDates = () => {
    setValues((prev) => ({
      ...prev,
      dates: [...prev.dates, { id: prev.dates.length + 1, startDate: null, endDate: null }],
    }));
  };

  const handleDeleteDates = (id: number) => {
    setValues((prev) => ({ ...prev, dates: prev.dates.filter((el) => el.id !== id) }));
  };

  return (
    <StyledDialogAction>
      <Dialog fullWidth maxWidth="sm" open={open} onClose={handleToggle}>
        <DialogTitle>Add Times</DialogTitle>
        <DialogContent dividers>
          <ContentFields
            values={values}
            handleChange={handleChange}
            handleAddDates={handleAddDates}
            handleDeleteDates={handleDeleteDates}
            handleChangeDates={handleChangeDates}
          />
        </DialogContent>
        <DialogActions>
          <StyledDialogActionForm onSubmit={handleSubmit}>
            <Button variant="outlined" type="button" onClick={handleToggle}>
              cancel
            </Button>
            <Button variant="contained" type="submit">
              Add Time
            </Button>
          </StyledDialogActionForm>
        </DialogActions>
      </Dialog>
    </StyledDialogAction>
  );
};

export default DialogAction;
