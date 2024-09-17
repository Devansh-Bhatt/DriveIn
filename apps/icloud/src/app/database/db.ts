import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import { users } from "./schema";
import postgres from "postgres";

const connectionString = process.env.NEXT_PUBLIC_DATABASE_URL;
if (!connectionString) {
  throw new Error("Database connection string undefined");
}
// console.log(connectionString);

const client = postgres(connectionString, { prepare: false });
const db = drizzle(client);

const allUsers = await db.select().from(users);
