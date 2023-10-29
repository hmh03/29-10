import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const OnboardScreen = () => {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Welcome')}>
      <Image source={require('../assets/shop1.png')} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
});

export default OnboardScreen;
