import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const handlePress = (animationId: string) => {
    router.push({
      pathname: "/animation",
      params: {
        animationId,
      },
    });
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 30, fontWeight: "300", color: "blue" }}>
        Animation Visuals
      </Text>
      <View
        style={{
          margin: 10,
          borderColor: "#203981",
          borderWidth: 3,
          flex: 1,
          padding: 10,
        }}
      >
        <View>
          <TouchableOpacity onPress={() => handlePress("helloworld")}>
            <Text style={styles.Heading}>Hello World</Text>
          </TouchableOpacity>
          <Text>getting started with skia</Text>
        </View>

        <View style={{ marginTop: 15 }}>
          <TouchableOpacity onPress={() => handlePress("stickerapp")}>
            <Text style={styles.Heading}>Sticker</Text>
          </TouchableOpacity>
          <Text>
            Not complete yet: animation where you could pinch, pan and rotate
            the sticker
          </Text>
        </View>

        <View style={{ marginTop: 15 }}>
          <TouchableOpacity onPress={() => handlePress("atlas")}>
            <Text style={styles.Heading}>Atlas</Text>
          </TouchableOpacity>
          <Text>Multiple instances of same texture/image</Text>
        </View>

        <View style={{ marginTop: 15 }}>
          <TouchableOpacity onPress={() => handlePress("shaders")}>
            <Text style={styles.Heading}>Shaders</Text>
          </TouchableOpacity>
          <Text>Shaders need no introduction</Text>
        </View>

        <View style={{ marginTop: 15 }}>
          <TouchableOpacity onPress={() => handlePress("shadows")}>
            <Text style={styles.Heading}>Shadows</Text>
          </TouchableOpacity>
          <Text>neomorphism</Text>
        </View>

        <View style={{ marginTop: 15 }}>
          <TouchableOpacity onPress={() => handlePress("animation")}>
            <Text style={styles.Heading}>Animations</Text>
          </TouchableOpacity>
          <Text>Animations !!! here we go</Text>
        </View>

        <View style={{ marginTop: 15 }}>
          <TouchableOpacity onPress={() => handlePress("loader")}>
            <Text style={styles.Heading}>Animated Loader</Text>
          </TouchableOpacity>
          <Text>
            Animated Loader built with complete ui using skia and animation
            using reanimated
          </Text>
        </View>

        <View style={{ marginTop: 15 }}>
          <TouchableOpacity onPress={() => handlePress("skiapathword")}>
            <Text style={styles.Heading}>Skia Path Word</Text>
          </TouchableOpacity>
          <Text>Texual Path Animation</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Heading: {
    color: "#203981",
    fontSize: 20,
    fontWeight: "200",
  },
});
