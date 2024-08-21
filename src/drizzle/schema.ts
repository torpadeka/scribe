import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const db = drizzle(sql);

export const usersTable = pgTable("users", {
    email: text("email").primaryKey().notNull().unique(),
    username: text("username").notNull(),
    image: text("image").notNull(),
});
