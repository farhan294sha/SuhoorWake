import { ThemedText } from "@/components/ThemedText";
import { useLocalSearchParams } from "expo-router";

export default function Alarm() {
  const { alaram } = useLocalSearchParams();
  return <ThemedText>Hello {`${alaram}`}</ThemedText>;
}
