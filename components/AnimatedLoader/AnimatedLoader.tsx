import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import ActivityIndicator from "@/components/AnimatedLoader/ActivityIndicator";
import RatingCard from "@/components/AnimatedLoader/RatingCard";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const AnimatedLoader = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 1000);
  }, []);

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>{isLoading && <ActivityIndicator />}</View>
        <View style={{ flex: 1 }}>
          <RatingCard />
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default AnimatedLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    // borderColor: "magenta",
    // borderRadius: 4,
  },
});
