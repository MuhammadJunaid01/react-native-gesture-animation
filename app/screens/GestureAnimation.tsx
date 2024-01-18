import {View, Text} from 'react-native';
import React from 'react';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {tw} from '../lib/theme';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
const GestureAnimation = () => {
  const start = useSharedValue({x: 0, y: 0});
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({x: 0, y: 0});
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: withSpring(offset.value.x)},
        {scale: isPressed.value ? 1.3 : 1},
      ],
    };
  });
  const gesture = Gesture.Pan()
    .onBegin(e => {
      //   console.log('GESTURE IS START');
      isPressed.value = true;
      console.log(e);
    })
    .onUpdate(e => {
      //   console.log('GESTURE IS UPDATE');
      offset.value = {
        x: Number(e.translationX.toFixed(0)) <= -160 ? 0 : e.translationX,
        y: e.translationY,
      };
      console.log(
        'X POSITION: ',
        Number(e.translationX.toFixed(0)) <= -160 ? 81 : 0,
      );
    })
    .onEnd(() => {
      //   console.log('GESTURE IS END:');
      //   start.value = {
      //     x: offset.value.x,
      //     y: offset.value.y,
      //   };
    })
    .onFinalize(() => {
      isPressed.value = false;
      //   offset.value = {
      //     x: 0,
      //     y: 0,
      //   };
      console.log('GESTURE IS FINALIZE:');
    });

  return (
    <GestureHandlerRootView style={tw` flex-1`}>
      <View style={tw` flex-1 h-full justify-center items-center`}>
        <GestureDetector gesture={gesture}>
          <Animated.View
            style={[
              tw` h-[100px] w-[100px] rounded-full bg-emerald-400`,
              animatedStyle,
            ]}
          />
        </GestureDetector>
        <Text>GestureAnimation</Text>
      </View>
    </GestureHandlerRootView>
  );
};

export default GestureAnimation;
