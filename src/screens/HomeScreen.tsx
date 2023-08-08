import React from 'react';
import {Image, FlatList, ActivityIndicator, Text, View} from 'react-native';

import {styles} from '../themes/appTheme';
import usePokemonPaginated from '../hooks/usePokemonPaginated';
import PokemonCard from '../components/PokemonCard';
import FabButton from '../components/FabButton';

import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();
  const navigation = useNavigation<any>();
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />

      <View style={{alignItems: 'center'}}>
        <FlatList
          data={simplePokemonList}
          keyExtractor={pokemon => pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          //Header
          ListHeaderComponent={
            <Text
              style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20,
                marginBottom: top + 20,
                paddingBottom: 10,
              }}>
              Pokedex
            </Text>
          }
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          //Infinite Scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          //Indicator
          ListFooterComponent={
            <ActivityIndicator style={{height: 100}} size={30} color="grey" />
          }
        />

        <FabButton
          iconName="search-outline"
          onPress={() => navigation.navigate('SearchPokemonScreen')}
          size={30}
          background="white"
          style={{right: 30, bottom: 20}}
        />
      </View>
    </>
  );
};

export default HomeScreen;
