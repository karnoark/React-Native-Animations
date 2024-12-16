import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Canvas, Circle, Paint, Path } from "@shopify/react-native-skia";
const width = 256;
const height = 256;

const Shapes = () => {
  return (
    <View
      style={{ borderColor: "#ec0076", borderWidth: StyleSheet.hairlineWidth }}
    >
      <Canvas style={{ width, height }}>
        <Path
          path="M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z"
          color="lightblue"
        />
      </Canvas>
    </View>
  );
};

export default Shapes;

const styles = StyleSheet.create({});
