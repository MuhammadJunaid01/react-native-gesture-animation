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
    <View
      testID="menu-screen"
      style={tw`  bg-slate-100  items-center justify-center`}>
      <Text>HOME SCREEN</Text>
    </View>
  );
};

export default HomeScreen;
