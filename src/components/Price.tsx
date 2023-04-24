import { FC } from "react";
import { useAppSelector } from "../hooks/dispatch";

interface PriceProps {}

const Price: FC<PriceProps> = () => {
  const { data } = useAppSelector((state) => state.price);

  const totalOfTotalMonths = data.map((item) =>
    item.months.map((el) => el.value).reduce((acc, value) => acc + value, 0)
  );

  const totalOfTotalPrice = totalOfTotalMonths.reduce(
    (acc, item) => acc + item,
    0
  );

  return <div>$ {totalOfTotalPrice}</div>;
};

export default Price;
