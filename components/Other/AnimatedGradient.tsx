import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React, { useEffect } from "react";
import {
  interpolateColor,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { Canvas, Fill, LinearGradient, vec } from "@shopify/react-native-skia";

const startColors = [
  "rgba(155, 195, 34, 0.4)",
  "rgba(34,193,195,0.4)",
  "rgba(63,94,251,1)",
  "rgba(253,29,29,0.4)",
];
const endColors = [
  "rgba(0,212,255,0.4)",
  "rgba(253,187,45,0.4)",
  "rgba(252,70,107,1)",
  "rgba(12, 59, 1, 0.4)",
];

const AnimatedGradient = () => {
  const { width, height } = useWindowDimensions();
  const colorIndex = useSharedValue(0);
  useEffect(() => {
    colorIndex.value = withRepeat(
      withTiming(startColors.length - 1, { duration: 2000 }),
      -1,
      true
    );
  }, []);

  const gradientColors = useDerivedValue(() => {
    return [
      interpolateColor(colorIndex.value, [0, 1, 2, 3], startColors),
      interpolateColor(colorIndex.value, [0, 1, 2, 3], endColors),
    ];
  });

  return (
    <View
      style={{
        borderColor: "#ec0076",
        borderWidth: StyleSheet.hairlineWidth,
      }}
    >
      <Canvas style={{ width: 356, height: 356 }}>
        <Fill>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(356, 356)}
            colors={gradientColors}
          />
        </Fill>
      </Canvas>
    </View>
  );
};

export default AnimatedGradient;

const styles = StyleSheet.create({});
