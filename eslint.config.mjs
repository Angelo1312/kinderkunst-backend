import js from "@eslint/js";
import globs from "globals"; // <-- neuer Name

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globs.node,
        process: true,
        __dirname: true,
      },
    },
    rules: {
      "no-irregular-whitespace": "error",
    },
  },
];
