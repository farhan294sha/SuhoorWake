import { Alarm } from "@/types";
import { SQLiteDatabase } from "expo-sqlite";

export async function getAlams(db: SQLiteDatabase) {
  try {
    const result = await db.getAllAsync<Alarm>(
      "SELECT id, time, enabled FROM alarm"
    );
    return result;
  } catch (error) {
    return null;
  }
}
