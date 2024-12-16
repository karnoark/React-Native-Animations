import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ThreeCircles from "@/components/HelloWorld/ThreeCircles";
import FillAndStrokes from "@/components/HelloWorld/FillAndStrokes";
import LinearGradientCircles from "@/components/HelloWorld/LinearGradientCircles";

const HelloWorld = () => {
  const height = 256;
  const width = 256;
  const r = width * 0.33;
  return (
    <ScrollView
      contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      <Text style={styles.Heading}>Three Circles</Text>
      <ThreeCircles />

      <Text style={styles.Heading}>Fill And Strokes</Text>
      <FillAndStrokes />

      <Text style={styles.Heading}>Linear Gradient</Text>
      <LinearGradientCircles />
    </ScrollView>
  );
};

export default HelloWorld;

const styles = StyleSheet.create({
  Heading: {
    color: "#203981",
    fontSize: 20,
    fontWeight: "200",
    margin: 10,
    marginTop: 20,
  },
});
