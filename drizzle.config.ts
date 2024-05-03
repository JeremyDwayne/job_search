import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
import { env } from "~/env";

dotenv.config();

export default {
  schema: "./src/server/db/schema.ts",
  out: "./src/server/db/migrations",
  driver: "turso",
  dbCredentials: {
    url: env.TURSO_DATABASE_URL,
    authToken: env.TURSO_AUTH_TOKEN,
  },
} satisfies Config;
