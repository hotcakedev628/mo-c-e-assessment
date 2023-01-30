import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';

type SectionProps = PropsWithChildren<{
  title: string;
  style?: any;
}>;

const SectionContainer = styled(View)(() => ({
  marginTop: 32,
  paddingHorizontal: 24,
}));

const SectionTitle = styled(Text)(({ color }: { color?: string }) => ({
  fontSize: 24,
  fontWeight: '600',
  color,
}));

const SectionContent = styled(View)(() => ({
  marginTop: 8,
  fontSize: 18,
  fontWeight: '400',
}));

const Section = ({ children, title, style }: SectionProps): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SectionContainer style={style}>
      <SectionTitle color={isDarkMode ? Colors.white : Colors.black}>
        {title}
      </SectionTitle>
      <SectionContent>{children}</SectionContent>
    </SectionContainer>
  );
};

export default Section;
