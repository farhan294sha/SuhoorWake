import { Pressable, useColorScheme } from "react-native";
import { ThemedView } from "./ThemedView";
import { IconSymbol } from "./ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "expo-router";
import { ThemedText } from "./ThemedText";

export function ScreenHeader({headerText}: {headerText: string}) {
  const theme = useColorScheme() ?? "light";
  const navigation = useNavigation();
  return (
    <ThemedView
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
      >
        <IconSymbol
          name="chevron.left"
          size={36}
          color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
        />
      </Pressable>
      <ThemedView
        style={{
          flex: 1,
          alignItems: "center",
          height: "100%",
        }}
      >
        <ThemedText style={{ padding: 5 }} type="defaultSemiBold">
          {headerText}
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}
