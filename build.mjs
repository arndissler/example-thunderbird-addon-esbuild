import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["src/**/*.html", "src/**/*.ts"],
  outdir: "dist",
  bundle: true,
  format: "esm",
  target: "es2020",
  loader: {
    ".html": "copy",
    ".ts": "ts",
  },
});

await esbuild.build({
  entryPoints: ["src/**/*.json"],
  outdir: "dist",
  loader: {
    ".json": "copy",
  },
});
