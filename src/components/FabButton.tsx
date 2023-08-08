import React from 'react';
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  iconName: string;
  size: number;
  onPress: () => void;
  background?: string;
  style?: StyleProp<ViewStyle>;
}

const FabButton = (props: Props) => {
  const {iconName, size, onPress, style, background} = props;

  return (
    <View style={{...(style as any), position: 'absolute'}}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={{
          ...styles.fabButton,
          backgroundColor: background,
        }}>
        <Icon name={iconName} color="black" size={size} />
      </TouchableOpacity>
    </View>
  );
};

export const styles = StyleSheet.create({
  fabButton: {
    zIndex: 9999,
    height: 50,
    width: 50,
    // backgroundColor: 'black',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default FabButton;
