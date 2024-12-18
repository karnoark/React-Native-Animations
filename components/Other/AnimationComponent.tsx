import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Canvas, Circle, Group } from "@shopify/react-native-skia";
import {
  useAnimatedReaction,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const AnimationComponent = () => {
  const width = 356;
  const height = 356;
  const size = 256;
  const r = useSharedValue(0);
  const c = useDerivedValue(() => size - r.value);

  useEffect(() => {
    r.value = withRepeat(withTiming(size * 0.33, { duration: 2000 }), -1, true);
  }, [r, size]);

  /*   useAnimatedReaction(
    () => r.value,
    (currentValue, previousValue) => {
      console.log("r.value: ", currentValue);
    }
  ); */

  return (
    <View
      style={{
        borderColor: "#ec0076",
        borderWidth: StyleSheet.hairlineWidth,
      }}
    >
      <Canvas style={{ width, height }}>
        <Group blendMode={"multiply"}>
          <Circle cx={r} cy={r} r={r} color={"cyan"} />
          <Circle cx={c} cy={r} r={r} color={"magenta"} />
          <Circle cx={size / 2} cy={c} r={r} color={"yellow"} />
        </Group>
      </Canvas>
    </View>
  );
};

export default AnimationComponent;

const styles = StyleSheet.create({});
