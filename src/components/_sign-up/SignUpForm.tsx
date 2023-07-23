import React, { FC } from 'react';
import { Box, Button, FormControl, FormLabel, styled, TextField } from '@mui/material';
import FormHeadLines from './FormHeadLines';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { SignUpThunk } from 'store/thunk/authentication-thunk';
import { useAppDispatch } from 'hooks/dispatch';

interface ISignUpFormProps {
  [key: string]: unknown;
}

const StyledSignUpForm = styled('form')(() => ({
  width: '30vw',
  background: '#fff',
  padding: '0.5rem',
  borderRadius: '5px',
}));

const StyledFormAction = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1.5rem',
  padding: '1rem 0rem',
}));

const SignUpForm: FC<ISignUpFormProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, formikHelpers) => {
      dispatch(SignUpThunk(values))
        .unwrap()
        .then((res) => {
          navigate('/');
          formikHelpers.resetForm();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  });

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <StyledSignUpForm onSubmit={handleSubmit}>
      <FormHeadLines />
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
          type="password"
          name="password"
          className="form-field"
          value={values.password}
          onChange={handleChange}
        />
      </FormControl>
      <StyledFormAction>
        <Button variant="outlined" fullWidth type="button" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="contained" fullWidth type="submit">
          Sign Up
        </Button>
      </StyledFormAction>
    </StyledSignUpForm>
  );
};

export default SignUpForm;
