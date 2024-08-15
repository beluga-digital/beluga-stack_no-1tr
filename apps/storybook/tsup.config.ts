import { defineConfig, Options, BuildOptions } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/**/*.tsx", "src/"],
  format: ["esm"],
  esbuildOptions(options: BuildOptions) {
    options.banner = {
      js: '"use client"',
    };
  },
  dts: true,
  minify: true,
  treeshake: true,
  external: ["react"],
  ...options,
}));
