import React from 'react';
import MIcon from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

type Props = {
  date: Date;
  title: string;
  icon?: React.ReactNode;
  address?: string;
};

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const Item = ({ date, icon, address, title }: Props) => {
  const { navigate } = useNavigation();
  return (
    <S.Container
      style={{ backgroundColor: icon ? '#e55f40' : '#fff' }}
      onPress={() => navigate('Detail')}>
      <S.DateContainer>
        <S.Month style={{ color: icon ? '#fff' : '#999' }}>
          {date.toLocaleString('en').slice(4, 7)}
        </S.Month>
        <S.Day style={{ color: icon ? '#fff' : '#000' }}>
          {date.getDate()}
        </S.Day>
        <S.Weekday style={{ color: icon ? '#fff' : '#999' }}>
          {days[date.getDay()]}
        </S.Weekday>
      </S.DateContainer>

      <S.ContentContainer>
        <S.Title
          style={{
            color: icon ? '#fff' : '#000',
            fontSize: icon ? 16 : 14,
            lineHeight: icon ? 18 : 15,
          }}>
          {title}
        </S.Title>
        {!icon && (
          <>
            <S.Address>{address}</S.Address>
            <S.Time>{`${String(date.getHours()).padStart(2, '0')}:${String(
              date.getMinutes(),
            ).padStart(2, '0')}`}</S.Time>
          </>
        )}
      </S.ContentContainer>

      {icon}

      <MIcon
        name="chevron-right"
        size={30}
        color="#ccc"
        style={{ marginLeft: 12 }}
      />
    </S.Container>
  );
};
