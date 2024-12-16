import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Canvas,
  Circle,
  Fill,
  Group,
  RoundedRect,
} from "@shopify/react-native-skia";

const GroupOperations = () => {
  const width = 256;
  const height = 256;
  const r = 128;
  return (
    <View style={{ alignItems: "center", marginBottom: 20 }}>
      <View
        style={{
          borderColor: "#ec0076",
          borderWidth: StyleSheet.hairlineWidth,
        }}
      >
        <Canvas style={{ width, height }}>
          <Circle cx={r} cy={r} r={r / 2} color="#51AFED" />
          {/* The paint is inherited by the following sibling and descendants. */}
          <Group color={"lightblue"} style={"stroke"} strokeWidth={10}>
            <Circle cx={r} cy={r} r={r / 2} />
            <Circle cx={r} cy={r} r={r / 3} color={"white"} />
          </Group>
        </Canvas>
      </View>
      <Text style={styles.Heading}>Transformations</Text>
      <View
        style={{
          borderColor: "#ec0076",
          borderWidth: StyleSheet.hairlineWidth,
        }}
      >
        <Canvas style={{ width, height }}>
          <Fill color={"#e8f4f8"} />
          <Group color={"lightblue"} transform={[{ skewX: Math.PI / 6 }]}>
            <RoundedRect
              x={width / 4}
              y={height / 55}
              width={128}
              height={128}
              r={10}
            />
          </Group>
        </Canvas>
      </View>
    </View>
  );
};

export default GroupOperations;

const styles = StyleSheet.create({
  Heading: {
    color: "#203981",
    fontSize: 20,
    fontWeight: "200",
    margin: 10,
    marginTop: 20,
  },
});
