import "./src/drizzle/envConfig";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./src/drizzle/schema.ts",
    out: "./src/drizzle/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.POSTGRES_URL!,
    },
});
