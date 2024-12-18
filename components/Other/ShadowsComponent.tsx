import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Canvas,
  Fill,
  LinearGradient,
  RoundedRect,
  Shadow,
} from "@shopify/react-native-skia";

const ShadowsComponent = () => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flexDirection: "column",
        alignItems: "center",
        // height: "100%",
      }}
    >
      <Canvas style={{ width: 256, height: 256, margin: 50 }}>
        <Fill color={"lightblue"} />
        <RoundedRect
          x={32}
          y={32}
          width={192}
          height={192}
          r={32}
          color={"lightblue"}
        >
          <Shadow dx={12} dy={12} blur={25} color="#93b8c4" />
          <Shadow dx={-12} dy={-12} blur={25} color="#c7f8ff" />
        </RoundedRect>
      </Canvas>

      <Canvas style={{ width: 256, height: 256, margin: 50 }}>
        <Fill color={"lightblue"} />
        <RoundedRect
          x={32}
          y={32}
          width={192}
          height={192}
          r={32}
          color={"lightblue"}
        >
          <Shadow dx={12} dy={12} blur={25} color="#93b8c4" inner />
          <Shadow dx={-12} dy={-12} blur={25} color="#c7f8ff" inner />
        </RoundedRect>
      </Canvas>
    </View>
  );
};

export default ShadowsComponent;

const styles = StyleSheet.create({});
