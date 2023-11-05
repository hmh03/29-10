import React from 'react';
import {  View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const PhoneScreen = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <TouchableOpacity  onPress={() => navigation.navigate('Code')}>
      <Image style={{ width:'100%', height: '100%'}} source={require('../assets/shop4.png')} />
    </TouchableOpacity>
    </View>
    
  );
};
const styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'red',
  },
});
export default PhoneScreen;
