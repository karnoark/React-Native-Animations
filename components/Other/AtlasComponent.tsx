import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Atlas,
  Canvas,
  Circle,
  drawAsImage,
  Group,
  rect,
  Rect,
  Skia,
  useRSXformBuffer,
  useTexture,
  vec,
} from "@shopify/react-native-skia";
import { useSharedValue } from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { GestureHandler } from "@/components/StickerApp/GestureHandler";

const AtlasComponent = () => {
  const size = { width: 25, height: 11.25 };
  const strokeWidth = 2;
  const textureSize = {
    width: size.width + strokeWidth,
    height: size.height + strokeWidth,
  };

  const numberOfBoxes = 4000;
  const pos = useSharedValue({ x: 128, y: 128 });
  const width = 2506;
  const sprites = new Array(numberOfBoxes)
    .fill(0)
    .map(() => rect(0, 0, textureSize.width, textureSize.height));

  const transforms = useRSXformBuffer(numberOfBoxes, (val, i) => {
    "worklet";
    const tx = -15 + ((i * size.width) % width);
    const ty = 5 + Math.floor(i / (width / size.width)) * size.width;
    const r = Math.atan2(pos.value.y - ty, pos.value.x - tx);
    val.set(Math.cos(r), Math.sin(r), tx, ty);
  });

  const texture = useTexture(
    <Group>
      <Rect
        rect={rect(strokeWidth / 2, strokeWidth / 2, size.width, size.height)}
        color="cyan"
      />
      <Rect
        rect={rect(strokeWidth / 2, strokeWidth / 2, size.width, size.height)}
        color="blue"
        style="stroke"
        strokeWidth={strokeWidth}
      />
    </Group>,
    textureSize
  );

  const gesture = Gesture.Pan().onChange((e) => (pos.value = e));

  return (
    // <GestureHandlerRootView>
    <View
      style={{
        borderColor: "#ec0076",
        borderWidth: StyleSheet.hairlineWidth,
      }}
    >
      {/* <GestureDetector gesture={gesture}> */}
      <Canvas style={{ width: "100%", height: "100%" }}>
        <Atlas image={texture} sprites={sprites} transforms={transforms} />
      </Canvas>
      {/* </GestureDetector> */}
    </View>
    // </GestureHandlerRootView>
  );
};

export default AtlasComponent;

const styles = StyleSheet.create({});

{
  /* <Circle c={vec(128, 128)} r={10} color={"lightblue"} /> */
}
