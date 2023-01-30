import type { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import Table from './Table';
import Section from '../Section';

import type { ExchangeRate } from '../../types';

type ExchangeRateTableProps = PropsWithChildren<{
  exchangeRates: ExchangeRate[];
  headers: string[];
}>;

const ExchangeRateTable = ({
  headers = [],
  exchangeRates = [],
}: ExchangeRateTableProps): JSX.Element => {
  return (
    <Section style={{ flex: 1 }} title="Exchange Rates">
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          {exchangeRates.length > 0 ? (
            <Table headers={headers} exchangeRates={exchangeRates} />
          ) : (
            <Text>No Data</Text>
          )}
        </View>
      </ScrollView>
    </Section>
  );
};

export default ExchangeRateTable;
