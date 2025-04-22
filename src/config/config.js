import { config } from "dotenv";
import fs from "fs";

const envFile = fs.existsSync("./.env") ? "./.env" : "./.env.example";

config({
  path: envFile,
});

export const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } =
  import.meta.env;
