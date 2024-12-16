import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  BlendMode,
  Canvas,
  Circle,
  Group,
  LinearGradient,
  Paint,
  Path1DPathEffect,
  Skia,
  vec,
} from "@shopify/react-native-skia";

const width = 256;
const height = 256;

const LinearGradientCircles = () => {
  const c = vec(width / 2, height / 2);
  const r = width / 4;
  const paint = Skia.Paint();
  paint.setColor(Skia.Color("#55ff55"));
  paint.setBlendMode(BlendMode.SoftLight);
  return (
    <View
      style={{ borderColor: "#ec0076", borderWidth: StyleSheet.hairlineWidth }}
    >
      <Canvas style={{ width, height }}>
        <Circle c={c} r={r}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(2 * r, 2 * r)}
            colors={["#00ff87", "#005b00"]}
          />
        </Circle>
        <Group>
          <LinearGradient
            start={vec(2 * r, 2 * r)}
            end={vec(4 * r, 4 * r)}
            colors={["#0061ff", "#60efff"]}
          />
          <Circle cx={3 * r} cy={3 * r} r={r} />
        </Group>
        <Circle paint={paint} opacity={0.1} cx={r} cy={r} r={r}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(2 * r, 2 * r)}
            colors={["#00ff87", "#005b00"]}
          />
        </Circle>
      </Canvas>
    </View>
  );
};

export default LinearGradientCircles;

const styles = StyleSheet.create({});
