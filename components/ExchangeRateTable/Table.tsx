import type { PropsWithChildren } from 'react';
import {
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import styled from 'styled-components/native';
import numeral from 'numeral';
import type { ExchangeRate } from '../../types';

type TableProps = PropsWithChildren<{
  headers: string[];
  exchangeRates?: ExchangeRate[];
  style?: any;
}>;

type Align = 'left' | 'center' | 'right';

const StyledTable = styled(View)(() => ({
  display: 'flex',
  flexDirection: 'column' as 'column',
}));

const Row = styled(View)(() => ({
  flex: 1,
  flexDirection: 'row' as 'row',
  marginBottom: 7,
}));

const Cell = styled(Text)(({ align = 'left' }: { align?: Align }) => ({
  flex: 1,
  textAlign: align,
}));

const CodeCell = styled(Text)(() => ({
  flex: 1,
  textAlign: 'center' as 'center',
  maxWidth: 35,
  marginLeft: 20,
  marginRight: 20,
}));

const HeadCell = styled(Text)(({ align = 'left' }: { align?: Align }) => ({
  flex: 1,
  fontWeight: 600,
  textAlign: align,
}));

const Table = ({
  exchangeRates = [],
  headers = [],
}: TableProps): JSX.Element => {
  return (
    <StyledTable>
      <Row>
        {headers.map((headerCell, headerIdx) => (
          <HeadCell
            key={headerIdx}
            align={
              headerCell === 'Amount' || headerCell === 'Rate'
                ? 'right'
                : headerCell === 'Code'
                ? 'center'
                : 'left'
            }
          >
            {headerCell}
          </HeadCell>
        ))}
      </Row>
      {exchangeRates.map((rateItem, rateIdx) => (
        <Row key={rateIdx}>
          <Cell>{rateItem.country}</Cell>
          <Cell>{rateItem.currency}</Cell>
          <Cell align='right'>{rateItem.amount}</Cell>
          <CodeCell>{rateItem.code}</CodeCell>
          <Cell align="right">{numeral(rateItem.rate).format('0,0.00')}</Cell>
        </Row>
      ))}
    </StyledTable>
  );
};

export default Table;
