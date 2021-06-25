import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background: #333;
`;

export const ItemContainer = styled.View`
  width: 100%;
  padding: 10px 20px;
  flex-direction: row;
`;

export const Item = styled(RectButton)`
  width: 25%;
  min-width: 50px;
  height: 80px;
  justify-content: center;
  align-items: center;
`;

export const ItemText = styled.Text`
  color: #eee;
  font-size: 14px;
`;

export const SearchContainer = styled.View`
  width: 100%;
  background: #e55f40;
  padding: 10px;
`;

export const Input = styled.TextInput`
  width: 100%;
  text-align: center;
  background: #fff;
  border-radius: 4px;
`;
