import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  background-color: #e55f40;
  padding: 0 10px;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  flex: 1;
`;

export const HeaderButton = styled(RectButton)`
  width: 40px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.Image`
  width: 100%;
  height: 180px;
`;

export const Badge = styled.View`
  background: #e55f40;
  width: 80px;
  height: 80px;
  border-radius: 80px;
  align-items: center;
  justify-content: center;

  left: 20px;
  top: -40px;
`;

export const ContentContainer = styled.ScrollView`
  flex: 1;
  width: 70%;
  margin: -16px auto 0;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;

export const Address = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: orange;
`;

export const Details = styled.Text`
  color: #000;
  font-size: 14px;
`;

export const Description = styled.Text`
  color: #000;
  font-size: 12px;
  border-color: #ccc;
  border-top-width: 2px;
  margin-top: 16px;
  padding-top: 6px;
`;
