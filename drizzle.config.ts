import type { Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/db/schema",
  out: "./src/db/migrations",
  driver: "turso",
  dbCredentials: {
    url: env.DATABASE_URL,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  },
} satisfies Config;
