import sharedConfig from "@repo/tailwind-config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "presets" | "content"> = {
  presets: [sharedConfig],
  content: ["./src/**/*.tsx"],
};

export default config;
