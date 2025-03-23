import { StyleSheet, ViewProps } from "react-native";
import { ThemedView } from "./ThemedView";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

export type ContainerViewProps = ViewProps;

export function ContainerView({ style, ...otherProps }: ContainerViewProps) {
  const insets = useSafeAreaInsets();
  return (
    <ThemedView
      style={[
        {
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
        style,
      ]}
      {...otherProps}
    />
  );
}
