import { z } from "zod";

export const envSchema = z.object({
  APP_ENV: z.enum(["development", "production", "test"]).default("development"),
  TAURI_DEV_HOST: z.string().default("localhost"),
});
