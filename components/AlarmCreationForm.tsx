import { Button } from "react-native";
import { DatePickerInline } from "./DatePicker";
import { ThemedView } from "./ThemedView";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { useSQLiteContext } from "expo-sqlite";
import { saveAlarm } from "@/db/createAlarm";

export function AlarmCreationForm() {
  const navigation = useNavigation();

  const [date, setdate] = useState<Date | null>(null);
  const db = useSQLiteContext();

  async function createAlarm() {
    if (!date) return;
    const success = await saveAlarm(db, date);
    if (success) {
      navigation.goBack();
    }
  }
  return (
    <>
      <ThemedView style={{ alignItems: "center" }}>
        <DatePickerInline
          onChange={(date) => {
            setdate(date);
          }}
        />
      </ThemedView>
      <Button
        title="Save"
        color="#d40202"
        onPress={() => {
          createAlarm();
        }}
      />
    </>
  );
}
