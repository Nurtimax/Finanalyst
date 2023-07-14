import { FormControl, FormLabel, styled, TextField, Typography } from '@mui/material';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/dispatch';
import { actionFinancialPlanner } from '../../store/financial-planner';

export interface TableCellProps {
  name: string;
  month: string;
  storeId: number;
  monthId: string;
}

const StyledFormLabel = styled(FormLabel)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  '& .text': {
    fontSize: '8px',
  },
}));

const TableCell: FC<TableCellProps> = ({ month, name, storeId, monthId }) => {
  const [value, setValue] = useState(0);

  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  useEffect(() => {
    dispatch(actionFinancialPlanner.changeStoreValues({ value, monthId, storeId }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <FormControl>
      <StyledFormLabel htmlFor="number">
        <Typography className="text" variant="body2">
          {name}
        </Typography>
        <Typography className="text" variant="body2">
          {month}
        </Typography>
      </StyledFormLabel>
      <TextField
        variant="outlined"
        type="number"
        id="disabledPadding"
        value={String(value).replace(/^0+/, '')}
        onChange={handleChange}
      />
    </FormControl>
  );
};

export default TableCell;
