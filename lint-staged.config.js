import path from "path";

const config = {
  "**/*.{ts,mts,cts,tsx}": () => "turbo run check-types --",
  "*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}": (
    /** @type {string[]} */ stagedFiles,
  ) => [
    `turbo run lint -- --file ${stagedFiles.map((f) => path.relative(process.cwd(), f)).join(" --file ")}`,
    `turbo run format:base -- ${stagedFiles.join(" ")}`,
  ],
  "!(*.js|*.mjs|*.cjs|*.jsx|*.ts|*.mts|*.cts|*.tsx)":
    "turbo run format:base --",
};

export default config;
