import fs from "fs";

import { Linter } from "eslint";
import { parser } from "typescript-eslint";

// ESLint configs language options
const typeScriptAndJSXCompatible = {
  // for compatibility with TypeScript (.ts and .tsx)
  parser,
  // for compatibility with JSX (React, etc.)
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};

/**
 * $COMMENT#JSDOC#DEFINITIONS#GETSOURCECODEFROMFILEPATH
 * @param {string} absolutePath $COMMENT#JSDOC#PARAMS#ABSOLUTEPATH
 * @param {Object} [options] $COMMENT#JSDOC#PARAMS#OPTIONS
 * @param {import('eslint').Linter} [options.linter] $COMMENT#JSDOC#PARAMS#LINTEROPTION
 * @param {import('eslint').Linter.LanguageOptions} [options.languageOptions] $COMMENT#JSDOC#PARAMS#LANGUAGEOPTIONSOPTION
 * @returns $COMMENT#JSDOC#RETURNS#GETSOURCECODEFROMFILEPATH
 */
export const getSourceCodeFromFilePath = (
  absolutePath,
  { languageOptions = typeScriptAndJSXCompatible, linter = new Linter() } = {},
) => {
  // the raw code of the file at the end of the absolute path
  const code = fs.readFileSync(absolutePath, "utf8");
  // utilizes linter.verify ...
  linter.verify(code, { languageOptions });
  // ... to retrieve the raw code as a SourceCode object
  const sourceCode = linter.getSourceCode();

  if (!sourceCode) return null;
  else return sourceCode;
};
