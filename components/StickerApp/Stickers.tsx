/* eslint-disable @typescript-eslint/no-var-requires */
import { Canvas, Skia, useFont, useImage } from "@shopify/react-native-skia";
import React from "react";
import {
  Dimensions,
  Platform,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

import { HelloSticker, HelloStickerDimensions } from "./HelloSticker";
import { LocationSticker, LocationStickerDimensions } from "./LocationSticker";
import { GestureHandler } from "./GestureHandler";
import { Picture, PictureDimensions } from "./Picture";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { identity4, Matrix4, multiply4 } from "react-native-redash";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { concat, vec3 } from "@/components/StickerApp/MatrixHelpers";

const { width, height } = Dimensions.get("window");

const zurich = require("@/assets/images/zurich.jpg");
const aveny = require("@/assets/fonts/aveny.ttf");

export const Stickers = () => {
  const image = useImage(zurich);
  const font = useFont(aveny, 56);
  const matrix = useSharedValue(identity4);
  // Create a reference point for our transformations
  // This is typically the center of your component
  const origin = vec3(150, 150, 0); // Adjust these values based on your component's size

  // This helper function ensures we get the correct type for React Native
  function convertMatrix(matrix: Matrix4): number[] {
    "worklet";
    // On iOS, we need to ensure we have all 16 values in the correct order
    // On Android, we can use the matrix directly as an array
    if (Platform.OS === "ios") {
      return [
        matrix[0],
        matrix[1],
        matrix[2],
        matrix[3],
        matrix[4],
        matrix[5],
        matrix[6],
        matrix[7],
        matrix[8],
        matrix[9],
        matrix[10],
        matrix[11],
        matrix[12],
        matrix[13],
        matrix[14],
        matrix[15],
      ];
    }
    return Array.from(matrix);
  }

  const pan = Gesture.Pan().onChange((e) => {
    console.log("User Panned");
    // Create a translation transform using the drag movement
    // const translation = [
    //   {
    //     translateX: e.changeX,
    //     translateY: e.changeY,
    //     translateZ: 0,
    //   },
    // ];

    // Use concat to properly combine the transformations
    // matrix.value = concat(
    //   matrix.value, // Current transformation state
    //   origin, // Point to transform around
    //   translation // New transformation to apply
    // );

    matrix.value = multiply4(
      matrix.value,
      Matrix4.translate(e.changeX, e.changeY, 0)
    );
  });
  const pinch = Gesture.Pinch();
  const rotation = Gesture.Rotation();
  // Now we explicitly type our animated style to match React Native's expectations
  // const style = useAnimatedStyle<ViewStyle>(() => {
  //   const matrixArray = convertMatrix(matrix.value);

  //   return {
  //     transform: [
  //       {
  //         matrix: matrixArray as unknown as number[],
  //       },
  //     ],
  //   };
  // });

  const style = useAnimatedStyle(() => ({
    transform: [{ matrix: matrix.value as unknown as number[] }],
  }));

  if (!image || !font) {
    return null;
  }
  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={pan}>
        <Animated.View style={style}>
          <View>
            <Canvas style={{ width, height }}>
              <Picture image={image} />
            </Canvas>
          </View>
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
