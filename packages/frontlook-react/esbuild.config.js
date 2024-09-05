import * as esbuild from "esbuild";

("use strict");
await esbuild.build({
  entryPoints: ["index.ts"],
  outfile: "./dist/bundle.cjs",
  platform: "node",
  format: "cjs",
  bundle: true,
  minify: true,
});
