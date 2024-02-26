import {View, Text} from 'react-native';
import React from 'react';
import Routes from './routes';
import {tw} from './lib/theme';
import 'react-native-gesture-handler';
const App = () => {
  return (
    <View style={tw` flex-1 h-full`}>
      <View>
        <Text testID={'Hello Fisrt Test'}>Hello Fisrt Test</Text>
      </View>
    </View>
  );
};

export default App;
