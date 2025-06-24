import fs from "fs";

import { Linter } from "eslint";
import tseslint from "typescript-eslint";

// ESLint configs language options
const typeScriptAndJSXCompatible = {
  // for compatibility with TypeScript (.ts and .tsx)
  parser: tseslint.parser,
  // for compatibility with JSX (React, etc.)
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};

/**
 * Gets the ESLint-generated SourceCode object of a file from its absolute path.
 * @param {string} absolutePath The absolute path of the file.
 * @param {Object} options The additional options as follows:
 * @param {import('eslint').Linter} [options.linter] The Linter instance used to retrieve the SourceCode object, defaulting to a `new Linter()` per operation, ensuring each instance of the function is based on its own linter (just in case somehow some linters were to run concurrently).
 * @param {import('eslint').Linter.LanguageOptions} [options.languageOptions] The languageOptions object used by `linter.verify()`, defaulting to a version that is TypeScript- and JSX-compatible.
 * @returns The ESLint-generated SourceCode object of the file, from which the AST (`sourceCode.ast`) and all comments (`sourceCode.getAllComments()`) can be extracted.
 */
export const getSourceCodeFromFilePath = (
  absolutePath,
  { languageOptions = typeScriptAndJSXCompatible, linter = new Linter() } = {}
) => {
  // the raw code of the file at the end of the absolute path
  const text = fs.readFileSync(absolutePath, "utf8");
  // utilizes linter.verify ...
  linter.verify(text, { languageOptions });
  // ... to retrieve the raw code as a SourceCode object
  const sourceCode = linter.getSourceCode();

  return sourceCode;
};
