import { useCallback, useState } from 'react';
import type { PropsWithChildren } from 'react';
import { TouchableOpacity, View, TextInput, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import numeral from 'numeral';
import styled from 'styled-components/native';
import Section from './Section';
import type { ExchangeRate } from '../types';

type ConvertProps = PropsWithChildren<{
  exchangeRates: ExchangeRate[];
}>;

const StyledInput = styled(TextInput)(() => ({
  borderWidth: 1,
  backgroundColor: '#ededed',
  borderColor: 'transparent',
  borderRadius: 12,
  fontSize: 22,
  height: 50,
  width: 190,
  paddingHorizontal: 15,
}));

const Flexbox = styled(View)(() => ({
  display: 'flex',
  flexDirection: 'row' as 'row',
  alignItems: 'center',
}));

const ConvertAction = styled(View)(() => ({
  display: 'flex',
  flexDirection: 'row' as 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '22px 30px',
  backgroundColor: '#6391ff',
}));

const ConvertButton = styled(TouchableOpacity)(() => ({
  backgroundColor: '#c13c37',
  borderRadius: 11,
  padding: '15px 31px',
}));

const ConvertButtonText = styled(Text)(() => ({
  color: '#fff',
}));

const ConvertedValText = styled(Text)(() => ({
  color: '#fff',
  fontSize: 27,
}));

const ConvertedCurText = styled(Text)(() => ({
  color: '#fff',
  fontSize: 27,
}));

const Convert = ({ exchangeRates = [] }: ConvertProps): JSX.Element => {
  const [amount, setAmount] = useState<string>('0');
  const [code, setCode] = useState<string>('USD');
  const [converted, setConverted] = useState({
    amount: 0,
    currency: 'dollar',
  });

  const handleConvert = useCallback(() => {
    const selectedExchangeRate = exchangeRates.find(
      (exchangeRate) => exchangeRate.code === code,
    );

    const convertedValue =
      (Number(amount) / selectedExchangeRate!.rate) *
      selectedExchangeRate!.amount;

    setConverted({
      amount: convertedValue,
      currency: selectedExchangeRate!.currency,
    });
  }, [amount, code]);

  return (
    <>
      <Section title="Convert">
        <Flexbox>
          <StyledInput
            placeholder="Amount"
            onChangeText={setAmount}
            keyboardType="numeric"
            value={amount}
          />
          <Picker
            style={{ flex: 1 }}
            selectedValue={code}
            onValueChange={(itemValue, itemIndex) => setCode(itemValue)}
          >
            {exchangeRates.map((rate, idx) => (
              <Picker.Item key={idx} label={rate.code} value={rate.code} />
            ))}
          </Picker>
        </Flexbox>
      </Section>
      <ConvertAction>
        <ConvertButton onPress={handleConvert}>
          <ConvertButtonText>Convert</ConvertButtonText>
        </ConvertButton>
        <ConvertedValText>
          {numeral(converted.amount).format('0,0.00')} {converted.currency}
        </ConvertedValText>
      </ConvertAction>
    </>
  );
};

export default Convert;
