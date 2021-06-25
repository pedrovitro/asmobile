import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  padding: 4px 10px;
  flex-direction: row;
  align-items: center;
`;

export const DateContainer = styled.View`
  width: 80px;
  justify-content: space-between;
  align-items: center;
`;

export const Month = styled.Text`
  font-size: 14px;
  text-transform: uppercase;
  line-height: 15px;
`;

export const Day = styled.Text`
  font-size: 28px;
  line-height: 30px;
`;

export const Weekday = styled.Text`
  font-size: 14px;
  line-height: 15px;
`;

export const ContentContainer = styled.View`
  justify-content: center;
  flex: 1;
`;

export const Title = styled.Text`
  line-height: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #000;
`;

export const Address = styled.Text`
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: orange;
`;

export const Time = styled.Text`
  line-height: 15px;
  font-size: 14px;
  color: #000;
`;
