import { Link } from "expo-router";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { Pressable, StyleSheet, Switch, View } from "react-native";
import { useState } from "react";
import { useSQLiteContext } from "expo-sqlite";

type AlarmItemProps = {
  id: number;
  time: string;
  enabled: boolean;
};

function convertTime(date: string) {
  const newtime = new Date(date);
  const ampm = newtime.toLocaleTimeString().slice(-2);
  const time = newtime.toLocaleTimeString().slice(0, -2).split(":"); // 10:25

  const hours = time[0];
  const min = time[1];
  return `${hours}:${min} ${ampm}`;
}

export function AlaramItem({ id, time, enabled }: AlarmItemProps) {
  const [isEnabled, setIsEnabled] = useState(enabled);
  const db = useSQLiteContext();
  const toggleSwitch = async () => {
    const result = db.runAsync("UPDATE alarm SET enabled = ? WHERE id = ?",[enabled ? 0: 1, id]);
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <Link href={{ pathname: "/[alaram]", params: { alaram: id } }} asChild>
      <Pressable>
        <View style={style.card}>
          <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
            <ThemedText
              type={isEnabled ? "title" : "muted"}
              style={{ fontWeight: "700", fontSize: 42, lineHeight: 42 }}
            >
              {convertTime(time).split(" ")[0]}
            </ThemedText>
            <ThemedText
              type={isEnabled ? "default" : "muted"}
              style={{ fontSize: 20, fontWeight: "700" }}
            >
              {convertTime(time).split(" ")[1]}
            </ThemedText>
          </View>
          <View>
            <Switch
              style={{ padding: 3 }}
              trackColor={{ false: "#767577", true: "#4cbffc" }}
              thumbColor={isEnabled ? "#047cbd" : "#363636"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

const style = StyleSheet.create({
  card: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
    height: 100,
    alignItems: "center",
    backgroundColor: "#222222",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
  },
});
