import React, {useCallback, useEffect, useRef, useState} from 'react';
import {tw} from '../lib/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  FlatList,
  GestureHandlerRootView,
  Swipeable,
} from 'react-native-gesture-handler';
import {Pressable, Text, TextInput, View} from 'react-native';
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
  const onComponentOpen = (id: number) => {
    setList(prevData =>
      prevData.map(data => {
        if (data.id === id) {
          return {...data, isOpen: true};
        } else {
          return {...data, isOpen: false};
        }
      }),
    );
  };
  const onDelete = useCallback((id: number) => {
    setList(prev => prev.filter(listData => listData.id !== id));
  }, []);
  const onEdit = useCallback(
    (id: number, name: string) => {
      const updatedList = list.map(listData => {
        if (listData.id === id) {
          return {...listData, name: name};
        } else {
          return listData;
        }
      });
      setList(updatedList);
    },
    [list],
  );
  return (
    <SafeAreaView style={tw` flex-1 h-full`}>
      <GestureHandlerRootView>
        <Text>SwipeToDelete</Text>
        <FlatList
          data={list}
          keyExtractor={(_, index) => `KEY+${index}`}
          renderItem={data => (
            <RenderList
              onDelete={onDelete}
              onEdit={onEdit}
              list={data.item}
              onOpen={onComponentOpen}
            />
          )}
        />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default SwipeToDelete;
interface IRenderItem {
  list: List;
  onOpen: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, name: string) => void;
}
const RenderList: React.FC<IRenderItem> = ({
  list,
  onOpen,
  onDelete,
  onEdit,
}) => {
  const ref = useRef(null);
  const [edit, setEdit] = useState({
    name: '',
    isEditable: false,
  });
  const leftSwipe = () => {
    return (
      <View style={tw` bg-red-300 h-[96%] w-[50%] items-center justify-center`}>
        <Pressable onPress={() => onDelete(list.id)}>
          <Icon name="delete" size={18} />
        </Pressable>
      </View>
    );
  };
  const rightSwipe = () => {
    return (
      <View
        style={tw`  bg-green-300 h-[96%] w-[15%] items-center justify-center`}>
        {edit.isEditable ? (
          <TextInput
            style={tw` w-full border border-gray-300`}
            onChangeText={text => setEdit(prev => ({...prev, name: text}))}
            returnKeyType="done"
            onSubmitEditing={() => {
              onEdit(list.id, edit.name);
              ref.current?.close();
            }}
          />
        ) : (
          <Pressable
            onPress={() => setEdit(prev => ({...prev, isEditable: true}))}>
            <Icon name="edit" size={18} />
          </Pressable>
        )}
      </View>
    );
  };

  useEffect(() => {
    let count = 0;
    if (list.isOpen === false) {
      ref?.current?.close();
    }
    console.log('HYE', (count += 1));
  });
  return (
    <Swipeable
      ref={ref}
      key={list.id}
      onSwipeableWillOpen={() => onOpen(list.id)}
      renderLeftActions={leftSwipe}
      renderRightActions={rightSwipe}>
      <View
        style={tw` h-[100px]  w-full bg-gray-500 mb-1 items-center justify-center`}>
        <Text style={tw` text-white`}>{list.name}</Text>
      </View>
    </Swipeable>
  );
};
