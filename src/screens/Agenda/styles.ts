import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #e55f40;
  padding: 0 20px;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const HeaderButton = styled(RectButton)`
  width: 30px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
