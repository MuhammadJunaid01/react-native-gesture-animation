import React, {useRef, useState} from 'react';
import {tw} from '../lib/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  FlatList,
  GestureHandlerRootView,
  Swipeable,
} from 'react-native-gesture-handler';
import {Text, View} from 'react-native';
type List = {
  name: string;
  age: number;
  id: number;
  isOpen: boolean;
};
const SwipeToDelete = () => {
  const [list, setList] = useState<List[]>([
    {
      name: 'Junaid',
      age: 20,
      id: 0,
      isOpen: false,
    },
    {
      name: 'Muhammad',
      age: 19,
      id: 1,
      isOpen: false,
    },
    {
      name: 'Ahmad',
      age: 17,
      id: 2,
      isOpen: false,
    },
    {
      name: 'Hasan',
      age: 16,
      id: 3,
      isOpen: false,
    },
    {
      name: 'Hossain',
      age: 15,
      id: 4,
      isOpen: false,
    },
    {
      name: 'Abbas',
      age: 11,
      id: 5,
      isOpen: false,
    },
  ]);

  return (
    <SafeAreaView style={tw` flex-1 h-full`}>
      <GestureHandlerRootView>
        <Text>SwipeToDelete</Text>
        <FlatList
          data={list}
          keyExtractor={(_, index) => `KEY+${index}`}
          renderItem={data => <RenderList list={data.item} />}
        />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default SwipeToDelete;
interface IRenderItem {
  list: List;
}
const RenderList: React.FC<IRenderItem> = ({list}) => {
  const EMPTY_KEY = '';

  const row: Array<any> = [];
  const [key, setKey] = React.useState<string | any>(EMPTY_KEY);

  const leftSwipe = () => {
    return (
      <View
        style={tw` bg-red-300 h-[100%] w-[15%] items-center justify-center`}>
        <Text>DELETE</Text>
      </View>
    );
  };
  const rightSwipe = () => {
    return (
      <View
        style={tw`  bg-green-300 h-[100%] w-[15%] items-center justify-center`}>
        <Text>Edit</Text>
      </View>
    );
  };
  const handleOpen = (index: number) => {
    console.log('INDEX', index);
    setKey(index);
  };
  return (
    <Swipeable
      key={list.id}
      onSwipeableWillOpen={() => handleOpen(list.id)}
      renderLeftActions={leftSwipe}
      renderRightActions={rightSwipe}>
      <View
        style={tw` h-[100px]  w-full bg-gray-500 mb-1 items-center justify-center`}>
        <Text style={tw` text-white`}>{list.name}</Text>
      </View>
    </Swipeable>
  );
};
