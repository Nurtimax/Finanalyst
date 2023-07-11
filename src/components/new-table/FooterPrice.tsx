import { FC } from 'react';
import { useAppSelector } from '../../hooks/dispatch';
import { fInputPriceMask } from '../../utils/helpers/priceMask';

interface FooterPriceProps {
  keys: Array<string[]>;
  index: number;
}

const FooterPrice: FC<FooterPriceProps> = ({ keys, index }) => {
  const { data } = useAppSelector((state) => state.financial);

  const choosedKey = keys.map((item) => item[index]);

  const footerPrice = data.map((item) => item.months.find((item) => choosedKey.includes(item.id)));
  const totalFooterPrice = footerPrice.reduce((acc, item) => {
    if (item?.value) {
      return acc + item?.value;
    }
    return acc;
  }, 0);

  return <div>$ {fInputPriceMask(String(totalFooterPrice))}</div>;
};

export default FooterPrice;
