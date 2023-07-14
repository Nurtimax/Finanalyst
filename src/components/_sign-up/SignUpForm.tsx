import React, { FC } from 'react';
import { Box, Button, FormControl, FormLabel, styled, TextField } from '@mui/material';
import FormHeadLines from './FormHeadLines';

interface ISignUpFormProps {
  [key: string]: unknown;
}

const StyledSignUpForm = styled(Box)(() => ({
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
  padding: '1rem 0.5rem',
}));

const SignUpForm: FC<ISignUpFormProps> = () => {
  return (
    <StyledSignUpForm>
      <FormHeadLines />
      <FormControl fullWidth>
        <FormLabel htmlFor="email">Email</FormLabel>
        <TextField variant="outlined" id="form-field" name="email" type="email" />
      </FormControl>
      <FormControl fullWidth>
        <FormLabel htmlFor="password">Password</FormLabel>
        <TextField variant="outlined" id="form-field" name="password" />
      </FormControl>
      <StyledFormAction>
        <Button variant="outlined" fullWidth>
          Cancel
        </Button>
        <Button variant="contained" fullWidth>
          Sign Up
        </Button>
      </StyledFormAction>
    </StyledSignUpForm>
  );
};

export default SignUpForm;
