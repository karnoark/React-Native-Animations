import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

import { Stickers } from "@/components/StickerApp/Stickers";
import HelloWorld from "@/components/HelloWorld/HelloWorld";
import AtlasComponent from "@/components/Other/AtlasComponent";
import VideoUsingSkia from "@/components/Other/Shaders";
import Shaders from "@/components/Other/Shaders";
import ShadowsComponent from "@/components/Other/ShadowsComponent";
import AnimationComponent from "@/components/Other/AnimationComponent";
import AnimatedGradient from "@/components/Other/AnimatedGradient";
import GesturesWithSkia from "@/components/Other/GesturesWithSkia";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ElementTracking from "@/components/Other/ElementTracking";
import AnimatedLoader from "@/components/AnimatedLoader/AnimatedLoader";
import SkiaPathWord from "@/components/SkiaPathWord/SkiaPathWord";

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

    case "atlas":
      return (
        <View>
          <AtlasComponent />
        </View>
      );
      break;

    case "shaders":
      return (
        <View>
          <Shaders />
        </View>
      );
      break;

    case "shadows":
      return (
        <View>
          <ShadowsComponent />
        </View>
      );
      break;

    case "animation":
      return (
        <GestureHandlerRootView>
          <ScrollView
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AnimationComponent />
            <Text style={styles.Heading}>Animated Gradient</Text>
            <AnimatedGradient />
            <Text style={styles.Heading}>Gestures with Skia</Text>
            <GesturesWithSkia />
            <Text style={styles.Heading}>Element Tracking</Text>
            <ElementTracking />
          </ScrollView>
        </GestureHandlerRootView>
      );
      break;

    case "loader":
      return <AnimatedLoader />;
      break;

    case "skiapathword":
      return <SkiaPathWord />;
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

const styles = StyleSheet.create({
  Heading: {
    color: "#203981",
    fontSize: 20,
    fontWeight: "200",
  },
});
