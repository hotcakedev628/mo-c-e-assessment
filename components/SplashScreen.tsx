import { ActivityIndicator, StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';

const SplashContainer = styled(View)(() => ({
  flex: 1,
    justifyContent: 'center',
    flexDirection: 'row' as 'row',
    padding: 10,
}));

const SplashScreen = () => (
  <SplashContainer>
    <ActivityIndicator />
  </SplashContainer>
);

export default SplashScreen;
