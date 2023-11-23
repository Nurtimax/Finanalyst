import React, { FC } from 'react';
import { Box, Button, FormControl, FormLabel, styled, TextField } from '@mui/material';
import FormHeadlines from './FormHeadlines';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useAppDispatch } from 'hooks/dispatch';
import { SignInThunk } from 'store/thunk/authentication-thunk';

interface ISignInFormProps {
  [key: string]: unknown;
}

const SignInForm: FC<ISignInFormProps> = () => {
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

      <StyledFormFields>
        <TextField
          variant="outlined"
          className="form-field"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          label={'Please Enter your email'}
        />

        <TextField
          variant="outlined"
          className="form-field"
          name="password"
          type="password"
          label={'Please Enter your password'}
          value={values.password}
          onChange={handleChange}
        />
      </StyledFormFields>
      <StyledButton variant="contained" fullWidth type="submit">
        Sign In
      </StyledButton>
    </StyledSignInForm>
  );
};

export default SignInForm;



const StyledSignInForm = styled('form')(({ theme }) => ({
  width: '30vw',
  background: '#fff',
  padding: theme.spacing(2),
  borderRadius: '5px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
}));

const StyledFormFields = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2)
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2)
}));