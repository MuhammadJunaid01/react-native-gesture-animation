import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {tw} from '../lib/theme';

const Animation = () => {
  const animation = useSharedValue(1);
  const rnStyle = useAnimatedStyle(() => {
    const width = interpolate(animation.value, [1, 0], [100, 200]);
    const height = interpolate(animation.value, [1, 0], [100, 200]);
    const radius = interpolate(animation.value, [1, 0], [100, 200]);
    const backgroundClor = interpolateColor(
      animation.value,
      [1, 0],
      ['green', 'red'],
    );
    return {
      height: height,
      width: width,
      borderRadius: radius,
      backgroundColor: backgroundClor,
    };
  });
  const onAnimate = () => {
    if (animation.value === 1) {
      animation.value = withTiming(0, {duration: 900});
    } else {
      animation.value = withTiming(1, {duration: 900});
    }
  };
  return (
    <View style={tw` flex-1 h-full justify-center items-center `}>
      <Text>Animation</Text>
      <Animated.View
        style={[tw` h-[100px] w-[100px] bg-red-400`, rnStyle]}></Animated.View>
      <TouchableOpacity
        onPress={onAnimate}
        style={tw` bg-slate-500 px-4 py-2 rounded-full my-4`}>
        <Text style={tw` text-white`}>Touch me!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Animation;
