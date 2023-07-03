import React, { FC } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, styled } from '@mui/material';
import { useFormik } from 'formik';
import ContentFields from './ContentFields';
import { ISheduleInitialValues } from '../../../types/data';

interface IDialogActionProps {
  [key: string]: unknown;
  handleToggle: () => void;
  open: boolean;
}

const StyledDialogAction = styled(Box)(() => ({}));

const DialogAction: FC<IDialogActionProps> = ({ handleToggle, open }) => {
  const { values, setValues } = useFormik<ISheduleInitialValues>({
    initialValues: { date: '', dates: [], id: '' },
    onSubmit: (values, formikHelpers) => {},
  });

  const handleChange = (values: Omit<ISheduleInitialValues, 'date' | 'dates' | 'id'>) => {
    setValues((prev) => ({ ...prev, ...values }));
  };

  const handleAddDates = () => {
    setValues((prev) => ({
      ...prev,
      dates: [...prev.dates, { id: prev.dates.length + 1, startDate: null, endDate: null }],
    }));
  };

  return (
    <StyledDialogAction>
      <Dialog fullWidth maxWidth="sm" open={open} onClose={handleToggle}>
        <DialogTitle>Add Times</DialogTitle>
        <DialogContent dividers>
          <ContentFields values={values} handleChange={handleChange} handleAddDates={handleAddDates} />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleToggle}>
            cancel
          </Button>
          <Button variant="contained">Add Time</Button>
        </DialogActions>
      </Dialog>
    </StyledDialogAction>
  );
};

export default DialogAction;
