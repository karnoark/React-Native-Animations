import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import { useSharedValue, withDecay } from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { Canvas, Circle, Fill } from "@shopify/react-native-skia";

const GesturesWithSkia = () => {
  // const { width } = useWindowDimensions();
  const width = 356;
  const height = 356;
  const leftBoundary = 0;
  const rightBoundary = width;
  const translateValue = {
    translateX: useSharedValue((width as any) / 2),
    translateY: useSharedValue((width as any) / 2),
  };

  const gesture = Gesture.Pan()
    .onChange((e) => {
      translateValue.translateX.value += e.changeX;
      translateValue.translateY.value += e.changeY;
    })
    .onEnd((e) => {
      translateValue.translateX.value = withDecay({
        // rubberBandEffect: true,
        velocity: e.velocityX * 1,
        clamp: [leftBoundary, rightBoundary],
      });
      translateValue.translateY.value = withDecay({
        velocity: e.velocityY,
        clamp: [leftBoundary, height],
      });
    });
  return (
    <View
      style={{
        borderColor: "#ec0076",
        borderWidth: StyleSheet.hairlineWidth,
        marginBottom: 20,
      }}
    >
      <GestureDetector gesture={gesture}>
        <Canvas style={{ width, height }}>
          <Fill color={"white"} />
          <Circle
            cx={translateValue.translateX}
            cy={translateValue.translateY}
            r={20}
            color={"#3E3E"}
          />
        </Canvas>
      </GestureDetector>
    </View>
  );
};

export default GesturesWithSkia;

const styles = StyleSheet.create({});
