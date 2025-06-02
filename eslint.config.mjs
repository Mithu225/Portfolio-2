import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const compat = new FlatCompat({
  baseDirectory: __filename,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-trailing-spaces": "error",
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1, maxBOF: 0 }],
      "no-multi-spaces": "error",
      indent: ["error", 2],
      "no-mixed-spaces-and-tabs": "error",
      "eol-last": ["error", "always"],
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
