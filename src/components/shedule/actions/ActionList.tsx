import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import { ISheduleDates } from '../../../types/data';
import ListItem from './ListItem';

interface IActionListProps {
  [key: string]: unknown;
  dates: ISheduleDates[];
}

const StyledActionList = styled(Box)(() => ({
  overflow: 'auto',
}));

const ActionList: FC<IActionListProps> = ({ dates }) => {
  return (
    <StyledActionList sx={{ maxHeight: dates.length > 1 ? '130px' : '100%' }}>
      {dates.map((date) => (
        <ListItem key={date.id} {...date} />
      ))}
    </StyledActionList>
  );
};

export default ActionList;
