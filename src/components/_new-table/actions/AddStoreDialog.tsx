import React, { FC } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  styled,
  TextField
} from '@mui/material';
import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from '../../../hooks/dispatch';
import { generateNewStoreId } from '../../../utils/helpers/generate-new-store';
import { actionFinancialPlanner } from 'store/slice/financial-planner';

interface IAddStoreDialogProps {
  [key: string]: unknown;
  open: boolean;
  handleToggle: () => void;
}

const StyledDialogActionForm = styled('form')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem'
}));

const AddStoreDialog: FC<IAddStoreDialogProps> = ({ open, handleToggle }) => {
  const dispatch = useAppDispatch();

  const { data } = useAppSelector((state) => state.financial);

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: ''
    },
    onSubmit: (values, formikHelpers) => {
      const generateId = data.length ? data[data.length - 1]?.store.id + 1 : 1;

      const storeValue = generateNewStoreId(values.name, generateId);

      dispatch(actionFinancialPlanner.addStore(storeValue));
      formikHelpers.resetForm();
      handleToggle();
    }
  });

  return (
    <Box>
      <Dialog open={open} onClose={handleToggle}>
        <DialogTitle>New budget name</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a name to this table, please enter your name here.
          </DialogContentText>
          <TextField
            value={values.name}
            onChange={handleChange}
            name="name"
            autoFocus
            margin="dense"
            id="name"
            label="Field name"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <StyledDialogActionForm onSubmit={handleSubmit}>
            <Button onClick={handleToggle} type="button">
              Cancel
            </Button>
            <Button type="submit">Add Field</Button>
          </StyledDialogActionForm>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AddStoreDialog;
