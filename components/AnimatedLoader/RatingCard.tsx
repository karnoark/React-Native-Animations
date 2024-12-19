import { StyleSheet, View, Text, TextInput } from "react-native";
import React, { useMemo } from "react";
import {
  BlurMask,
  Canvas,
  Circle,
  Path,
  Skia,
  useFont,
} from "@shopify/react-native-skia";
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDecay,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const startColors = [
  "rgba(230, 72, 10, 0.4)",
  "rgba(34,193,195,0.4)",
  "rgba(34, 37, 195, 0.4)",
  // "rgba(63,94,251,1)",
  "rgba(228, 232, 10, 0.4)",
  "rgba(31, 255, 1, 0.4)",
];

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const RatingCard = () => {
  const width = 556;
  const height = 256;
  const strokeWidth = 10;
  const moverHeight = 30;
  const moverWidth = 30;
  const progress = useSharedValue(0.5);
  const moverPositionX = useSharedValue(width / 2 - moverWidth / 2);
  const moverPositionY = height / 2 - moverHeight / 2;
  const pathStartX = width * 0.3;
  const pathStartY = height / 2;
  const pathEndX = width * 0.7;
  const pathEndY = height / 2;
  const leftBoundary = pathStartX;
  const rightBoundary = pathEndX;
  const pathLength = pathEndX - pathStartX;
  const straightPath = useMemo(() => {
    const skPath = Skia.Path.Make();
    skPath.moveTo(pathStartX + moverWidth / 2, pathStartY);
    skPath.lineTo(pathEndX, pathEndY);
    return skPath;
  }, []);

  const gesture = Gesture.Pan()
    .onChange((e) => {
      // Convert pixel change to progress change
      const progressChange = e.changeX / pathLength;
      const newProgress = progress.value + progressChange;
      // Clamp between 0 and 1
      progress.value = Math.min(Math.max(newProgress, 0), 1);
      console.log("progress value:", progress.value);
    })
    .onEnd((e) => {
      const velocityProgress = e.velocityX / pathLength;
      progress.value = withDecay({
        velocity: velocityProgress,
        clamp: [0, 1],
      });
    });

  const pathEnd = useDerivedValue(() => {
    return (moverPositionX.value - pathStartX) / (pathEndX - pathStartX);
  });

  const rStyle = useAnimatedStyle(() => {
    const xPosition = pathStartX + progress.value * pathLength;
    return {
      position: "absolute",
      left: pathStartX,
      top: moverPositionY,
      width: moverWidth,
      height: moverHeight,
      borderRadius: moverWidth / 2,
      backgroundColor: "#80bfff",
      transform: [{ translateX: xPosition - pathStartX }],
    };
  });

  const dynamicColors = useDerivedValue(() => {
    return interpolateColor(
      progress.value,
      [0.2, 0.4, 0.6, 0.8, 1],
      startColors
    );
  });

  const review = useDerivedValue(() => {
    if (progress.value < 0.2) return "Awful";
    if (progress.value < 0.4) return "Bad";
    if (progress.value < 0.6) return "Ok";
    if (progress.value < 0.8) return "Good";
    return "Great";
  });

  const animatedText = useAnimatedProps(() => {
    return {
      text: review.value,
      defaultValue: "",
    };
  });

  return (
    <View
      style={{
        borderWidth: 3,
        borderColor: "pink",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Canvas style={{ width, height }}>
        {/* <Text text={"Ok"} font={font} color={"white"} /> */}
        <Path
          path={straightPath}
          style={"stroke"}
          strokeWidth={strokeWidth}
          color={dynamicColors}
          strokeCap={"round"}
        />
        <BlurMask blur={8} style={"solid"} />
      </Canvas>
      <GestureDetector gesture={gesture}>
        <Animated.View style={rStyle} />
      </GestureDetector>
      {/* <Text style={styles.textRating}>Ok</Text> */}
      <View style={styles.textRating}>
        <AnimatedTextInput
          editable={false}
          underlineColorAndroid={"transparent"}
          style={[
            {
              fontSize: 30,
              fontWeight: "bold",
              color: "#80bfff",
              textAlign: "center",
              backgroundColor: "transparent",
            },
          ]}
          animatedProps={animatedText}
        ></AnimatedTextInput>
      </View>
    </View>
  );
};

export default RatingCard;

const styles = StyleSheet.create({
  textRating: {
    position: "absolute",
    left: 260,
    top: 40,
    fontSize: 25,
  },
});
