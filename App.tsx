import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {Navigator} from './src/navigator/StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
