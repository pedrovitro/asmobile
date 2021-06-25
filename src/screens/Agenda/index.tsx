import React, { useState } from 'react';
import Icon from '@expo/vector-icons/FontAwesome5';
import MIcon from '@expo/vector-icons/MaterialIcons';

import { Filters } from './Filters';
import { List } from './List';
import * as S from './styles';

export const Agenda = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  return (
    <S.Container>
      <S.Header>
        <S.HeaderButton>
          <Icon name="bars" size={18} color="#fff" />
        </S.HeaderButton>
        <S.HeaderTitle>Agenda</S.HeaderTitle>
        <S.HeaderButton onPress={() => setIsFilterOpen(!isFilterOpen)}>
          <MIcon name="touch-app" size={22} color="#fff" />
        </S.HeaderButton>
      </S.Header>

      {isFilterOpen && <Filters />}

      <List />
    </S.Container>
  );
};
