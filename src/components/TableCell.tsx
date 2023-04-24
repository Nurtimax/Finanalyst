import { ChangeEvent, FC } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/dispatch";
import { actionPriceSlice } from "../store/price";

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

const TableCell: FC<TableCellProps> = ({ id, storeId }) => {
  const { data } = useAppSelector((state) => state.price);

  const dispatch = useAppDispatch();

  const newStoreId: newStoreId = data.reduce((acc, item) => {
    const result = item.months.reduce((subAcc, subItem) => {
      if (id === subItem.id) {
        const newSubValues: subNewStoreValues = {
          ...subAcc,
          id: item.store.name,
          value: subItem.value,
        };
        return newSubValues;
      }
      return subAcc;
    }, {});
    return { ...acc, ...result };
  }, {});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isNaN(Number(e.target.value))) {
      if (newStoreId.id) {
        dispatch(
          actionPriceSlice.changeValue({
            id,
            storeId: newStoreId?.id,
            value: Number(e.target.value),
          })
        );
      }
    }
  };

  return (
    <>
      <input
        type="text"
        value={newStoreId.value}
        onChange={handleChange}
        style={{ width: "100%" }}
      />
    </>
  );
};

export default TableCell;
