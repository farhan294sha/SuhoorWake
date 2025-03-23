import { SQLiteDatabase } from "expo-sqlite";

export async function createDb(db: SQLiteDatabase) {
  try {
    // Drop table separately
    await db.execAsync(`DROP TABLE IF EXISTS alarm;`);

    // Create table separately
    await db.execAsync(
      `CREATE TABLE IF NOT EXISTS alarm (
        id INTEGER PRIMARY KEY NOT NULL, 
        time TEXT NOT NULL,
        enabled INTEGER DEFAULT 1
      );`
    );

    console.log("DATABSE CREATE SUCCESSFULL");
  } catch (error) {
    console.error("Database creation error:", error);
  }
}