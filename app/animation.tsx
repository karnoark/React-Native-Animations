import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

import { Stickers } from "@/components/StickerApp/Stickers";
import HelloWorld from "@/components/HelloWorld/HelloWorld";

const Page = () => {
  const { animationId } = useLocalSearchParams();
  console.log(animationId);

  switch (animationId) {
    case "stickerapp":
      return (
        <View>
          <Stickers />
        </View>
      );
      break;

    case "helloworld":
      return (
        <View>
          <HelloWorld />
        </View>
      );
      break;

    default:
      break;
  }

  return (
    <View>
      <Text>Page</Text>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({});
