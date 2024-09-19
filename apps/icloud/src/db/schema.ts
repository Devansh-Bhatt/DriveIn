import {
  integer,
  pgTable,
  text,
  varchar,
  serial,
  timestamp,
} from "drizzle-orm/pg-core";
import { InferSelectModel } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  phone: varchar("phone", { length: 256 }),
});

export const passkey = pgTable("passkey", {
  id: serial("id").primaryKey(),
  userId: integer("userId").references(() => users.id),
  credentialId: text("credentialId").notNull(),
  publicKey: text("publicKey").notNull(),
  counter: integer("counter").default(0),
  createdAt: integer("createdAt").default(Date.now()),
});

export const photos = pgTable("photos", {
  id: serial("id").primaryKey(),
  userId: integer("userId").references(() => users.id),
  link: text("link").notNull(),
});

export const documents = pgTable("documents", {
  id: serial("id").primaryKey(),
  userId: integer("userId").references(() => users.id),
  link: text("link").notNull(),
});

export const notes = pgTable("notes", {
  id: serial("id").primaryKey(),
  userId: integer("userId").references(() => users.id),
  content: text("content"),
  title: text("title"),
  lastUpdated: timestamp("lastUpdated").defaultNow(),
});

export type User = InferSelectModel<typeof users>;
export type Passkey = InferSelectModel<typeof passkey>;
export type Photos = InferSelectModel<typeof photos>;
export type Documents = InferSelectModel<typeof documents>;
export type Notes = InferSelectModel<typeof notes>;
