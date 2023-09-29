import { TextField } from '@mui/material';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { actionPriceSlice } from 'store/slice/price';
import { useAppDispatch, useAppSelector } from '../../hooks/dispatch';

export interface TableCellProps {
  value: number;
  id: string;
  storeId: string;
}

interface newStoreId {
  id?: string;
  value?: number;
}

interface subNewStoreValues {
  id: string;
  value: number;
}

const TableCell: FC<TableCellProps> = ({ id }) => {
  const [value, setValue] = useState(0);
  const { data } = useAppSelector((state) => state.price);

  const dispatch = useAppDispatch();

  const newStoreId: newStoreId = data.reduce((acc, item) => {
    const result = item.months.reduce((subAcc, subItem) => {
      if (id === subItem.id) {
        const newSubValues: subNewStoreValues = {
          ...subAcc,
          id: item.store.name,
          value: subItem.value
        };
        return newSubValues;
      }
      return subAcc;
    }, {});
    return { ...acc, ...result };
  }, {});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  useEffect(() => {
    if (!isNaN(Number(value))) {
      if (newStoreId.id) {
        dispatch(
          actionPriceSlice.changeValue({
            id,
            storeId: newStoreId?.id,
            value
          })
        );
      }
    }
  }, [value]);

  return (
    <>
      <TextField
        variant="outlined"
        type="number"
        id="disabledPadding"
        value={String(value).replace(/^0+/, '')}
        onChange={handleChange}
      />
    </>
  );
};

export default TableCell;
