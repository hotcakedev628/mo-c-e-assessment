import { useMemo } from 'react';
import ExchangeRateTable from '../components/ExchangeRateTable';
import Convert from '../components/Convert';
import useData from '../hooks/useData';
import createData from '../utils/createData';
import SplashScreen from '../components/SplashScreen';

const Home = (): JSX.Element => {
  const { data: rates, isLoading } = useData();

  const headers = useMemo(() => {
    return !isLoading && rates ? rates[0].split('|') : [];
  }, [isLoading, rates]);

  const exchangeRates = useMemo(() => {
    return !isLoading && rates
      ? rates.slice(1).map((rate) => createData(rate.split('|')))
      : [];
  }, [isLoading, rates]);

  return isLoading ? (
    <SplashScreen />
  ) : (
    <>
      <Convert exchangeRates={exchangeRates} />
      <ExchangeRateTable headers={headers} exchangeRates={exchangeRates} />
    </>
  );
};

export default Home;
