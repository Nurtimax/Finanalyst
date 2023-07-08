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
          {findData.dateTimes.map((time) => (
            <>
              {dayjs(time).date() === dayjs(date).date()
                ? findData.dates.map((date) => (
                    <Typography>
                      {getHoursFromDate(dayjs(date.startDate))} - {getHoursFromDate(dayjs(date.endDate))}
                    </Typography>
                  ))
                : null}
            </>
          ))}
        </>
      ) : null}
    </StyledSheduleTableCell>
  );
};

export default SheduleTableCell;
