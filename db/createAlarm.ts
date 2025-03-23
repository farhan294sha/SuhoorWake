import { SQLiteDatabase } from "expo-sqlite";

export async function saveAlarm(db: SQLiteDatabase, date: Date) {
  try {
    await db.runAsync("INSERT INTO alarm (time) VALUES (?)", [
      date.toISOString(),
    ]);
    return true; // Success
  } catch (error) {
    console.error("FAILED TO CREATE ALARM: ", error);
    return false; // Failure
  }
}
