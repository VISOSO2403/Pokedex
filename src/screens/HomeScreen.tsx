import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from '../themes/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import usePokemonPaginated from '../hooks/usePokemonPaginated';

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  usePokemonPaginated();

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />
      <Text style={{...styles.title, ...styles.globalMargin, top: top + 20}}>
        Pokedex
      </Text>
    </>
  );
};

export default HomeScreen;
