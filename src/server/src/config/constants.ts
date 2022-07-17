import { config } from "dotenv";
import { resolve } from "path";

const environment = process.env.NODE_ENV ?? "development";

if (environment == "development")
  config({ path: resolve(__dirname, "../../../dev.env") });

if (environment == "production") config();

export const EMAIL_SENDER_NAME = process.env.EMAIL_SENDER_NAME!;
export const EMAIL_SENDER_FROM = process.env.EMAIL_SENDER_FROM!;
export const EMAIL_API_KEY = process.env.EMAIL_API_KEY!;
