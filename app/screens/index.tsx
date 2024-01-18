import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../lib/types';
import {tw} from '../lib/theme';
type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};
const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={tw`  bg-slate-100  items-center justify-center`}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('About');
          navigation.navigate('About');
        }}
        style={tw` mt-11 bg-black px-5 py-3 rounded`}>
        <Text style={tw`  text-white`}>Go to About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('About');
          navigation.navigate('Animation');
        }}
        style={tw` mt-11 bg-black px-5 py-3 rounded`}>
        <Text style={tw`  text-white`}>Go to Animation</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('About');

          navigation.navigate('GestureAnimation');
        }}
        style={tw` mt-11 bg-black px-5 py-3 rounded`}>
        <Text style={tw`  text-white`}>Go to Gesture Animation</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('About');

          navigation.navigate('SwipeToDelete');
        }}
        style={tw` mt-11 bg-black px-5 py-3 rounded`}>
        <Text style={tw`  text-white`}>Go to SwipeToDelete Animation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
