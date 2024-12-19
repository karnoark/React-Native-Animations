import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useMemo } from "react";
import {
  BlurMask,
  Canvas,
  Path,
  Skia,
  SweepGradient,
  vec,
} from "@shopify/react-native-skia";
import Animated, {
  Easing,
  FadeIn,
  FadeOut,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { transform } from "@babel/core";

const canvasSize = 100;
const strokeWidth = 10;
const circleSize = 64;
const circleRadius = (circleSize - strokeWidth) / 2;
const ActivityIndicator = () => {
  const circlePath = useMemo(() => {
    const skPath = Skia.Path.Make();
    skPath.addCircle(canvasSize / 2, canvasSize / 2, circleRadius);
    return skPath;
  }, []);

  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, { duration: 1000, easing: Easing.linear }),
      -1,
      false
    );
  }, []);

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${2 * Math.PI * progress.value}rad`,
      },
    ],
  }));

  const pathStart = useDerivedValue(() => {
    return interpolate(progress.value, [0, 0.5, 1], [0.3, 0.6, 0.3]);
  });

  // pathStart =

  return (
    <Animated.View
      style={rStyle}
      entering={FadeIn.duration(2000)}
      exiting={FadeOut.duration(1000)}
    >
      <Canvas
        style={{
          width: canvasSize,
          height: canvasSize,
        }}
      >
        <Path
          path={circlePath!}
          color={"white"}
          style={"stroke"}
          strokeWidth={strokeWidth}
          start={pathStart}
          end={1}
          strokeCap={"round"}
        >
          <SweepGradient
            c={vec(canvasSize / 2, canvasSize / 2)}
            colors={["cyan", "magenta", "yellow", "cyan"]}
          />
          <BlurMask blur={8} style={"solid"} />
        </Path>
      </Canvas>
    </Animated.View>
  );
};

export default ActivityIndicator;

const styles = StyleSheet.create({});
