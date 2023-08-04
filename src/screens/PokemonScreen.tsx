import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {RootStackParams} from '../navigator/StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {FadeInImage} from '../components/FadeInImage';
import {usePokemon} from '../hooks/usePokemon';
import PokemonDetails from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

const PokemonScreen = ({navigation, route}: Props) => {
  const {simplePokemon: pokemon, color} = route.params;
  const {top} = useSafeAreaInsets();

  const {isLoading, pokemon: fullPokemon} = usePokemon(pokemon.id);
  // console.log(fullPokemon);

  return (
    <View style={{flex: 1}}>
      <View style={{...styles.headerContainer, backgroundColor: color}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
          style={{...styles.backButton, top: top + 5}}>
          <Icon name="arrow-back-outline" size={35} color="black" />
        </TouchableOpacity>

        {/* Nombre del pokemon  */}
        <Text style={{...styles.pokemonName, top: top + 40}}>
          {pokemon.name + '\n'}#{pokemon.id}
        </Text>

        {/* Pokebola blanca */}
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={styles.pokeball}
        />
        <FadeInImage uri={pokemon.picture} style={styles.pokemonImage} />
      </View>

      {/* Detalles y loading */}
      {isLoading ? (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator color={color} size={50} />
        </View>
      ) : (
        <PokemonDetails pokemon={fullPokemon} />
      )}
    </View>
  );
};

export const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PokemonScreen;
