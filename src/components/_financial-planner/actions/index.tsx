import React, { FC } from 'react';
import { Box, Button, styled } from '@mui/material';
import { useAppDispatch } from '../../../hooks/dispatch';
import { actionFinancialPlanner } from '../../../store/financial-planner';

interface IFinancialActionsProps {
  [key: string]: unknown;
}

const data = {
  store: {
    id: 13,
    name: 'Store 13',
  },
  months: [
    {
      id: '1_1',
      name: 'JAN',
      value: 0,
    },
    {
      id: '2_1',
      name: 'FEB',
      value: 0,
    },
    {
      id: '3_1',
      name: 'MAR',
      value: 0,
    },
    {
      id: '4_1',
      name: 'APR',
      value: 0,
    },
    {
      id: '5_1',
      name: 'MAY',
      value: 0,
    },
    {
      id: '6_1',
      name: 'JUN',
      value: 0,
    },
    {
      id: '7_1',
      name: 'JUL',
      value: 0,
    },
    {
      id: '8_1',
      name: 'AUG',
      value: 0,
    },
    {
      id: '9_1',
      name: 'SEP',
      value: 0,
    },
    {
      id: '10_1',
      name: 'OCT',
      value: 0,
    },
    {
      id: '11_1',
      name: 'NOV',
      value: 0,
    },
    {
      id: '12_1',
      name: 'DEC',
      value: 0,
    },
  ],
};

const StyledFinancialActions = styled(Box)(() => ({
  border: '1px solid',
  padding: '1rem 0',
}));

const FinancialActions: FC<IFinancialActionsProps> = () => {
  const dispatch = useAppDispatch();

  const addStore = () => {
    dispatch(actionFinancialPlanner.addStore(data));
  };

  return (
    <StyledFinancialActions>
      <Button variant="outlined" onClick={addStore}>
        Add Store
      </Button>
    </StyledFinancialActions>
  );
};

export default FinancialActions;
