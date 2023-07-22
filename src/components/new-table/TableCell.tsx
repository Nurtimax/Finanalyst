import { FormControl, FormLabel, styled, TextField, Typography } from '@mui/material';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { actionFinancialPlanner } from 'store/slice/financial-planner';
import { useAppDispatch } from '../../hooks/dispatch';

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

const StyledFormControl = styled(FormControl)(() => ({
  padding: '3px',
}));

const StyledTextField = styled(TextField)(() => ({
  padding: '3px 0',
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
    <StyledFormControl>
      <StyledFormLabel htmlFor="number">
        <Typography className="text" variant="body2">
          {name}
        </Typography>
        <Typography className="text" variant="body2">
          {month}
        </Typography>
      </StyledFormLabel>
      <StyledTextField
        variant="outlined"
        type="number"
        id="disabledPadding"
        value={String(value).replace(/^0+/, '')}
        onChange={handleChange}
      />
    </StyledFormControl>
  );
};

export default TableCell;
