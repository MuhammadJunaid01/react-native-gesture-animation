import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
type RootStackParamList = {
  Home: undefined;
  About: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={tw` flex-1  items-center justify-center`}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('About');
          navigation.navigate('About');
        }}
        style={tw` mt-11 bg-black px-5 py-3 rounded`}>
        <Text style={tw`  text-white`}>Go to About</Text>
      </TouchableOpacity>
    </View>
  );
};
function AboutScreen() {
  return (
    <View style={tw` flex-1  items-center justify-center`}>
      <Text>AboutScreen Screen</Text>
    </View>
  );
}
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={tw` h-full bg-orange-600`}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
