// used invisible animated.view to transform the canvas circle by overlaying animated.view on top of canvas circle

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { Canvas, Circle, Fill } from "@shopify/react-native-skia";

const radius = 30;

const ElementTracking = () => {
  // The position of the ball
  const x = useSharedValue(100);
  const y = useSharedValue(100);
  // This style will be applied to the "invisible" animated view
  // that overlays the ball

  const style = useAnimatedStyle(() => ({
    position: "absolute",
    top: -radius,
    left: -radius,
    width: radius * 2,
    height: radius * 2,
    // backgroundColor: "#ff8000",  => I commented it so that it becomes invisible
    transform: [{ translateX: x.value }, { translateY: y.value }],
  }));

  // the gesture handler for the ball
  const gesture = Gesture.Pan().onChange((e) => {
    x.value += e.x;
    y.value += e.y;
  });

  return (
    <View
      style={{
        borderColor: "#ec0076",
        borderWidth: StyleSheet.hairlineWidth,
        marginBottom: 20,
        width: 356,
        height: 356,
      }}
    >
      <Canvas style={{ flex: 1 }}>
        <Fill color={"white"} />
        <Circle cx={x} cy={y} r={radius} color={"cyan"} />
      </Canvas>
      <GestureDetector gesture={gesture}>
        <Animated.View style={style} />
      </GestureDetector>
    </View>
  );
};

export default ElementTracking;

const styles = StyleSheet.create({});
