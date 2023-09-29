import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/dispatch';
import { fInputPriceMask } from '../../utils/helpers/priceMask';

const Price: FC = () => {
  const { data } = useAppSelector((state) => state.price);

  const totalOfTotalMonths = data.map((item) =>
    item.months.map((el) => el.value).reduce((acc, value) => acc + value, 0)
  );

  const totalOfTotalPrice = totalOfTotalMonths.reduce((acc, item) => acc + item, 0);

  return <div>$ {fInputPriceMask(String(totalOfTotalPrice))}</div>;
};

export default Price;
