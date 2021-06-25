import React from 'react';
import MIcon from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MCIcons from '@expo/vector-icons/MaterialCommunityIcons';

import * as S from './styles';

export const Filters = () => {
  return (
    <S.Container>
      <S.ItemContainer>
        <S.Item>
          <MIcon
            name="local-movies"
            color="#eee"
            size={42}
            style={{ height: 45 }}
          />
          <S.ItemText>Cinema</S.ItemText>
        </S.Item>
        <S.Item>
          <Ionicons
            name="ios-basketball"
            color="#eee"
            size={42}
            style={{ height: 45 }}
          />
          <S.ItemText>Esportes</S.ItemText>
        </S.Item>
        <S.Item>
          <Ionicons
            name="musical-note"
            color="#eee"
            size={42}
            style={{ height: 45 }}
          />
          <S.ItemText>Música</S.ItemText>
        </S.Item>
        <S.Item>
          <MCIcons
            name="baby-face-outline"
            color="#eee"
            size={42}
            style={{ height: 45 }}
          />
          <S.ItemText>Nens i nenes</S.ItemText>
        </S.Item>
      </S.ItemContainer>

      <S.SearchContainer>
        <S.Input placeholder="Search" />
      </S.SearchContainer>
    </S.Container>
  );
};
