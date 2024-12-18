import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Canvas, Fill, Shader, Skia } from "@shopify/react-native-skia";

const source = Skia.RuntimeEffect.Make(`
  vec4 main(vec2 pos) {
  vec2 canvas = vec2(256);
  vec2 normalized = pos/canvas;
  return vec4(normalized.x, normalized.y, 0.5, 1);
  }
  `);

const Shaders = () => {
  source?.makeShader;
  return (
    <View
      style={{ borderColor: "#ec0076", borderWidth: StyleSheet.hairlineWidth }}
    >
      <Canvas style={{ width: 256, height: 256 }}>
        <Fill>{source && <Shader source={source} />}</Fill>
      </Canvas>
    </View>
  );
};

export default Shaders;

const styles = StyleSheet.create({});
