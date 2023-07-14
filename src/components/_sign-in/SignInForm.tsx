import React, { FC } from 'react';
import { Box, Button, FormControl, FormLabel, styled, TextField } from '@mui/material';
import FormHeadlines from './FormHeadlines';
import { useNavigate } from 'react-router-dom';

interface ISignInFormProps {
  [key: string]: unknown;
}

const StyledSignInForm = styled(Box)(() => ({
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

const SignInForm: FC<ISignInFormProps> = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <StyledSignInForm>
      <FormHeadlines />
      <FormControl fullWidth>
        <FormLabel htmlFor="email">Email</FormLabel>
        <TextField variant="outlined" id="form-field" name="email" type="email" />
      </FormControl>
      <FormControl fullWidth>
        <FormLabel htmlFor="password">Password</FormLabel>
        <TextField variant="outlined" id="form-field" name="password" />
      </FormControl>
      <StyledFormAction>
        <Button variant="outlined" fullWidth onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="contained" fullWidth>
          Sign In
        </Button>
      </StyledFormAction>
    </StyledSignInForm>
  );
};

export default SignInForm;
