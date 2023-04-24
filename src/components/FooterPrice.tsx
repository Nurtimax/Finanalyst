import { FC } from "react";
import { useAppSelector } from "../hooks/dispatch";

interface FooterPriceProps {
  header: string;
  keys: Array<string[]>;
  index: number;
}

const FooterPrice: FC<FooterPriceProps> = ({ header, keys, index }) => {
  const { data } = useAppSelector((state) => state.price);

  const choosedKey = keys.map((item) => item[index]);

  const footerPrice = data.map((item) =>
    item.months.find((item) => choosedKey.includes(item.id))
  );
  const totalFooterPrice = footerPrice.reduce((acc, item) => {
    if (item?.value) {
      return acc + item?.value;
    }
    return acc;
  }, 0);

  return <div>$ {totalFooterPrice}</div>;
};

export default FooterPrice;
