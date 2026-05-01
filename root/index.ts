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
 * $COMMENT#JSDOC#DEFINITIONS#GETSOURCECODEFROMFILEPATH
 * @param absolutePath - $COMMENT#JSDOC#PARAMS#ABSOLUTEPATH
 * @param options - $COMMENT#JSDOC#PARAMS#OPTIONS
 * @param options.linter - $COMMENT#JSDOC#PARAMS#LINTEROPTION
 * @param options.languageOptions - $COMMENT#JSDOC#PARAMS#LANGUAGEOPTIONSOPTION
 * @returns $COMMENT#JSDOC#RETURNS#GETSOURCECODEFROMFILEPATH
 */
export const getSourceCodeFromFilePath = (
  absolutePath: string,
  {
    languageOptions = typeScriptAndJSXCompatible as Linter.LanguageOptions,
    linter = new Linter(),
  } = {},
) => {
  const code = fs.readFileSync(absolutePath, "utf8");
  linter.verify(code, { languageOptions });
  const sourceCode = linter.getSourceCode();

  if (!sourceCode) return null;
  else return sourceCode;
};
