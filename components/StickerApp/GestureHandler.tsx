import type { SkMatrix, SkRect } from "@shopify/react-native-skia";
import type { SharedValue } from "react-native-reanimated";

interface GestureHandlerProps {
  matrix: SharedValue<SkMatrix>;
  dimensions: SkRect;
  debug?: boolean;
}

export const GestureHandler = ({
  matrix: skMatrix,
  dimensions,
  debug,
}: GestureHandlerProps) => {
  return null;
};
