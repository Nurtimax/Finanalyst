import { Box, styled, Typography } from '@mui/material';
import { FC } from 'react';
import { useAppSelector } from '../../hooks/dispatch';
import { StoreMonthData } from '../../types/data';
import { fInputPriceMask } from '../../utils/helpers/priceMask';

interface TotalProps {
  original: StoreMonthData;
}

const StyledTotal = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '0.2rem',
  minWidth: '80px',

  '& .total__price': {
    overflow: 'auto',
    maxWidth: '80px',
  },
}));

const Total: FC<TotalProps> = ({ original }) => {
  const { data } = useAppSelector((state) => state.price);

  const totalPrice = data.reduce((acc, item) => {
    if (item.store.id === original.store.id) {
      return (
        acc +
        item.months.reduce((subAcc, subItem) => {
          return subAcc + subItem.value;
        }, 0)
      );
    }
    return acc;
  }, 0);

  return (
    <StyledTotal>
      $
      <Typography variant="body1" className="total__price">
        {fInputPriceMask(String(totalPrice))}
      </Typography>
    </StyledTotal>
  );
};

export default Total;
