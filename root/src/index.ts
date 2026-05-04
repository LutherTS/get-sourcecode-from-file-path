import fs from "fs";

import { Linter } from "eslint";
import { parser } from "typescript-eslint";

const typeScriptAndJSXCompatible = {
  parser,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
} as const satisfies Linter.LanguageOptions;

/**
 * Gets the ESLint-generated `SourceCode` object of a file from its absolute path.
 * @param absolutePath - The absolute path of the file.
 * @param options - The additional options as follows:
 * @param options.linter - The `Linter` instance used to retrieve the `SourceCode` object, defaulting to a `new Linter()` per operation ensuring each call of `getSourceCodeFromFilePath` is based on its own linter (just in case somehow some linters were to run concurrently).
 * @param options.languageOptions - The `languageOptions` object used by `linter.verify()`, defaulting to a version that is TypeScript- and JSX-compatible.
 * @returns The ESLint-generated `SourceCode` object of the file, from which the AST (`sourceCode.ast`) and all comments (`sourceCode.getAllComments()`) can be extracted. `null` when the file is nonexistent or when encountering fatal syntax.
 */
export const getSourceCodeFromFilePath = (
  absolutePath: string,
  {
    languageOptions = typeScriptAndJSXCompatible as Linter.LanguageOptions,
    linter = new Linter(),
  } = {},
) => {
  let code: string;

  try {
    code = fs.readFileSync(absolutePath, "utf8");
  } catch {
    return null;
  }

  linter.verify(code, { languageOptions });
  const sourceCode = linter.getSourceCode();

  if (!sourceCode) return null;
  else return sourceCode;
};

/* Notes
Normally I should return a success object, with `success: true` and a provided `sourceCode`, or `success: false` and provided `errors`, explaining the reasons for failures so that I can test them more precisely. But this is a really simple project, and a really simple utility that I use in situations where I'm in complete control of the inputs.
*/
