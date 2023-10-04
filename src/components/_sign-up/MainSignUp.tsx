import React, { FC } from 'react';
import { Box, Card, styled } from '@mui/material';
import SignUpForm from './SignUpForm';

interface IMainSignUpProps {
  [key: string]: unknown;
}

const StyledMainSignUp = styled(Box)(() => ({
  background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
  backgroundSize: '400% 400%',
  animation: 'BACKGROUND_GRADIENT_ANIMATION 15s ease infinite',
  height: '93.15vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem'
}));

const MainSignUp: FC<IMainSignUpProps> = () => {
  return (
    <StyledMainSignUp>
      <Card>
        
      </Card>
      <SignUpForm />
    </StyledMainSignUp>
  );
};

export default MainSignUp;
