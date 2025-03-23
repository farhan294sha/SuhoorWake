import { useFocusEffect } from "expo-router";
import { AlaramItem } from "./AlarmItem";
import { useCallback, useState } from "react";
import { useSQLiteContext } from "expo-sqlite";
import { Alarm } from "@/types";
import { getAlams } from "@/db/getAllAlarm";

export function AlarmList() {
  const db = useSQLiteContext();

  const [taskId, setTaskId] = useState<Alarm[]>([]);
  useFocusEffect(
    useCallback(() => {
      async function setup() {
        const result = await getAlams(db);
        if (result) {
          setTaskId(result);
        }
      }
      setup();
    }, [])
  );
  return (
    <>
      {taskId.map((value) => {
        return (
          <AlaramItem
            key={value.id}
            id={value.id}
            time={value.time}
            enabled={value.enabled ? true : false}
          />
        );
      })}
    </>
  );
}
