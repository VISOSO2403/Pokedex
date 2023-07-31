import {View, Text, Image, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from '../themes/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import usePokemonPaginated from '../hooks/usePokemonPaginated';

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();
  console.log(simplePokemonList);

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />

      <FlatList
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Image
            source={{uri: item.picture}}
            style={{width: 100, height: 100}}
          />
        )}
        //Infinite Scroll
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        //Indicator
        ListFooterComponent={
          <ActivityIndicator style={{height: 100}} size={30} color="grey" />
        }
      />
      {/* <Text style={{...styles.title, ...styles.globalMargin, top: top + 20}}>
        Pokedex
      </Text> */}
    </>
  );
};

export default HomeScreen;
