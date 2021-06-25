import React from 'react';
import MIcon from '@expo/vector-icons/MaterialIcons';

import { Item } from './Item';
import * as S from './styles';

export const List = () => {
  return (
    <S.Container>
      <S.Separator>
        <S.SeparatorText>Dezembro 2020</S.SeparatorText>
      </S.Separator>

      <Item
        date={new Date()}
        title="Festa Major de Bellpuig"
        icon={<MIcon name="stars" size={30} color="#fff" />}
      />
      <Item
        date={new Date()}
        title="acte que ha creat el joan"
        address="Plaça Ramon Bertran, 10"
      />
      <Item
        date={new Date()}
        title="Festa Major de Bellpuig"
        icon={<MIcon name="stars" size={30} color="#fff" />}
      />
      <Item
        date={new Date()}
        title="acte que ha creat el joan"
        address="Plaça Ramon Bertran, 10"
      />

      <S.Separator>
        <S.SeparatorText>Janeiro 2021</S.SeparatorText>
      </S.Separator>

      <Item
        date={new Date()}
        title="acte que ha creat el joan"
        address="Plaça Ramon Bertran, 10"
      />
      <Item
        date={new Date()}
        title="acte que ha creat el joan"
        address="Plaça Ramon Bertran, 10"
      />
      <Item
        date={new Date()}
        title="acte que ha creat el joan"
        address="Plaça Ramon Bertran, 10"
      />
      <Item
        date={new Date()}
        title="acte que ha creat el joan"
        address="Plaça Ramon Bertran, 10"
      />
      <Item
        date={new Date()}
        title="acte que ha creat el joan"
        address="Plaça Ramon Bertran, 10"
      />
    </S.Container>
  );
};
