import numeral from 'numeral';

export const fInputPriceMask = (number: string) => {
  numeral.localeData().delimiters.thousands = ' ';
  const value = number.replace(/\D/g, '');
  return numeral(value).format('0,0');
};
