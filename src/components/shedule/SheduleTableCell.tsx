import React, { FC, useMemo } from 'react';
import { Box, styled, Typography } from '@mui/material';
import { useAppSelector } from '../../hooks/dispatch';
import { getHoursFromDate } from '../../utils/helpers/formatDate';
import dayjs, { Dayjs } from 'dayjs';

interface ISheduleTableCellProps {
  [key: string]: unknown;
  id: number;
  date: Dayjs | null;
}

const StyledSheduleTableCell = styled(Box)(() => ({}));

const SheduleTableCell: FC<ISheduleTableCellProps> = ({ id, date }) => {
  const { data } = useAppSelector((state) => state.shedule);

  const findData = useMemo(() => {
    return data.find((el) => el.id === id);
  }, [id, data]);

  return (
    <StyledSheduleTableCell>
      {findData ? (
        <>
          {findData.dates.map((findDate) => (
            <>
              {dayjs(findDate.date).date() === dayjs(date).date() ? (
                <Typography>
                  {getHoursFromDate(dayjs(findDate.startDate))} - {getHoursFromDate(dayjs(findDate.endDate))}
                </Typography>
              ) : null}
            </>
          ))}
        </>
      ) : null}
    </StyledSheduleTableCell>
  );
};

export default SheduleTableCell;
