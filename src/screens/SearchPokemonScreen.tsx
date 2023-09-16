import React, {useEffect, useState} from 'react';
import {View, Platform, Text, FlatList, Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import usePokemonSearch from '../hooks/usePokemonSearch';
import SearchInput from '../components/SearchInput';
import Loading from '../components/Loading';
import PokemonCard from '../components/PokemonCard';
import {styles} from '../themes/appTheme';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';

const screenWith = Dimensions.get('window').width;

const SearchPokemonScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokemonSearch();

  const [pokemonFilter, setPokemonFiltered] = useState<SimplePokemon[]>([]);

  const [term, setTerm] = useState('');

  useEffect(() => {
    if (term.length === 0) {
      return setPokemonFiltered([]);
    }

    if (isNaN(Number(term))) {
      setPokemonFiltered(
        simplePokemonList.filter(poke =>
          poke.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()),
        ),
      );
    } else {
      const pokemonById = simplePokemonList.find(poke => poke.id === term);
      setPokemonFiltered(pokemonById ? [pokemonById] : []);
    }
  }, [term]);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 20,
      }}>
      <SearchInput
        onDebaunce={value => setTerm(value)}
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWith - 40,
          top: Platform.OS === 'ios' ? top : top + 20,
        }}
      />

      <FlatList
        data={pokemonFilter}
        keyExtractor={pokemon => pokemon.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        //Header
        ListHeaderComponent={
          <Text
            style={{
              ...styles.title,
              ...styles.globalMargin,
              paddingBottom: 10,
              marginTop: Platform.OS === 'ios' ? top + 60 : top + 70,
            }}>
            {term}
          </Text>
        }
        renderItem={({item}) => <PokemonCard pokemon={item} />}
      />
    </View>
  );
};

export default SearchPokemonScreen;
