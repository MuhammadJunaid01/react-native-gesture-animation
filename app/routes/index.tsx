import React from 'react';
import {View} from 'react-native';
import tw from 'twrnc';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../lib/types';
import HomeScreen from '../screens';
import AboutScreen from '../screens/About';
import Animation from '../screens/Animation';
import GestureAnimation from '../screens/GestureAnimation';
import SwipeToDelete from '../screens/SwipeToDelete';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Routes() {
  return (
    <View style={tw` h-full `}>
      <NavigationContainer theme={DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            options={{headerShown: false}}
            name="About"
            component={AboutScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Animation"
            component={Animation}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="GestureAnimation"
            component={GestureAnimation}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="SwipeToDelete"
            component={SwipeToDelete}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default Routes;
