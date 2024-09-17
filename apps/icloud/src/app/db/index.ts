import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
// import {users} from "./schema";
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL;
const client = postgres(connectionString!, { prepare: false });

export const db = drizzle(client);

// const allUsers = await db.select().from(users);
