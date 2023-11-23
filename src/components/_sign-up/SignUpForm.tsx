import React, { FC } from 'react';
import { Button, styled, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { SignUpThunk } from 'store/thunk/authentication-thunk';
import { useAppDispatch } from 'hooks/dispatch';
import FormHeadlines from 'components/_sign-in/FormHeadlines';

interface ISignUpFormProps {
  [key: string]: unknown;
}

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
  marginTop: theme.spacing(2),
  display: 'flex',
  alignItems: 'center'
}));

const StyledImage = styled('img')(({ theme }) => ({
  width: '250px',
  height: '250px',
  marginBottom: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center'
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
          label={'Please Enter a your email'}
        />

        <TextField
          variant="outlined"
          className="form-field"
          name="password"
          type="password"
          label={'Please Enter a your password'}
          value={values.password}
          onChange={handleChange}
        />
      </StyledFormFields>
      <StyledButton variant="contained" fullWidth type="submit">
        Sign Up
      </StyledButton>
    </StyledSignInForm>
  );
};

export default SignUpForm;
