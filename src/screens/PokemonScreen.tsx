import {View, Text} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

const PokemonScreen = ({navigation, route}: Props) => {
  const {simplePokemon: pokemon, color} = route.params;

  return (
    <View>
      <Text style={{color: color}}>{pokemon.name}</Text>
    </View>
  );
};

export default PokemonScreen;
