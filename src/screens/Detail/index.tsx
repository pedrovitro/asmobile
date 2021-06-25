import React from 'react';
import MIcon from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import imgSrc from '../../../assets/restaurant.jpg';

import * as S from './styles';

export const Detail = () => {
  const { goBack } = useNavigation();

  return (
    <S.Container>
      <S.Header>
        <S.HeaderButton onPress={() => goBack()}>
          <MIcon name="chevron-left" size={40} color="#fff" />
        </S.HeaderButton>
        <S.HeaderTitle>Comerços</S.HeaderTitle>
        <S.HeaderButton>
          <MIcon name="share" size={22} color="#fff" />
        </S.HeaderButton>
      </S.Header>

      <S.Img source={imgSrc} resizeMode="cover" />

      <S.Badge>
        <MIcon name="local-restaurant" color="#fff" size={40} />
      </S.Badge>

      <S.ContentContainer>
        <S.Title>La Solana</S.Title>
        <S.Address>Placa Ramón Bertran, 10</S.Address>
        <S.Details>T: 9734007009</S.Details>
        <S.Details>
          De dt. a ds., 13 a 15.30h i 2 a 23 h. Dg., de 13 a 15.30 h
        </S.Details>

        <S.Description>
          Cuina d' autor i tradiciona catalana elaborada amb productes de la
          comarca. A favor: Bona selecció de materies primeres. Situat en una
          casa pairal tranquil.la i alcolidora. En contra: Ben sovint és dificil
          troba-hi taula. És recomanable reservar amb força antelació Tipus de
          cucina: Creativa, , mediterrània Preu: De 30 a 40 $ Dia de tancament:
          Dg. nit i dl Menú de temporada: 23 $ (sense beguda)
        </S.Description>
      </S.ContentContainer>
    </S.Container>
  );
};
