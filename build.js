/* eslint-disable @typescript-eslint/no-var-requires */
const { build: runBuild } = require("esbuild");
const dotenv = require("dotenv");
const { parsed: loadedEnvs } = dotenv.config();
const pkg = require("./package.json");
const { GasPlugin } = require("esbuild-gas-plugin");
const { copy } = require("esbuild-plugin-copy");

/** @type {string[]} */
const options = process.argv.slice(2);

const debug = options.includes("--debug");
const noMinify = options.includes("--no-minify");
const watch = options.includes("--watch");

console.log("Running esbuild with following options:");
console.table({
  debug,
  noMinify,
  watch,
});

/** @type {import('esbuild').BuildOptions} */
const buildOptions = {
  entryPoints: ["./src/main.ts"],
  bundle: true,
  target: "esnext", // Lowers target to support ESNext syntax
  banner: {
    js: [
      "/*! DO NOT EDIT DIRECTLY. */",
      `/*! This code is generated from ${pkg.repository.url}/tree/main by clasp. */`,
    ].join("\n"),
  },
  define: {
    DEBUG: debug,
    // Replace `process.env.FOO` with variables written in `.env` file
    ...Object.fromEntries(
      Object.entries(loadedEnvs ?? {}).map(([key, value]) => [`process.env.${key}`, JSON.stringify(value)])
    ),
  },
  outfile: "./build/main.js",
  watch: watch,
  minify: !noMinify,
  minifyIdentifiers: false,
  logLevel: "info",
  plugins: [
    GasPlugin,
    copy({
      resolveFrom: "cwd",
      assets: {
        from: ["./static/**/*.*"],
        to: ["./build"],
      },
    }),
  ],
};

runBuild(buildOptions).catch((error) => {
  console.error(error);
  process.exit(1);
});
