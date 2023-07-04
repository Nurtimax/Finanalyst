import React, { FC, useMemo } from 'react';
import { Box, styled, Typography } from '@mui/material';
import { useAppSelector } from '../../hooks/dispatch';

interface ISheduleTableCellProps {
  [key: string]: unknown;
  id: number;
}

const StyledSheduleTableCell = styled(Box)(() => ({}));

const SheduleTableCell: FC<ISheduleTableCellProps> = ({ id }) => {
  const { data } = useAppSelector((state) => state.shedule);

  const findData = useMemo(() => {
    return data.find((el) => el.id === id);
  }, [id, data]);

  return (
    <StyledSheduleTableCell>
      {findData ? (
        <>
          <Typography>{findData.dateTime}</Typography>
          <Typography>{id}</Typography>
        </>
      ) : null}
    </StyledSheduleTableCell>
  );
};

export default SheduleTableCell;

export const returnSheduleTableCell = (id: number) => <SheduleTableCell id={id} />;
