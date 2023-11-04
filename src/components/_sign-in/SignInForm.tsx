import React, { FC } from 'react';
import { Box, Button, FormControl, FormLabel, styled, TextField } from '@mui/material';
import FormHeadlines from './FormHeadlines';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useAppDispatch } from 'hooks/dispatch';
import { SignInThunk } from 'store/thunk/authentication-thunk';

const StyledSignInForm = styled('form')(() => ({
  width: '30vw',
  background: '#fff',
  padding: '0.5rem',
  borderRadius: '5px'
}));

const StyledFormAction = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1.5rem',
  padding: '1rem 0.5rem'
}));

const SignInForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: (values, formikHelpers) => {
      dispatch(SignInThunk(values))
        .unwrap()
        .then(() => {
          navigate('/');
          formikHelpers.resetForm();
        })
        .catch((e) => {
          console.log(e);
        });
    }
  });

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <StyledSignInForm onSubmit={handleSubmit}>
      <FormHeadlines />
      <FormControl fullWidth>
        <FormLabel htmlFor="email">Email</FormLabel>
        <TextField
          variant="outlined"
          className="form-field"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl fullWidth>
        <FormLabel htmlFor="password">Password</FormLabel>
        <TextField
          variant="outlined"
          className="form-field"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
      </FormControl>
      <StyledFormAction>
        <Button variant="outlined" fullWidth type="button" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="contained" fullWidth type="submit">
          Sign In
        </Button>
      </StyledFormAction>
    </StyledSignInForm>
  );
};

export default SignInForm;
