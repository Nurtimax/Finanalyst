import React, { FC } from 'react';
import { Button, styled, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { SignUpThunk } from 'store/thunk/authentication-thunk';
import { useAppDispatch } from 'hooks/dispatch';

interface ISignUpFormProps {
  [key: string]: unknown;
}

const StyledSignUpForm = styled('form')(() => ({
  width: '100%',
  height: '100%'
}));


const SignUpForm: FC<ISignUpFormProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values, formikHelpers) => {
      dispatch(SignUpThunk(values))
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

  return (
    <StyledSignUpForm onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        className="form-field"
        name="email"
        type="email"
        placeholder="Email..."
        id="outlined-multiline-flexible"
        label="Please Enter you email"
        multiline
        maxRows={4}
        value={values.email}
        onChange={handleChange}
      />
      <TextField
        placeholder="Password..."
        variant="outlined"
        type="password"
        name="password"
        className="form-field"
        id="outlined-multiline-flexible"
        label="Enter your Password"
        multiline
        maxRows={4}
        value={values.password}
        onChange={handleChange}
      />

      <Button variant="contained" fullWidth type="submit">
        Sign Up
      </Button>
    </StyledSignUpForm>
  );
};

export default SignUpForm;
