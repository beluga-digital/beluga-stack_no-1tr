// tailwind config is required for editor support

import sharedConfig from "@repo/tailwind-config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "prefix" | "content" | "presets" | "darkMode"> = {
  presets: [sharedConfig],
  content: ["../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}"],
};

export default config;
