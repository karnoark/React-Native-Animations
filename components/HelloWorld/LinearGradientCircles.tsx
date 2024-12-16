import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Canvas,
  Circle,
  Group,
  LinearGradient,
  vec,
} from "@shopify/react-native-skia";

const width = 256;
const height = 256;

const LinearGradientCircles = () => {
  const c = vec(width / 2, height / 2);
  const r = width / 4;
  return (
    <Canvas style={{ width, height }}>
      <Group>
        <Circle c={c} r={r}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(2 * r, 2 * r)}
            colors={["#00ff87", "#60efff"]}
          />
        </Circle>
      </Group>
    </Canvas>
  );
};

export default LinearGradientCircles;

const styles = StyleSheet.create({});
