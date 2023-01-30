import type { ExchangeRate } from "../types";

const createData = (exchangeRateArr: string[]): ExchangeRate => {
  return {
    country: exchangeRateArr[0],
    currency: exchangeRateArr[1],
    amount: Number(exchangeRateArr[2]),
    code: exchangeRateArr[3],
    rate: Number(exchangeRateArr[4]),
  };
};

export default createData;
