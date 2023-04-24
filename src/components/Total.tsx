import { FC } from "react";
import { useAppSelector } from "../hooks/dispatch";
import { StoreMonthData } from "../types/data";

interface TotalProps {
  original: StoreMonthData;
}

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

  return <div>Total: ${totalPrice}</div>;
};

export default Total;
